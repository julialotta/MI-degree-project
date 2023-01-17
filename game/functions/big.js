export default function big(CURRENT_JUMP_FORCE) {
  let timer = 0;
  let isBig = false;
  return {
    update() {
      if (isBig) {
        // timer minus delta time since last frame
        timer -= dt();

        if (timer <= 0) {
          play("powerdown");
          this.smallify();
        }
      }
    },
    isBig() {
      return isBig;
    },
    smallify() {
      this.scale = 0.09;
      timer = 0;
      isBig = false;
    },
    biggify(time) {
      this.scale = 0.15;
      timer = time;
      isBig = true;
    },
  };
}
