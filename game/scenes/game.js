import levels from "../components/levels.js";
import patrol from "../functions/patrol.js";
import big from "../functions/big.js";

export default function game({ levelIdx, score, name }) {
  add([sprite("background"), pos(0, 0), scale(1), fixed(), "bg"]);

  //reusable variables
  const JUMP_FORCE = 800;
  const BIG_JUMP_FORCE = 1000;
  const MOVE_SPEED = 400;
  const FALL_DEATH = 2000;

  const level = addLevel(levels[levelIdx], {
    width: 50,
    height: 50,
    pos: vec2(100, 200),

    //define sprites
    "=": () => [sprite("ground"), area(), solid(), scale(0.2), "ui"],
    "^": () => [sprite("thorn"), area(), solid(), body(), scale(0.19), "thorn"],
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
    y: () => [sprite("surprise"), area(), scale(0.2), solid(), "surprisechoco"],
    "!": () => [sprite("unboxed"), area(), scale(0.2), solid(), "unboxed"],
    "#": () => [sprite("bug"), area(), scale(0.1), body(), patrol(), "bug"],
    "<": () => [sprite("choco"), area(), scale(0.15), "choco"],
    c: () => [sprite("cup"), area(), scale(0.1), body(), "cup"],
    "&": () => [sprite("player"), area(), body(), scale(0.3), "ui"],
  });

  //music
  play("land");
  const music = play("song", {
    volume: 0.4,
    loop: true,
  });
  music.play();

  //key functions
  onKeyPress("space", () => {
    if (player.isGrounded()) {
      play("jump");
      if (player.isBig) {
        player.jump(BIG_JUMP_FORCE);
      } else {
        player.jump(JUMP_FORCE);
      }
    }
  });

  onKeyPress("up", () => {
    if (player.isGrounded()) {
      play("jump");
      if (player.isBig) {
        player.jump(BIG_JUMP_FORCE);
      } else {
        player.jump(JUMP_FORCE);
      }
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

  // score text on screen
  const scoreLabel = add([
    text(score, { font: "press" }),
    pos(center().x + center().x - 54, 24),
    color(254, 136, 213),
    { value: score },
    fixed(),
  ]);

  //level text on screen
  add([
    text("Level " + parseInt(levelIdx + 1) + " av " + levels.length, {
      font: "press",
    }),
    pos(24, 24),
    color(254, 136, 213),
    { value: levelIdx },
    fixed(),
  ]);

  //player touches surpriseboxes with head
  player.onHeadbutt((obj) => {
    if (obj.is("surprisebug")) {
      play("box");
      destroy(obj);
      const apple = level.spawn("#", obj.gridPos.sub(0, 1));
      level.spawn("!", obj.gridPos.sub(0, 0));
      apple.jump(200);
    }
    if (obj.is("surprisecup")) {
      play("box");
      destroy(obj);
      const apple = level.spawn("c", obj.gridPos.sub(0, 1));
      level.spawn("!", obj.gridPos.sub(0, 0));
      apple.jump(200);
    }
    if (obj.is("surprisechoco")) {
      destroy(obj);
      play("box");
      level.spawn("<", obj.gridPos.sub(0, 1));
      level.spawn("!", obj.gridPos.sub(0, 0));
    }
  });

  //player gets points from chocolate
  player.onCollide("choco", (choco) => {
    destroy(choco);
    play("points");
    scoreLabel.value++;
    scoreLabel.text = scoreLabel.value;
  });

  //player collides with bug on ground
  player.onCollide("bug", (e, col) => {
    if (!col.isBottom() && player.isBig()) {
      player.smallify();
      play("powerdown");
      destroy(e);
      return;
    }
    if (!col.isBottom() && !player.isBig()) {
      music.pause();
      go("lose", { score: scoreLabel.value, name: name });
    }
  });

  //player jumps on bug
  player.onGround((l) => {
    if (l.is("bug")) {
      player.jump(1185);
      play("bigjump");
      play("points");
      destroy(l);
      scoreLabel.value++;
      scoreLabel.text = scoreLabel.value;
      addKaboom(player.pos);
    }
  });

  //player collides with thorn
  player.onCollide("thorn", (thorn) => {
    destroy(thorn);
    music.pause();
    go("lose", { score: scoreLabel.value, name: name });
  });

  //player slides down tube
  player.onCollide("tube", () => {
    onKeyPress("down", () => {
      if (levelIdx === levels.length - 1) {
        music.pause();

        go("win", { score: scoreLabel.value, name: name });
      } else {
        music.pause();
        go("game", {
          levelIdx: levelIdx + 1,
          score: scoreLabel.value,
          name: name,
        });
      }
    });
  });

  player.onUpdate(() => {
    //track player on screen
    camPos(player.pos);
    // if player falls off ground
    if (player.pos.y >= FALL_DEATH) {
      music.pause();
      play("fall");
      go("lose", { score: scoreLabel.value, name: name });
    }
  });

  //player gets big from coffee
  player.onCollide("cup", (m) => {
    play("power");
    destroy(m);
    player.biggify(6);
  });
}
