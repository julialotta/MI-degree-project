require("./db");
import express, { Application, Request, Response } from "express";
import "dotenv/config";

const app: Application = express();

app.get("/toto", (req: Request, res: Response) => {
  res.send("Hello toto");
});

let PORT: string | number = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log("\x1b[33m%s\x1b[0m", `http://localhost:${PORT}/`)
);
