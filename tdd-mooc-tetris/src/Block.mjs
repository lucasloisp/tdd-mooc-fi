export class Block {
  color;
  depth;

  constructor(color, depth = 0) {
    this.color = color;
    this.depth = depth;
  }

  tick() {
    return new Block(this.color, this.depth + 1);
  }
}
