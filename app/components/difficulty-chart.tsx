import { Card } from "@/components/ui/card";
import React, { useEffect } from "react";
import Chart from "react-google-charts";
import Cardcustom from "./card";

type Propstype = {
  data: {
    acSubmissionNum: {
      difficulty: String;
      count: number;
    }[];
  };
};

export const relevantdata = [
  ["Task", "No of task solved"],
  ["Easy", 0],
  ["Medium", 0],
  ["Hard", 0]
];

const x = relevantdata[1][1];

export const options = {
  title: "",
  is3D: true,
  colors:["#00AF9B", "#FFB800", "#EF4743"],
};

export default function Difficultychart(Props: Propstype) {
    
    useEffect(()=>{
      relevantdata[1][1] = Props.data.acSubmissionNum[1].count;
      relevantdata[2][1] = Props.data.acSubmissionNum[2].count;
      relevantdata[3][1] = Props.data.acSubmissionNum[3].count;
      options.title = `Solved Questions (${Props.data.acSubmissionNum[0].count})`;
    },[Props.data.acSubmissionNum]);

  return (
    <Cardcustom>
      <Chart
        chartType="PieChart"
        data={relevantdata}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </Cardcustom>
  );
}
