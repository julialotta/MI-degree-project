// https://kaboomjs.com/play?demo=platformer

// om tid finns, "animera" playern från sidan/bakifrån https://kaboomjs.com/play?demo=spriteMerged
import levels from "./components/levels.js";
import patrol from "./functions/patrol.js";
import big from "./functions/big.js";
import start from "./scenes/start.js";

kaboom({
  global: true,
  //fullscreen: true,
  scale: 1,
  debug: true,
  background: [210, 242, 221],
});

//IMAGES
loadSound("ohno", "assets/sounds/ohno.mp3");
loadSound("land", "assets/sounds/land.mp3");
loadSound("jump", "assets/sounds/jump.mp3");
loadSound("points", "assets/sounds/points.mp3");
loadSound("bigjump", "assets/sounds/bigjump.mp3");
loadSound("jingle", "assets/sounds/jingle.mp3");
loadSound("fall", "assets/sounds/fall.mp3");
loadSound("box", "assets/sounds/box.mp3");
loadSound("power", "assets/sounds/power.mp3");
loadSound("powerdown", "assets/sounds/powerdown.mp3");
loadFont("press", "assets/images/press.png", 30, 30);
loadSprite("background", "assets/images/bg.png");
loadSprite("player", "assets/images/player.png");
loadSprite("choco", "assets/images/choco.png");
loadSprite("cup", "assets/images/cup.png");
loadSprite("bug", "assets/images/bug.png");
loadSprite("surprise", "assets/images/surprise.png");
loadSprite("unboxed", "assets/images/unboxed.png");
loadSprite("lostbackground", "assets/images/lostbg.png");
loadSprite("ground", "assets/images/ground.png");
loadSprite("tube", "assets/images/tube.png");

//const FLOOR_HEIGHT = 48;

// STARTING SCREEN
scene("start", start);

// LEVEL 1
scene("game", ({ levelIdx, score }) => {
  let CURRENT_JUMP_FORCE = 800;
  const MOVE_SPEED = 400;
  const FALL_DEATH = 2000;

  layers(["bg", "game", "ui"], "game");
  add([sprite("background"), pos(0, 0), scale(1), fixed(), "bg"]);
  play("land");
  const level = addLevel(levels[levelIdx], {
    width: 50,
    height: 50,
    pos: vec2(100, 200),

    "=": () => [sprite("ground"), area(), solid(), scale(0.2), "ui"],
    "^": () => [sprite("ground"), area(), solid(), scale(0.2), "ui"],
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
    "#": () => [sprite("bug"), area(), scale(0.1), body(), patrol(), "bug"],
    "<": () => [sprite("choco"), area(), scale(0.15), "choco"],
    c: () => [sprite("cup"), area(), scale(0.1), body(), "cup"],
    "&": () => [sprite("player"), area(), body(), scale(0.3), "ui"],
  });
  onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump(CURRENT_JUMP_FORCE);
      play("jump");
    }
  });

  onKeyPress("up", () => {
    if (player.isGrounded()) {
      player.jump(CURRENT_JUMP_FORCE);
      play("jump");
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
    scale(0.09),
    area(),
    body(),
    big(),
  ]);

  const scoreLabel = add([
    text(score, { font: "press" }),
    pos(center().x + center().x - 54, 24),
    color(254, 136, 213),
    { value: score },
    fixed(),
  ]);
  add([
    text("Level " + parseInt(levelIdx + 1), { font: "press" }),
    pos(24, 24),
    color(254, 136, 213),
    { value: levelIdx },
    fixed(),
  ]);
  let hasCup = false;
  let hasBug = false;

  player.onHeadbutt((obj) => {
    if (obj.is("surprisebug") && !hasBug) {
      play("box");
      const apple = level.spawn("#", obj.gridPos.sub(0, 1));
      level.spawn("!", obj.gridPos.sub(0, 0));
      apple.jump(200);
      hasBug = true;
    }
    if (obj.is("surprisecup") && !hasCup) {
      play("box");
      const apple = level.spawn("c", obj.gridPos.sub(0, 1));
      level.spawn("!", obj.gridPos.sub(0, 0));
      apple.jump(200);
      hasCup = true;
    }
  });

  // Eat the coin!
  player.onCollide("choco", (choco) => {
    destroy(choco);
    play("points");
    scoreLabel.value++;
    scoreLabel.text = scoreLabel.value;
  });

  player.onCollide("bug", (e, col) => {
    // if it's not from the top, die
    if (!col.isBottom()) {
      go("lose", { score: scoreLabel.value });
    }
  });

  player.onCollide("tube", () => {
    onKeyPress("down", () => {
      go("game", {
        levelIdx: levelIdx + 1,
        score: scoreLabel.value,
      });
    });
  });
  // Fall death
  player.onUpdate(() => {
    //track player on screen
    camPos(player.pos);
    if (player.pos.y >= FALL_DEATH - 700) {
      play("fall");
    }
    if (player.pos.y >= FALL_DEATH) {
      go("lose", { score: scoreLabel.value });
    }
  });

  player.onGround((l) => {
    if (l.is("bug")) {
      player.jump(1185);
      play("bigjump");
      destroy(l);
      addKaboom(player.pos);
    }
  });

  player.onCollide("cup", (m) => {
    play("power");
    destroy(m);
    player.biggify(6);
    CURRENT_JUMP_FORCE = 1000;
  });
});

//LOOSING SCREEN
scene("lose", ({ score }) => {
  add([sprite("lostbackground"), pos(0, 0), scale(1), fixed(), "bg"]);
  play("ohno");
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
