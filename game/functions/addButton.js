export default function addButton(txt, clicktxt, p, f) {
  const btn = add([
    rect(width() - width() / 3, 60, { radius: 32 }),
    origin("center"),
    pos(p),
    outline(4),
    area({ cursor: "pointer" }),
    "textbox",
  ]);

  const btnText = add([
    text(txt),
    { size: 82, width: width() - 300, align: "center", font: "press" },
    pos(p),
    origin("center"),
    color(254, 136, 213),
  ]);
  btn.onClick(f);

  if (clicktxt.length > 0) {
    btn.onClick(() => {
      btnText.text = clicktxt;
    });
  }

  btn.onUpdate(() => {
    if (btn.isHovering()) {
      btn.color = rgb();
      btn.scale = vec2(1.2);
      cursor("pointer");
    } else {
      cursor("default");
      btn.scale = vec2(1);
      btn.color = rgb(210, 242, 221);
    }
  });
}
