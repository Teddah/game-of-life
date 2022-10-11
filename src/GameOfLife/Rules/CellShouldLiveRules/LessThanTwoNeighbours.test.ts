import { ILifeRule } from "../ILifeRule";
import { LessThanTwoNeighbours } from "./LessThanTwoNeighbours";

describe("LessThanTwoNeighbours rule", () => {
  let rule: ILifeRule;
  const scenarios: [boolean, number][] = [
    [false, 0],
    [false, 1],
    [true, 2],
    [true, 3],
  ];

  beforeEach(() => {
    rule = new LessThanTwoNeighbours();
  });

  test.each(scenarios)(
    "Should return %p if there are %s neighbours",
    (expected, input) => {
      expect(rule.shouldLive(input)).toBe(expected);
    }
  );

  test("Should apply if the cell is alive", () => {
    const aliveStatus = true;
    const deadStatus = false;

    expect(rule.applies(aliveStatus)).toBe(true);
    expect(rule.applies(deadStatus)).toBe(false);
  });
});
