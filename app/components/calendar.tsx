import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

type dataType = Date | number;

type PropsType = {
  data: dataType[][];
  noofyears:number;
}

type specialArgumentsType = {
  type:string;
  id:string;
}[];

type sendingDataType = dataType[] | specialArgumentsType;

export default function Calendar({ data, noofyears }: PropsType) {
  const prevdata : sendingDataType[] = [
    [
      {
        type: "date",
        id: "Date",
      },
      {
        type: "number",
        id: "Won/Loss",
      },
    ]
  ];


  const [cdata, setcdata] = useState<sendingDataType[]>(prevdata);
  const [height,setheight] = useState(320);

  const options = {
    title: "Submissions map",
    calendar: {
      cellColor: {
        stroke: '#ffffff',
        strokeOpacity: 0.5,
        strokeWidth: 1,
      },
      cellSize:15,
    },
    colorAxis:{
      colors:['#AFF0B4','#008024'],
      maxValue:20,
    },
    forcelFrame:true,
  };


  useEffect(() => {
    function run() {
      setcdata(prevdata.concat(data.map((item) => [new Date(item[0]), item[1]])));
      setheight(Math.min(2,noofyears)*150+20);
    }
    run();
  }, [data, noofyears]);

  return (
    <div>
      <Chart
      chartType="Calendar"
      width="100%"
      height={height}
      data={cdata}
      options={options}
    />
    </div>
  );
}
