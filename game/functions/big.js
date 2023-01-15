export default function big(CURRENT_JUMP_FORCE) {
  const BIG_JUMP_FORCE = 1000;
  const JUMP_FORCE = 790;
  let timer = 0;
  let isBig = false;
  return {
    update() {
      if (isBig) {
        CURRENT_JUMP_FORCE = BIG_JUMP_FORCE;
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
      CURRENT_JUMP_FORCE = JUMP_FORCE;
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
