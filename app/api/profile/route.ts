import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const myHeaders = new Headers();

  const user = await req.json();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "__cf_bm=uSHiI8IyQIMWjEz09r_9nSk63ngQ2iPVjpNRJpBJer8-1714818625-1.0.1.1-Zdg0.jAZ2rR.uOpbi7Xkfm6afZMMlMbZM3GJ1c0wdVxX2X2_yho.IbCZ58ku8lg7a48j4EJMLLc_v21qU.4YVw; csrftoken=slbXffFXdMEt2qJokOW5wgATo6qI41nUYBIKUJypXceEh6PQhghSkfn4XM7gFbOs"
  );

  const graphql = JSON.stringify({
    query:
      "query userPublicProfile($username: String!) {\r\n  matchedUser(username: $username) {\r\n    contestBadge {\r\n      name\r\n      expired\r\n      hoverText\r\n      icon\r\n    }\r\n    username\r\n    githubUrl\r\n    twitterUrl\r\n    linkedinUrl\r\n    profile {\r\n      ranking\r\n      userAvatar\r\n      realName\r\n      aboutMe\r\n      school\r\n      websites\r\n      countryName\r\n      company\r\n      jobTitle\r\n      skillTags\r\n      postViewCount\r\n      postViewCountDiff\r\n      reputation\r\n      reputationDiff\r\n      solutionCount\r\n      solutionCountDiff\r\n      categoryDiscussCount\r\n      categoryDiscussCountDiff\r\n    }\r\n  }\r\n}",
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
