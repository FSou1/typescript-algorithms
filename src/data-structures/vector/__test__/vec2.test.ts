import { vec2 } from "../vec2";

describe("vec2", () => {
  it("resets", () => {
    const vector = new vec2(1.0, 2.0);

    vector.reset();

    expect(vector.x).toEqual(0);
    expect(vector.y).toEqual(0);
  });

  it("copies", () => {
    const vector1 = new vec2(1.0, 2.0);
    const vector2 = vector1.copy();

    expect(vector2.x).toEqual(vector1.x);
    expect(vector2.y).toEqual(vector1.y);
  });

  it("negates", () => {
    const vector = new vec2(1.0, 2.0);

    vector.negate();

    expect(vector.x).toEqual(-1.0);
    expect(vector.y).toEqual(-2.0);
  });

  it("compares", () => {
    const vector1 = new vec2(1.0, 2.0);
    const vector2 = new vec2(1.0, 2.0);
    const vector3 = new vec2(2.0, 3.0);

    expect(vector1.equals(vector2)).toEqual(true);
    expect(vector1.equals(vector3)).toEqual(false);
  });

  it("adds", () => {
    const vector1 = new vec2(1.0, 2.0);
    const vector2 = new vec2(2.0, 3.0);

    const result = vector1.add(vector2);

    expect(result.x).toEqual(3.0);
    expect(result.y).toEqual(5.0);
  });

  it("subtracts", () => {
    const vector1 = new vec2(1.0, 2.0);
    const vector2 = new vec2(2.0, 4.0);

    const result = vector1.subtract(vector2);

    expect(result.x).toEqual(-1.0);
    expect(result.y).toEqual(-2.0);
  });

  it("multiplies", () => {
    const vector1 = new vec2(2.0, 3.0);
    const vector2 = new vec2(5.0, 6.0);

    const result = vector1.multiply(vector2);

    expect(result.x).toEqual(10.0);
    expect(result.y).toEqual(18.0);
  });

  it("divides", () => {
    const vector1 = new vec2(2.0, 3.0);
    const vector2 = new vec2(5.0, 6.0);

    const result = vector1.divide(vector2);

    expect(result.x).toEqual(0.4);
    expect(result.y).toEqual(0.5);
  });

  it("scales", () => {
    const vector = new vec2(1.0, 2.0);

    vector.scale(2.0);

    expect(vector.x).toEqual(2.0);
    expect(vector.y).toEqual(4.0);
  });

  it("normalizes", () => {
    const vector = new vec2(1.0, 2.0);

    vector.normalize();

    expect(vector.x).toBeCloseTo(0.44721, 5);
    expect(vector.y).toBeCloseTo(0.89443, 5);
  });
});
