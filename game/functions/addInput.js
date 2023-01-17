export default function addInput(txt, p, f) {
  const btn = add([
    rect(width() - width() / 1.5, 60, { radius: 32 }),
    origin("center"),
    pos(p),
    outline(4),
    area({ cursor: "pointer" }),
    "textbox",
  ]);

  const input = add([
    text("", { font: "press" }),
    { size: 82, width: width() - 300, align: "center", font: "press" },
    pos(btn.pos),
    origin("center"),
    color(254, 136, 213),
  ]);

  add([
    text(txt, { font: "press" }),
    { size: 82, width: width() - 300, align: "center", font: "press" },
    pos(vec2(center().x, center().y - 250)),
    origin("center"),
    color(254, 136, 213),
  ]);

  onCharInput((ch) => {
    if (input.text.length < 12) input.text += ch;
    onUpdate(f);
  });

  /* input.onUpdate(f); */

  onKeyPress("backspace", () => {
    input.text = input.text.substring(0, input.text.length - 1);
  });

  return {
    isName() {
      return input.text;
    },
  };
}
