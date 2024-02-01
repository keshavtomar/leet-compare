'use client'

import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import Cardcustom from "./card";
import { it } from "node:test";

type Propstype = {
  data: {
    languageName: string;
    problemsSolved: number;
  }[];
};

type dataitem = [string, string | number];

export const options = {
  title: "Languages Used",
  is3D: true,
};

export default function LanguageChart({ data }: Propstype) {
  const prevdata: dataitem[] = [["Language", "Problems Solved"]];

  const [relevantdata, setrelevantdata] = useState<dataitem[]>(prevdata);

  const fillrelevantdata = () => {
    setrelevantdata(prevdata.concat(data.map((item) => [item.languageName, item.problemsSolved])));
  };

  useEffect(() => {
    fillrelevantdata();
  },[data]);

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
