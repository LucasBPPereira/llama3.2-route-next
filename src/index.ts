
import dotenv from "dotenv";
import { App } from "./app";

dotenv.config();

const PORT = process.env.APP_PORT;

const app = new App();

app.listen(
  Number(PORT) || 3005
);