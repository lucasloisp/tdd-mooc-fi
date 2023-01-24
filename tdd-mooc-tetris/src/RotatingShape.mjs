export class RotatingShape {
  shape;

  constructor(shapeString) {
    this.shape = shapeString.split("\n").map((line) => line.trim().split(""));
  }

  toString() {
    return this.shape
      .map((row) => row.join(""))
      .concat("")
      .join("\n");
  }
}
