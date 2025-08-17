'use server'

import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

async function registerUser(body: { name: string, email: string }) {
    const sql = neon(process.env.DATABASE_URL!);
    const register = await sql`INSERT INTO users ("username", "email") VALUES (${body.name}, ${body.email});`;
    console.log(body.name)
}

export async function GET() {
    console.log('hello this is get')
    return NextResponse.json('hello');
}

export async function POST(request: Request) {
    const sql = neon(process.env.DATABASE_URL!);
    const usernames = await sql`SELECT username FROM users;`;
    const body = await request.json();

    /* init flag to track if name is in db */
    let flag = false

    usernames.map((user) => {
        if (user.username === body.name) {
            flag = true
        }
    })

    if (flag) {
        return NextResponse.json('pog');
    } else {
        registerUser(body)
        return NextResponse.json('works')
    }
}