// LEVEL 2: https://kaboomjs.com/play?demo=runner
// LEVEL 3: https://kaboomjs.com/play?demo=shooter

// om tid finns, "animera" playern från sidan/bakifrån https://kaboomjs.com/play?demo=spriteMerged

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
loadSprite("cup", "fRznfCo.png");
loadSprite("choco", "kNWJMvz.png");
loadSprite("bug", "RgKbtYC.png ");
loadSprite("brick", "z7vAI7d.png");
loadSprite("surprise", "2lWTZBX.png");
loadSprite("unboxed", "nrLPTyZ.png");
loadSprite("background", "ePsjzsd.png");
loadSprite("lostbackground", "U1udZou.png");
loadSprite("ground", "z7vAI7d.png");
loadSprite("tube", "Er86a2B.png");

const levels = [
  [
    "                       ",
    "                       ",
    "                       ",
    "         <<<           ",
    "  x $   =====          ",
    "                       ",
    "                       ",
    "                       ",
    "======================|",
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
const JUMP_FORCE = 900;
const MOVE_SPEED = 400;
const BIG_JUMP_FORCE = 550;
let CURRENT_JUMP_FORCE = JUMP_FORCE;
const FALL_DEATH = 900;
const ENEMY_SPEED = 20;
let score = 0;

const sprites = ["player", "choco", "cup"];
// STARTING SCREEN
scene("start", () => {
  layers(["bg", "game", "ui"], "game");
  add([sprite("background"), pos(0, 0), scale(1.1), "bg"]);
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
    fullscreen(isFullscreen());
    go("game", { levelIdx: 0, score: 0 });
  });

  onClick(() => {
    fullscreen(isFullscreen());
    go("game", { levelIdx: 0, score: 0 });
  });
});

// LEVEL 1
scene("game", ({ levelIdx, score }) => {
  layers(["bg", "game", "ui"], "game");

  add([sprite("background"), pos(0, 0), scale(1), "bg"]);

  const level = addLevel(levels[levelIdx], {
    width: 50,
    height: 50,
    pos: vec2(100, 200),

    "=": () => [sprite("ground"), area(), solid(), scale(0.2), "ui"],
    "|": () => [
      sprite("tube"),
      area(),
      pos(-25, -35),
      solid(),
      scale(0.3),
      "tube",
    ],
    $: () => [sprite("surprise"), area(), scale(0.2), solid(), "surprisebug"],
    x: () => [sprite("surprise"), area(), scale(0.2), solid(), "surprisecup"],
    "!": () => [sprite("unboxed"), area(), scale(0.2), solid(), "unboxed"],
    "#": () => [sprite("bug"), area(), scale(0.1), body(), "bug"],
    "<": () => [sprite("choco"), area(), scale(0.15), body(), "choco"],
    c: () => [sprite("cup"), area(), scale(0.1), body(), "cup"],
    "&": () => [sprite("player"), area(), body(), scale(0.3), "ui"],
  });
  onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump(JUMP_FORCE);
    }
  });

  onKeyPress("up", () => {
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

  const player = add([
    sprite("player"),
    pos(80, 40),
    scale(0.11),
    area(),
    body(),
    big(),
  ]);

  const scoreLabel = add([
    text(score, { font: "press" }),
    pos(24, 24),
    color(254, 136, 213),
    { value: score },
  ]);
  let hasCup = false;
  let hasBug = false;

  player.onHeadbutt((obj) => {
    if (obj.is("surprisebug") && !hasBug) {
      const apple = level.spawn("#", obj.gridPos.sub(0, 1));
      level.spawn("!", obj.gridPos.sub(0, 0));
      apple.jump(200);
      hasBug = true;
    }
  });

  player.onHeadbutt((obj) => {
    if (obj.is("surprisecup") && !hasCup) {
      const apple = level.spawn("c", obj.gridPos.sub(0, 1));
      level.spawn("!", obj.gridPos.sub(0, 0));
      apple.jump(200);
      hasCup = true;
    }
  });

  onUpdate("bug", (m) => {
    m.move(30, 0, 20);
  });

  // Eat the coin!
  player.onCollide("choco", (choco) => {
    destroy(choco);
    scoreLabel.value++;
    scoreLabel.text = scoreLabel.value;
  });

  player.onCollide("bug", (bug) => {
    destroy(bug);

    go("lose", { score: scoreLabel.value });
  });

  player.onCollide("tube", () => {
    keyPress("down", () => {
      go("game", {
        levelIdx: levelIdx + 1,
        score: scoreLabel.value,
      });
    });
  });
  // Fall death
  player.onUpdate(() => {
    if (player.pos.y >= FALL_DEATH) {
      go("lose", { score: scoreLabel.value });
    }
  });
  function big() {
    let timer = 0;
    let isBig = false;
    return {
      update() {
        if (isBig) {
          CURRENT_JUMP_FORCE = BIG_JUMP_FORCE;
          // timer minus delta time since last frame
          timer -= dt();

          if (timer <= 0) {
            this.smallify();
          }
        }
      },
      isBig() {
        return isBig;
      },
      smallify() {
        this.scale = vec2(1);
        player.pos = (0, 0);
        CURRENT_JUMP_FORCE = JUMP_FORCE;
        timer = 0;
        isBig = false;
      },
      biggify(time) {
        this.scale = vec2(0.11, 0, 11);

        timer = time;
        isBig = true;
      },
    };
  }

  player.onCollide("cup", (m) => {
    destroy(m);
    player.biggify(6);
  });
});

//LOOSING SCREEN
scene("lose", ({ score }) => {
  add([sprite("lostbackground"), pos(0, 0), scale(1), fixed(), "bg"]);
  const textbox = add([
    rect(width() - 180, 250, { radius: 32 }),
    origin("center"),
    pos(center().x, center().y),
    outline(4),
    color(210, 242, 221),
  ]);
  add([
    text("Score:" + score + "\n\nGame Over :("),
    { size: 82, width: width() - 300, align: "center", font: "press" },
    pos(textbox.pos),
    color(254, 136, 213),
    origin("center"),
  ]);

  onKeyPress("space", () => {
    go("start");
  });
  onClick(() => {
    go("start");
  });
});

go("start");
