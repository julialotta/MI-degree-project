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
      const JUMP_FORCE = 1100;
      //const SPEED = 480;

      k = kaboom({
        global: true,
        canvas: canvas,
        background: [0, 0, 255],
      });
      k.loadRoot("https://i.imgur.com/");

      k.loadSprite("player", "lMmlXVs.png");
      k.loadSprite("cup", "fRznfCo.png ");
      k.loadSprite("choco", "mvIxX5N.png ");
      k.loadSprite("bug", "RgKbtYC.png ");
      k.loadSprite("background", "iW1NopS.png");

      k.scene("game", () => {
        k.layers(["bg", "game", "ui"], "game");
        k.add([
          k.sprite("background"),
          // Make the background centered on the screen
          k.pos(0, 0),

          // Allow the background to be scaled
          k.scale(1),
          // Keep the background position fixed even when the camera moves
          k.fixed(),
          "bg",
        ]);

        k.gravity(2400);

        const scoreLabel = k.add([k.text(score.toString()), k.pos(24, 24)]);

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

        k.onKeyPress("space", () => {
          if (player.isGrounded()) {
            player.jump(JUMP_FORCE);
          }
        });

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
        }
      });

      k.scene("lose", () => {
        k.add([
          k.sprite("background"),
          // Make the background centered on the screen
          k.pos(0, 0),

          // Allow the background to be scaled
          k.scale(1),
          // Keep the background position fixed even when the camera moves
          k.fixed(),
          "bg",
        ]);
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
