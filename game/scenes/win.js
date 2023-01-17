import addButton from "../functions/addButton.js";

export default function win({ score, name }) {
  add([sprite("background"), pos(0, 0), scale(1), fixed(), "bg"]);
  const music = play("jingle", {
    volume: 0.5,
    loop: true,
  });
  music.play();

  const textbox = add([
    rect(width() - 180, 250, { radius: 32 }),
    origin("center"),
    pos(center().x, center().y - 150),
    color(254, 136, 213),
    outline(4),
  ]);

  add([
    text("Woho " + name + "\n\nYOU WON! :)" + "\n\nScore:" + score),
    { size: 82, width: width() - 300, align: "center", font: "press" },
    pos(textbox.pos),
    color(210, 242, 221),
    origin("center"),
  ]);

  // button
  addButton("Spara highscore", vec2(center().x, center().y + 100), () => {
    music.pause();
    if (alias.isName().length > 0) {
      go("game", { levelIdx: 0, score: 0, name: alias.isName() });
    } else {
      alert("enter alias");
    }
  });

  onKeyPress("space", () => {
    go("start");
    music.pause();
  });
  onClick(() => {
    go("start");
    music.pause();
  });
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
