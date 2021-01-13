export class vec2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  reset() {
    this.x = 0;
    this.y = 0;
  }

  copy() {
    return new vec2(this.x, this.y);
  }

  negate() {
    this.x *= -1;
    this.y *= -1;
  }

  equals(vector: vec2) {
    return this.x === vector.x && this.y === vector.y;
  }

  add(vector: vec2) {
    return new vec2(this.x + vector.x, this.y + vector.y);
  }

  subtract(vector: vec2) {
    return new vec2(this.x - vector.x, this.y - vector.y);
  }

  multiply(vector: vec2) {
    return new vec2(this.x * vector.x, this.y * vector.y);
  }

  divide(vector: vec2) {
    return new vec2(this.x / vector.x, this.y / vector.y);
  }

  scale(value: number) {
    this.x *= value;
    this.y *= value;
  }

  normalize() {
    const length = this.length();
    this.x /= length;
    this.y /= length;
  }

  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
