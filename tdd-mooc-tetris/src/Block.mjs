export class Block {
  color;
  depth;

  constructor(color) {
    this.color = color;
    this.depth = 0;
  }

  tick() {
    this.depth += 1;
  }
}
