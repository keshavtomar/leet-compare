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
    query:
      "query skillStats($username: String!) {\r\n  matchedUser(username: $username) {\r\n    tagProblemCounts {\r\n      advanced {\r\n        tagName\r\n        tagSlug\r\n        problemsSolved\r\n      }\r\n      intermediate {\r\n        tagName\r\n        tagSlug\r\n        problemsSolved\r\n      }\r\n      fundamental {\r\n        tagName\r\n        tagSlug\r\n        problemsSolved\r\n      }\r\n    }\r\n  }\r\n}",
    variables: { username: user.id},
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
