'use server'

import type { NextApiRequest, NextApiResponse } from 'next';
import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

// type ResponseData = {
//     message: string
// };

// export async function getData() {
//     const data = await fetch('https://umai-recipe-site-bg0hkwyq9-calebyxus-projects.vercel.app/dbconn');
//     const posts = await data.json();
//     return posts;
// }

// export default function handler (
//     req: NextApiRequest,
//     res: NextApiResponse<ResponseData>
// ) {
//     res.status(200).json({ message: 'Hello from server side' })
// };
// const sql = neon(process.env.DATABASE_URL!);
// const data = await sql`SELECT * FROM playing_with_neon;`;
// return data;

export async function GET() {
    return NextResponse.json({ message: "hello" });
}
