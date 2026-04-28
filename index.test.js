import { describe, it, expect } from "vitest";
import { sumDouble } from "./index.js";

describe("sumDouble", function () {
  it("adds two different positive numbers", function () {
    expect(sumDouble(1, 2)).toBe(3);
  });

  it("doubles the sum when numbers are equal", function () {
    expect(sumDouble(2, 2)).toBe(8);
  });
});
