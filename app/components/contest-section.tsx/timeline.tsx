import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { data } from "../../../data/data";

type TimelineDataType = {
  propsdata: {
    attended: boolean;
    contest: {
      startTime: number;
      title: string;
    };
    problemsSolved: number;
    ranking: number;
    rating: number;
    totalProblems: number;
  }[];
  id: string;
};

type optionType = {
  chart: {
    height: number;
    type:
      | undefined
      | "line"
      | "bar"
      | "area"
      | "radar"
      | "heatmap"
      | "treemap"
      | "pie"
      | "donut"
      | "radialBar"
      | "scatter"
      | "bubble"
      | "candlestick"
      | "boxPlot"
      | "rangeBar"
      | "polarArea"
      | "rangeArea";
    id: string;
  };
  dataLabels: {
    enabled: boolean;
  };
  stroke: {
    curve:
      | "stepline"
      | "smooth"
      | "straight"
      | "monotoneCubic"
      | ("stepline" | "smooth" | "straight" | "monotoneCubic")[]
      | undefined;
    width: number;
    colors: string[] | undefined;
  };
  grid: {
    padding: {
      right: number;
      left: number;
    };
  };
  title: {
    text: string;
    align: "left" | "center" | "right" | undefined;
  };
  labels: string[];
  xaxis: {
    type: "datetime" | "category" | "numeric" | undefined;
  };
  tooltip: {
    enabled: boolean;
    fillSeriesColor: boolean;
  };
  markers:{
    colors: string[]
  };
};

export default function Timeline({ propsdata, id }: TimelineDataType) {
  var points = propsdata
    .filter((item) => {
      return item.attended === true;
    })
    .map((item) => {
      return item.rating;
    });

  var dates = propsdata
    .filter((item) => {
      return item.attended === true;
    })
    .map((item) => {
      return new Date(item.contest.startTime * 1000).toLocaleDateString();
    });

  useEffect(() => {
    console.log(points, dates);
  });

  const series = [
    {
      name: id,
      data: points,
    },
  ];

  const options: optionType = {
    chart: {
      height: 350,
      type: "line",
      id: "contest-chart",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
      colors: [data.strokeColor],
    },
    grid: {
      padding: {
        right: 30,
        left: 20,
      },
    },
    title: {
      text: "Contest Ratings of " + id,
      align: "left",
    },
    labels: dates,
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: false,
    },
    markers:{
      colors: [data.strokeColor],
    }
  };

  return (
    <div>
      <Chart type="line" height="350" options={options} series={series} />
    </div>
  );
}
