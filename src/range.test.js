
import { range } from "./range";

test("generates numbers from 0 to 4", () => {
  expect([...range(0, 5)]).toEqual([0, 1, 2, 3, 4]);
});

test("generates numbers from 2 to 10 with a step of 2", () => {
  expect([...range(2, 11, 2)]).toEqual([2, 4, 6, 8, 10]);
});

test("generates an empty array when start equals end", () => {
  expect([...range(5, 5)]).toEqual([]);
});

test("generates numbers from -3 to 3", () => {
  expect([...range(-3, 4)]).toEqual([-3, -2, -1, 0, 1, 2, 3]);
});

test("generates numbers from 10 to 0 with a negative step", () => {
  expect([...range(10, 0, -2)]).toEqual([10, 8, 6, 4, 2]);
});

test("generates a single number when the range includes only one step", () => {
  expect([...range(10, 11)]).toEqual([10]);
});
