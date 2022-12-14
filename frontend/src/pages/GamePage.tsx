import kaboom from "kaboom";
import * as React from "react";

export const GamePage: React.FC = () => {
  const canvas = document.getElementById("mycanvas") as HTMLCanvasElement;

  let i = 0;

  React.useEffect(() => {
    i++;
    let k: any;

    if (i === 1) {
      let score = 0;
      const FLOOR_HEIGHT = 48;
      const JUMP_FORCE = 900;
      const SPEED = 480;

      k = kaboom({
        global: true,
        canvas: canvas,
      });
      k.loadRoot("https://i.imgur.com/");
      k.loadSprite("player", "Wb1qfhK.png");

      k.scene("game", () => {
        k.layers(["bg", "game", "ui"], "game");

        k.gravity(2400);

        const scoreLabel = k.add([k.text(score.toString()), k.pos(24, 24)]);

        //player
        const player = k.add([
          k.sprite("player"),
          k.pos(80, 40),
          k.area(),
          k.body(),
        ]);
        // add platform
        k.add([
          k.rect(width(), FLOOR_HEIGHT),

          k.pos(0, k.height() - 50),
          k.outline(4),
          k.area(),
          k.solid(),
          k.color(127, 200, 255),
        ]);

        k.onKeyPress("space", () => {
          if (player.isGrounded()) {
            player.jump(JUMP_FORCE);
          }
        });

        player.onCollide("tree", () => {
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
          //tree
          k.add([
            k.rect(50, k.rand(24, 64)),
            k.area(),
            k.outline(4),
            k.pos(k.width(), k.height() - 50),
            k.origin("botleft"),
            k.color(255, 180, 255),
            k.move(k.LEFT, 220),
            "tree", // add a tag here
          ]);
          k.wait(k.rand(1, 1.5), () => {
            spawnTree();
          });
        }
      });

      k.scene("lose", () => {
        k.add([k.text("Game Over :("), k.pos(k.center()), k.origin("center")]);
        k.add([
          k.text(score),
          k.pos(k.width() / 2, k.height() / 2 + 80),
          k.scale(2),
          k.origin("center"),
        ]);

        // go back to game with space is pressed
        onKeyPress("space", () => {
          go("game");
          score = 0;
        });
        onClick(() => {
          go("game");
          score = 0;
        });
      });

      k.go("game");
    }
  });

  return <></>;
};
