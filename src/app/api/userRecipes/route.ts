'use server'

import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function GET() {
    const sql = neon(process.env.DATABASE_URL!);
    const data = await sql`SELECT * FROM recipes ORDER BY id;`;

    return NextResponse.json({ data });
}