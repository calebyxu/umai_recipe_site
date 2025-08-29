'use server'

import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const sql = neon(process.env.DATABASE_URL!);
    // const data = await sql`SELECT * FROM recipes ORDER BY id;`;

    console.log(body[0], JSON.parse(body[1]));

    

    return NextResponse.json('it work');
}