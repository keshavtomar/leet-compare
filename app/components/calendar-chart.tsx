import React, {useEffect, useState} from "react";
import Calendar from "./calendar";


type Propstype = {
  calendar: {
    activeYears: Number[];
    streak: Number;
    totalActiveDays: Number;
    dccBadges: string[];
    submissionCalendar: string;
  };
};

type dataType = Date|number;

export default function CalendarChart(Props: Propstype) {
  const [calendarData, setcalendarData] = useState<dataType[][]>([]);
  const [noofyears, setnoofyears] = useState(Props.calendar.activeYears.length);

  useEffect(()=>{
    function changeCalendarDataFormat(){
      const cd = JSON.parse(Props.calendar.submissionCalendar);
      const resultArray = Object.entries(cd).map(([timestamp, value]) => {
        const date = new Date(parseInt(timestamp) * 1000);
      
        return [date,value as number];
      });
      setcalendarData(resultArray);
    }

    changeCalendarDataFormat();
    
  },[Props.calendar.submissionCalendar])

  return <div>
    <Calendar data={calendarData} noofyears={noofyears}/>
  </div>;
}
