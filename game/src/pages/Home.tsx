import kaboom from "kaboom";
import * as React from "react";
import { levels } from "../components/gameComponents/Levels";

export const Home: React.FC = () => {
  const canvas = document.getElementById("mycanvas") as HTMLCanvasElement;

  let i = 0;

  React.useEffect(() => {
    i++;

    if (i === 1) {
      let score = 0;
      //const FLOOR_HEIGHT = 48;
      const JUMP_FORCE = 1100;
      const MOVE_SPEED = 480;

      let k: any = kaboom({
        global: true,
        canvas: canvas,
        background: [0, 0, 255],
        debug: true,
      });

      //IMAGES
      k.loadRoot("https://i.imgur.com/");
      k.loadFont("press", "nkLV4Pb.png", 30, 30);
      k.loadSprite("player", "lMmlXVs.png");
      k.loadSprite("cup", "fRznfCo.png ");
      k.loadSprite("choco", "mvIxX5N.png ");
      k.loadSprite("bug", "RgKbtYC.png ");
      k.loadSprite("brick", "jLKUZ1N.png ");
      k.loadSprite("surprise", "sH6HHZN.png ");
      k.loadSprite("life", "z4haxpk.png ");
      k.loadSprite("background", "ePsjzsd.png");
      k.loadSprite("lostbackground", "U1udZou.png");

      k.scene("start", () => {
        k.layers(["bg", "game", "ui"], "game");
        k.add([k.sprite("background"), k.pos(0, 0), k.scale(1), "bg"]);

        k.gravity(2400);

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
      k.scene("game", () => {
        let levelIdx: number = 0;
        k.layers(["bg", "game", "ui"], "game");
        k.add([k.sprite("background"), k.pos(0, 0), k.scale(1), "bg"]);
        const player = k.add([
          k.sprite("player"),
          k.pos(80, 40),
          k.scale(0.11),
          k.area(),
          k.body(),
        ]);
        k.onKeyPress("space", () => {
          if (player.isGrounded()) {
            player.jump(JUMP_FORCE);
          }
        });
        k.onKeyDown("left", () => {
          player.move(-MOVE_SPEED, 0);
        });

        k.onKeyDown("right", () => {
          player.move(MOVE_SPEED, 0);
        });

        k.addLevel(levels[levelIdx], {
          width: 64,
          height: 64,
          pos: vec2(64, 64),

          "=": () => [sprite("brick"), area(), solid(), scale(0.2), "ui"],
          $: () => [
            sprite("surprise"),
            area(),
            pos(0, -9),
            scale(0.2),
            solid(),
          ],
          "^": () => [sprite("cup"), area(), scale(0.1)],
          "&": () => [sprite("player"), area(), body(), scale(0.3), "ui"],
        });
        /*  

        k.gravity(2400);

        const scoreLabel = k.add([
          k.text(score.toString(), { font: "press" }),
          k.pos(24, 24),
          k.color(254, 136, 213),
        ]);

        //player
        const player = k.add([
          k.sprite("player"),
          k.pos(80, 40),
          k.scale(0.11),
          k.area(),
          k.body(),
        ]);
        k.add([k.sprite("cup"), k.scale(0.1), k.pos(80, 40), k.area()]);
        // add platform
        k.add([
          k.rect(width(), FLOOR_HEIGHT),
          k.pos(0, k.height() - 50),
          k.outline(4),
          k.area(),
          k.solid(),
          k.color(127, 300, 255),
        ]);

        

        player.onCollide("bug", () => {
          //player.destroy();
          k.shake(5);
          k.addKaboom(player.pos);
          k.go("lose");
        });

        k.onUpdate(() => {
          score++;
          scoreLabel.text = score.toString();
        });
        spawnTree();

        function spawnTree() {
          //bug
          k.add([
            k.sprite("bug"),
            //k.rect(50, k.rand(24, 64)),
            k.scale(k.rand(0.09, 0.13)),
            k.area(),
            k.pos(k.width(), k.height() - 50),
            k.origin("botleft"),
            k.move(k.LEFT, 220),
            "bug", // add a tag here
          ]);
          k.wait(k.rand(1.5, 2), () => {
            spawnTree();
          });
        } */
      });

      //LOOSING SCREEN
      k.scene("lose", () => {
        k.add([
          k.sprite("lostbackground"),
          k.pos(0, 0),
          k.scale(1),
          k.fixed(),
          "bg",
        ]);
        const textbox = k.add([
          k.rect(k.width() - 180, 250, { radius: 32 }),
          k.origin("center"),
          k.pos(k.center().x, k.height().y),
          k.outline(4),
          k.color(210, 242, 221),
        ]);
        k.add([
          k.text("Score:" + score.toString() + "\n\nGame Over :("),
          { size: 82, width: k.width() - 300, align: "center", font: "press" },
          pos(textbox.pos),
          k.color(254, 136, 213),
          k.origin("center"),
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

      k.go("start");
    }
  });

  return <></>;
};
