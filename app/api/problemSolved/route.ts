import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const myHeaders = new Headers();
  const user = await req.json();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "csrftoken=slbXffFXdMEt2qJokOW5wgATo6qI41nUYBIKUJypXceEh6PQhghSkfn4XM7gFbOs"
  );

  const graphql = JSON.stringify({
    query: "query userProblemsSolved($username: String!) {\r\n  matchedUser(username: $username) {\r\n    problemsSolvedBeatsStats {\r\n      difficulty\r\n      percentage\r\n    }\r\n    submitStatsGlobal {\r\n      acSubmissionNum {\r\n        difficulty\r\n        count\r\n      }\r\n    }\r\n  }\r\n}",
    variables: {username:user.id}
  })

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
