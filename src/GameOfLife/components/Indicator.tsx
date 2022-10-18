import React from "react";

interface IndicatorInputProps {
  isRunning: boolean;
  iterations: number;
}

const Indicator: React.FunctionComponent<IndicatorInputProps> = ({
  isRunning,
  iterations,
}) => {
  return (
    <div className="indicator-container">
      <div>Game is running</div>
      <div
        className={`running-indicator ${
          isRunning ? "running" : "notRunning"
        }`}
      ></div>
      <div>Number or iterations: {iterations}</div>
    </div>
  );
};

export default Indicator;
