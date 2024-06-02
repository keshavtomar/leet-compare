import React, { useEffect, useState } from "react";
import Timeline from "./contest-section.tsx/timeline";
import Table from "./contest-section.tsx/table";
import Cardcustom from "./card";

export default function Contest({ id }: { id: string }) {
  const [userContestRanking, setUserContestRanking] = useState(null);
  const [userContestRankingHistory, setUserContestRankingHistory] =
    useState(null);

  useEffect(() => {
    const fetchContest = async () => {
      try {
        const res = await fetch("/api/contest", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        });
        const data = await res.json();
        const t = await JSON.parse(data);
        if (t.data) {
          setUserContestRanking(t.data.userContestRanking);
          setUserContestRankingHistory(t.data.userContestRankingHistory);
          console.log(t.data.userContestRanking);
          console.log(t.data.userContestRankingHistory);
        }
      } catch (error) {
        console.error("Error fetching contest data:", error);
      }
    };

    if (id) {
      fetchContest();
    }
  }, [id]);

  return (
    <div>
      {userContestRankingHistory && userContestRanking && (
        <>
          {/* <Cardcustom>
            <Table tabledata={userContestRanking} id={id}/>
          </Cardcustom> */}
          <Cardcustom>
            <Timeline propsdata={userContestRankingHistory} id={id} />
          </Cardcustom>
        </>
      )}
    </div>
  );
}
