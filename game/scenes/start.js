export default function start() {
  layers(["bg", "game", "ui"], "game");
  const sprites = ["player", "choco", "cup"];
  add([sprite("background"), pos(0, 0), scale(1.1), fixed(), "bg"]);
  const music = play("jingle", {
    volume: 0.5,
    loop: true,
  });

  music.play();
  // define a button
  function addButton(txt, p, f) {
    const btn = add([
      rect(width() - width() / 3, 60, { radius: 32 }),
      origin("center"),
      pos(p),
      outline(4),
      area({ cursor: "pointer" }),
      "textbox",
    ]);

    add([
      text(txt),
      { size: 82, width: width() - 300, align: "center", font: "press" },
      pos(p),
      origin("center"),
      color(254, 136, 213),
    ]);

    btn.onClick(f);

    btn.onUpdate(() => {
      if (btn.isHovering()) {
        btn.color = rgb();
        btn.scale = vec2(1.2);
        cursor("pointer");
      } else {
        cursor("default");
        btn.scale = vec2(1);
        btn.color = rgb(210, 242, 221);
      }
    });
  }
  function addInput(p, f) {
    const input = add([
      onCharInput((ch) => {
        input.text += ch;
      }),
      rect(width() - width() / 3, 60, { radius: 32 }),
      origin("center"),
      pos(p),
      outline(4),
      area({ cursor: "pointer" }),
      "textbox",
    ]);
  }

  // button instances
  addButton("Starta spelet", vec2(center().x, center().y - 100), () => {
    music.pause();
    go("game", { levelIdx: 0, score: 0 });
  });
  addInput(vec2(center().x, center().y - 200), () => {
    onCharInput((ch) => {
      input.text += ch;
    });
  });

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
