import { expect, test } from "vitest";
import { getFutureDate } from "./getFutureDate";

test("increases date with a year", () => {
  const year = new Date().getFullYear();

  expect(getFutureDate(`${year}-10-04`).getFullYear()).toEqual(year + 1);
});
