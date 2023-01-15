export default function addInput(p, f) {
  const input = add([
    onCharInput((ch) => {
      input.text += ch;
    }),
    rect(width() - width() / 3, 60, { radius: 32 }),
    origin("center"),
    pos(p),
    outline(4),
    area({ cursor: "pointer" }),
    "textbox",
  ]);
}
