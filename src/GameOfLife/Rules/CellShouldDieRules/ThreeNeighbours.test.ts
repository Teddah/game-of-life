import { ILifeRule } from "../ILifeRule";
import { ThreeNeighbours } from "./ThreeNeighbours";

describe("ThreeNeighbours rule", () => {
  let rule: ILifeRule;
  const scenarios: [boolean, number][] = [
    [false, 1],
    [false, 2],
    [true, 3],
    [false, 4],
    [false, 5],
  ];

  beforeEach(() => {
    rule = new ThreeNeighbours();
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

    expect(rule.applies(aliveStatus)).toBe(false);
    expect(rule.applies(deadStatus)).toBe(true);
  });
});
