"use client";
import React, { useEffect } from "react";
import { Chart } from "react-google-charts";

type tag = {
  tagName: string;
  tagSlug: string;
  problemsSolved: number;
};

type Propstype = {
  data: tag[];
  color: string;
  title: string;
};

type dataitem = [string, string | number, string | { role: string }];

type optionstype = {
    title: string;
};
  

export default function App({ data, color, title }: Propstype) {
  let prevdata: dataitem[] = [["Element", "Tags", { role: "style" }]];
  
  const [options, setoptions] = React.useState<optionstype|null>(null);
  const [relevantdata, setrelevantdata] = React.useState<dataitem[]>(prevdata);

  const fillrelevantdata = async () => {
    setrelevantdata(
      prevdata.concat(
        data.map((item) => [
          item.tagName,
          item.problemsSolved,
          "color: " + color + "",
        ])
      )
    );
    setoptions({
      title: title,
    });
  };

  useEffect(() => {
    fillrelevantdata();
  }, [data]);

  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={relevantdata}
      options={options}
    />
  );
}
