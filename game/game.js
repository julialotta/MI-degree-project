// LEVEL 3: https://kaboomjs.com/play?demo=runner

kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
  background: [0, 0, 255],
});

//IMAGES
loadRoot("https://i.imgur.com/");
loadFont("press", "nkLV4Pb.png", 30, 30);
loadSprite("player", "lMmlXVs.png");
loadSprite("cup", "fRznfCo.png ");
loadSprite("choco", "mvIxX5N.png ");
loadSprite("bug", "RgKbtYC.png ");
loadSprite("brick", "jLKUZ1N.png ");
loadSprite("surprise", "sH6HHZN.png ");
loadSprite("background", "ePsjzsd.png");
loadSprite("lostbackground", "U1udZou.png");

const levels = [
  [
    "                     ",
    "                     ",
    "                     ",
    "                     ",
    "                     ",
    "    $                ",
    "                     ",
    "                     ",
    "=====================",
  ],
  [
    "                     ",
    "                     ",
    "                     ",
    "                     ",
    "                     ",
    "    $                ",
    "                     ",
    "                     ",
    "=====================",
  ],
  [
    "                     ",
    "                     ",
    "                     ",
    "                     ",
    "                     ",
    "    $                ",
    "                     ",
    "                     ",
    "=====================",
  ],
];

//const FLOOR_HEIGHT = 48;
const JUMP_FORCE = 1100;
const MOVE_SPEED = 480;
let score = 0;

const sprites = ["player", "cup", "choco", "surprise", "lightening"];
// STARTING SCREEN
scene("start", () => {
  layers(["bg", "game", "ui"], "game");
  add([sprite("background"), pos(0, 0), scale(1), "bg"]);

  add([text("Tjena", { font: "press" }), pos(24, 24), color(254, 136, 213)]);

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

  onKeyPress("space", () => {
    go("game");
    score = 0;
  });
  onClick(() => {
    go("game");
    score = 0;
  });
});

// LEVEL 1
scene("game", () => {
  layers(["bg", "game", "ui"], "game");
  add([sprite("background"), pos(0, 0), scale(1), "bg"]);
  let levelIdx = 0;

  const player = add([
    sprite("player"),
    pos(80, 40),
    scale(0.11),
    area(),
    body(),
  ]);

  onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump(JUMP_FORCE);
    }
  });
  onKeyDown("left", () => {
    player.move(-MOVE_SPEED, 0);
  });

  onKeyDown("right", () => {
    player.move(MOVE_SPEED, 0);
  });

  const level = addLevel(levels[levelIdx], {
    width: 55,
    height: 59,
    pos: vec2(60, 60),

    "=": () => [sprite("brick"), area(), solid(), scale(0.2), "ui"],
    $: () => [
      sprite("surprise"),
      area(),
      pos(0, -9),
      scale(0.2),
      solid(),
      "surprise",
    ],
    "#": () => [sprite("cup"), area(), scale(0.1), body(), "cup"],
    "&": () => [sprite("player"), area(), body(), scale(0.3), "ui"],
  });
  add([
    text(score.toString(), { font: "press" }),
    pos(24, 24),
    color(254, 136, 213),
  ]);
  let hasApple = false;

  player.onHeadbutt((obj) => {
    if (obj.is("surprise") && !hasApple) {
      console.log("happening");
      const apple = level.spawn("#", obj.gridPos.sub(0, 1));
      apple.jump(200);
      hasApple = true;
    }
  });
});

//LOOSING SCREEN
scene("lose", () => {
  add([sprite("lostbackground"), pos(0, 0), scale(1), fixed(), "bg"]);
  const textbox = add([
    rect(width() - 180, 250, { radius: 32 }),
    origin("center"),
    pos(center().x, height().y),
    outline(4),
    color(210, 242, 221),
  ]);
  add([
    text("Score:" + score.toString() + "\n\nGame Over :("),
    { size: 82, width: width() - 300, align: "center", font: "press" },
    pos(textbox.pos),
    color(254, 136, 213),
    origin("center"),
  ]);

  onKeyPress("space", () => {
    go("start");
    score = 0;
  });
  onClick(() => {
    go("start");
    score = 0;
  });
});

go("start");
