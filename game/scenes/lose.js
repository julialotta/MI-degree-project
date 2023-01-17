export default function lose({ score, name }) {
  add([sprite("lostbackground"), pos(0, 0), scale(1), fixed(), "bg"]);

  play("ohno");

  const textbox = add([
    rect(width() - 180, 350, { radius: 32 }),
    origin("center"),
    pos(center().x, center().y - 150),
    outline(4),
    color(210, 242, 221),
  ]);

  add([
    text("Oh no " + name + " :(" + "\n\nGAME OVER\n\n" + "Score:" + score),
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
}
