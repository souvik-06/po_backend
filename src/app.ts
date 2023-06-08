import express, { Express } from "express";
import cors from "cors";
import serverless from "serverless-http";
import { router as routes } from "./routes/index";

import dotenv from "dotenv";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8001;

app.use(express.json());
const allowedOrigins = [
  "https://main.d3mnesf1q6tdjo.amplifyapp.com",
  "http://localhost:3000",
];

// Enable CORS with the allowed origins
app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use("/", routes);

// Start the servern
app.listen(port, (): void => {
  console.log(`App running on port ${port}!`);
});
module.exports.handler = serverless(app);
