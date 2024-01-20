import { getLCAccount } from "leetcode-public-api";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    const user = await req.json();
    console.log(user);
    const response = await getLCAccount(user.id)    
   
    return NextResponse.json(response);
}