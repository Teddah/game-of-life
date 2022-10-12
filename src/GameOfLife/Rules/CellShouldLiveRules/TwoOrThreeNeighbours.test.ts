import { ILifeRule } from "../ILifeRule";
import { TwoOrThreeNeighbours } from "./TwoOrThreeNeighbours";

describe("MoreThenThreeNeighbours rule", () => {
  let rule: ILifeRule;
  const scenarios: [boolean, number][] = [
    [false, 1],
    [true, 2],
    [true, 3],
    [false, 4],
  ];

  beforeEach(() => {
    rule = new TwoOrThreeNeighbours();
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
