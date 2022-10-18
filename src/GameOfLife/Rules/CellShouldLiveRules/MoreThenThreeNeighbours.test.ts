import { ILifeRule } from "../ILifeRule";
import { MoreThenThreeNeighbours } from "./MoreThenThreeNeighbours";

describe("MoreThenThreeNeighbours rule", () => {
  let rule: ILifeRule;
  const scenarios: [boolean, number][] = [
    [true, 1],
    [true, 2],
    [true, 3],
    [false, 4],
    [false, 5],
    [false, 6],
  ];

  beforeEach(() => {
    rule = new MoreThenThreeNeighbours();
  });

  test.each(scenarios)(
    "Should return %p if there are %s neighbours",
    (expected, numberOfNeighbours) => {
      expect(rule.shouldLive(numberOfNeighbours)).toBe(expected);
    }
  );

  test("Should apply if the cell is alive", () => {
    const aliveStatus = true;
    const deadStatus = false;

    expect(rule.applies(aliveStatus)).toBe(true);
    expect(rule.applies(deadStatus)).toBe(false);
  });
});
