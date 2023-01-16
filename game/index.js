// https://kaboomjs.com/play?demo=platformer

// om tid finns, "animera" playern från sidan/bakifrån https://kaboomjs.com/play?demo=spriteMerged

// bra struktur: https://www.youtube.com/watch?v=iRXI6ThRJvM

import start from "./scenes/start.js";
import game from "./scenes/game.js";
import lose from "./scenes/lose.js";

kaboom({
  global: true,
  scale: 1,
  debug: true,
  background: [210, 242, 221],
});

//SOUNDS
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

//FONTS
loadFont("press", "assets/images/press.png", 30, 30);

//IMAGES
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

// SCENES
scene("start", start);
scene("game", game);

//LOOSING SCREEN
scene("lose", lose);

go("start");
