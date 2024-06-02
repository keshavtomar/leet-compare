import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  var myHeaders = new Headers();
  const user = await req.json();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "csrftoken=slbXffFXdMEt2qJokOW5wgATo6qI41nUYBIKUJypXceEh6PQhghSkfn4XM7gFbOs"
  );

  var graphql = JSON.stringify({
    query:
      "query userContestRankingInfo($username: String!) {\r\n    userContestRanking(username: $username) {   attendedContestsCount\r\n    rating\r\n    globalRanking\r\n    totalParticipants\r\n    topPercentage\r\n    badge {\r\n        name\r\n        }\r\n        }\r\n        userContestRankingHistory(username: $username) {\r\n            attended\r\n                      problemsSolved\r\n            totalProblems\r\n            rating\r\n            ranking\r\n            contest {\r\n                title\r\n                startTime\r\n                }\r\n                }\r\n                }",
    variables: { username: user.id },
  });

  var requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: graphql,
    redirect: "follow" as RequestRedirect,
  };

  const response = await fetch("https://leetcode.com/graphql/", requestOptions);

  const resp = await response.text();

  return NextResponse.json(resp);
}
