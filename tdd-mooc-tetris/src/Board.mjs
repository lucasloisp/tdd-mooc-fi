export class Board {
  width;
  height;
  _falling = null;
  _pieces = [];

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  drop(block) {
    if (this._falling) {
      throw new Error("already falling");
    }
    this._falling = block;
  }

  hasFalling() {
    return !!this._falling;
  }

  tick() {
    const falling = this._falling;
    if (falling.depth === 2 - this._pieces.length) {
      this._falling = null;
      this._pieces.push(falling);
    } else {
      this._falling = falling.tick();
    }
  }

  toString() {
    const falling = this._falling;
    const tiles = [[".", ".", "."], [".", ".", "."], [".", ".", "."], []];
    if (falling) {
      tiles[falling.depth][1] = falling.color;
    }
    this._pieces.forEach((piece) => {
      tiles[piece.depth][1] = piece.color;
    });
    return tiles.map((row) => row.join("")).join("\n");
  }
}
