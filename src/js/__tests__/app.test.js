import validator from "../classes/validator";

test("valid test to return true", () => {
  const vld = new validator();
  const result = vld.valid("4916562713535031");
  expect(result).toBe(true);
});

test("valid test to return false", () => {
  const vld = new validator();
  const result = vld.valid("1");
  expect(result).toBe(false);
});
