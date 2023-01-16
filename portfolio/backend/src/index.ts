require("./db");
import express, { Application, Request, Response } from "express";
import "dotenv/config";
import duolingoRoute from "./routes/duolingodays.routes";
import gameRoute from "./routes/game.routes";
import portfolioRoute from "./routes/portfolio.routes";
import cors from "cors";
import { ImageModel } from "./models/Image.model";

const multer = require("multer");
const app: Application = express();
app.use(cors({ origin: true }));

const upload = multer({ dest: "./public/data/uploads/" });

app.post("/stats", upload.single("uploaded_file"), function (req: any, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any
  console.log(req.file, req.body);
  const newImage = new ImageModel({
    name: req.file.originalname,
    image: { data: req.file, contentType: "image/png" },
  });
  newImage.save();
  res.send("ok");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello toto");
});

app.use("/duolingo", duolingoRoute);
app.use("/game", gameRoute);
app.use("/portfolio", portfolioRoute);

/* const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req: any, file: any, cb: any) => {
    cb(null, file.orginialname);
  },
});
const upload = multer({ storage: Storage }).single("testImage"); */

/* app.post("/upload", (req, res, next) => {
  console.log("försöker");

  upload(req, res, next, (err: any) => {
    console.log("här");
    console.log("name:", req.body.name);
    console.log("====================================");
    console.log(err);
    console.log("====================================");

    const newImage = new ImageModel({
      name: req.body.name,
      image: { data: req.body.filename, contentType: "image/png" },
    });
    console.log("okej", newImage);

    newImage
      .save()
      .then(() => {
        console.log("ja");

        res.send("sucessfully uploaded");
      })
      .catch((err) => {
        console.log(err);
      });
  });
}); */
let PORT: string | number = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log("\x1b[33m%s\x1b[0m", `http://localhost:${PORT}/`)
);
