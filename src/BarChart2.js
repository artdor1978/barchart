import React, { Component } from "react";
import * as d3 from "d3";

const BarChart2 = () => {
  const dataset = [2, 4, 2, 6, 8];
  const canvasHeight = 100;
  const canvasWidth = 200;
  const scale = 20;
  return (
    <svg viewBox="0 0 600 400">
      {dataset.map((d, i) => (
        <rect
          fill="orange"
          width={2 * scale}
          height={d * scale}
          x={i * 45}
          y={canvasHeight - d * scale - 10}
        />
      ))}
    </svg>
  );
};

export default BarChart2;
