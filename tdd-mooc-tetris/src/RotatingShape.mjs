export class RotatingShape {
  shape;

  constructor(shapeString) {
    this.shape = shapeString
      .trim()
      .split("\n")
      .map((line) => line.trim().split(""));
  }

  toString() {
    return stringifyMatrix(this.shape);
  }

  rotateRight() {
    const shape = this.shape;
    const height = shape.length;
    const width = shape[0].length;
    const matrix = range(width).map((row) =>
      range(height).map((col) => shape[height - 1 - col][row])
    );
    return new RotatingShape(stringifyMatrix(matrix));
  }

  rotateLeft() {
    const shape = this.shape;
    const height = shape.length;
    const width = shape[0].length;
    const matrix = range(width).map((row) =>
      range(height).map((col) => shape[col][height - 1 - row])
    );
    return new RotatingShape(stringifyMatrix(matrix));
  }
}

function range(size) {
  return [...Array(size).keys()];
}

function stringifyMatrix(matrix) {
  return matrix
    .map((row) => row.join(""))
    .concat("")
    .join("\n");
}
