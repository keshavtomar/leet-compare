"use client";

import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import Difficultychart from "./components/difficulty-chart";
import Cardcustom from "./components/card";
import LanguageChart from "./components/language-chart";
import Tagchart from "./components/tag-chart";
import CalendarChart from "./components/calendar-chart";
import Contest from "./components/contest";

export default function Home() {
  const [formitems, setFormItems] = useState({ id: "keshav_tomar_" });
  const [error, seterror] = useState("");
  const [difficulty, setdifficulty] = useState(null);
  const [languages, setlanguages] = useState(null);
  const [advanced, setadvanced] = useState(null);
  const [intermediate, setintermediate] = useState(null);
  const [fundamental, setfundamental] = useState(null);
  const [calendar, setcalendar] = useState(null);
  const [timeline, settimeline] = useState(null);



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/leetcode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: formitems.id }),
      });
      const x = await res.json();
      if (x.data) {
        setdifficulty(x.data.submitStatsGlobal);
        setlanguages(x.data.languageProblemCount);
        setadvanced(x.data.tagProblemCounts.advanced);
        setintermediate(x.data.tagProblemCounts.intermediate);
        setfundamental(x.data.tagProblemCounts.fundamental);
        setcalendar(x.data.userCalendar);
        seterror("");
      } else {
        seterror("No such user exists");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormItems({ ...formitems, id: e.target.value });
  };

  useEffect(() => {
    const handleSubmit2 = async () => {
      try {

        const res = await fetch("/api/leetcode", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: formitems.id }),
        });
        
        const x = await res.json();
        if (x.data) {
          setdifficulty(x.data.submitStatsGlobal);
          setlanguages(x.data.languageProblemCount);
          setadvanced(x.data.tagProblemCounts.advanced);
          setintermediate(x.data.tagProblemCounts.intermediate);
          setfundamental(x.data.tagProblemCounts.fundamental);
          setcalendar(x.data.userCalendar);
          seterror("");
        } else {
          seterror("No such user exists");
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleSubmit2();
  }, []);

  return (
    <main className="min-h-screen pt-24">
      <div className="profile-input w-full max-w-[600px] shadow-lg mx-auto">
        <Card>
          <CardContent className="mx-auto w-3/5">
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5 pt-[24px]">
                  <Input
                    id="name"
                    name="id"
                    placeholder="Leetcode handle"
                    value={formitems.id}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
            <CardDescription>{error}</CardDescription>
          </CardContent>
        </Card>
      </div>

      <div>
        {difficulty && languages && advanced && intermediate && fundamental && calendar && (
          <div className="flex content-around justify-around flex-wrap flex-grow">
            <div className="max-w-[600px] p-5 lg:min-w-[560px]">
              <Cardcustom>
                <Difficultychart data={difficulty} />
              </Cardcustom>
            </div>
            <div className="max-w-[600px] p-5 lg:min-w-[560px]">
              <Cardcustom>
                <LanguageChart data={languages} />
              </Cardcustom>
            </div>
            <div className="max-w-[900px] p-4 sm:w-4/5 lg:min-w-[850px]">
              <Cardcustom>
                <Tagchart data={advanced} color="#EF4743" title="Advanced" />
              </Cardcustom>
            </div>
            <div className="max-w-[900px] p-4 sm:w-4/5 lg:min-w-[850px]">
              <Cardcustom>
                <Tagchart
                  data={intermediate}
                  color="#FFB800"
                  title="Intermediate"
                />
              </Cardcustom>
            </div>
            <div className="max-w-[900px] p-4 sm:w-4/5 lg:min-w-[850px]">
              <Cardcustom>
                <Tagchart
                  data={fundamental}
                  color="#00AF9B"
                  title="Fundamental"
                />
              </Cardcustom>
            </div>
            <div className="max-w-[900px] p-4 sm:w-4/5 lg:min-w-[850px]">
              <Cardcustom>
                <CalendarChart 
                calendar = {calendar}
                />
              </Cardcustom>
            </div>
            <div className="max-w-[900px] p-4 sm:w-4/5 lg:min-w-[850px]">
                <Contest id={formitems.id}/>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

// colors:["#00AF9B", "#FFB800", "#EF4743"],
