import addButton from "../functions/addButton.js";
import saveScore from "../functions/saveScore.js";

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

  const txt = add([
    text("Woho " + name + "\n\nYOU WON! :)" + "\n\nScore:" + score),
    { size: 82, width: width() - 300, align: "center", font: "press" },
    pos(textbox.pos),
    color(210, 242, 221),
    origin("center"),
  ]);

  addButton(
    "Spara highscore",
    "Sparat",
    vec2(center().x, center().y + 100),
    () => {
      music.pause();
      saveScore({ name, score });
      txt.text = "Sparat!";
    }
  );

  addButton("Spela igen", "", vec2(center().x, center().y + 200), () => {
    go("start");
    music.pause();
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
