import { promiseTest } from "../asyncPlayground";

describe("async", () => {
  it("should resolve", () => {
    expect(promiseTest(2)).resolves.toBe("positive");
  });
  it("should reject", () => {
    expect(promiseTest(-4)).rejects.toBe("negitive");
  });
  it("use async", async () => {
    const result = await promiseTest(-5);
    expect(result).toBe("negitive");
  });
  it("use async", async () => {
    const result = await promiseTest(5);
    expect(result).toBe("positive");
  });
});
