'use server'

import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function GET() {
    const sql = neon(process.env.DATABASE_URL!);
    const data = await sql`SELECT * FROM recipes ORDER BY id;`;

    return NextResponse.json({ data });
}

export async function POST(request: Request) {
    const body = await request.json();
    const sql = neon(process.env.DATABASE_URL!)
    const data = await sql`
    SELECT userrecipes.recipeid FROM userrecipes
    JOIN users ON userrecipes.userid = users.id
    WHERE users.username = ${body};`;

    console.log(data);

    return NextResponse.json(data);
}