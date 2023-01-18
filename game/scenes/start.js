import addButton from "../functions/addButton.js";
import addInput from "../functions/addInput.js";

export default function start() {
  layers(["bg", "game", "ui"], "game");
  add([sprite("background"), pos(0, 0), scale(1.1), fixed(), "bg"]);

  const music = play("jingle", {
    volume: 0.5,
    loop: true,
  });
  music.play();

  // validation text for alias
  const ops = add([
    text("", { font: "press" }),
    { size: 82, width: width() - 300, align: "center", font: "press" },
    pos(vec2(center().x, center().y)),
    origin("center"),
    color(228, 36, 22),
  ]);

  // button
  addButton("Starta spelet", "", vec2(center().x, center().y - 100), () => {
    music.pause();
    if (alias.isName().length > 0) {
      go("game", { levelIdx: 0, score: 0, name: alias.isName() });
    } else {
      ops.text = "Oops, ange ett alias!";
    }
  });
  // input
  const alias = addInput("Alias:", vec2(center().x, center().y - 200), () => {
    if (alias.isName().length > 0) {
      ops.text = "";
    }
  });

  //mouse movement fun
  const sprites = ["player", "choco", "cup"];
  onMouseMove(() =>
    add([
      pos(mousePos()),
      sprite(choose(sprites)),
      origin("center"),
      scale(rand(0.05, 0.11)),
      area(),
      body({ solid: false }),
      lifespan(1, { fade: 0.5 }),
      move(choose([LEFT, RIGHT]), rand(60, 240)),
    ])
  );
}
