require("./db");
import express, { Application, Request, Response } from "express";
import "dotenv/config";
import gameRoute from "./routes/game.routes";
import portfolioRoute from "./routes/portfolio.routes";
import cors from "cors";

const app: Application = express();
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Oh, hello. I didn't see you there");
});

app.use("/game", gameRoute);
app.use("/portfolio", portfolioRoute);

let PORT: string | number = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log("\x1b[33m%s\x1b[0m", `http://localhost:${PORT}/`)
);
