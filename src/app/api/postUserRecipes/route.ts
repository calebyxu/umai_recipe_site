'use server'

import { neon, NeonQueryPromise } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const sql = neon(process.env.DATABASE_URL!);

    const username = body[2]
    const original: number[] = []
    const changes: number[] = body[0]
    let sims = []
    let query = ``

    /* convert json to array */
    JSON.parse(body[1]).forEach((element: { recipeid: number }) =>
        original.push(element.recipeid)
    )

    /*similarities between original and changes*/
    sims = original.filter((val) => {
        return changes.includes(val)
    })

    /* removes sims from org and changes */
    for (const id of sims) {
        original.splice(original.findIndex((i) => i == id), 1)
        changes.splice(changes.findIndex((i) => i == id), 1)
    }

    /* finds userId for username */
    const userID = await sql`SELECT id FROM users WHERE username = ${username};`

    /* if user removed all saves then remove all */
    if (changes.length == 0) {
        await sql`DELETE FROM userrecipes WHERE userid = ${userID[0].id};`
    } else {
        /* adds all saved recipes to db */
        query = `INSERT INTO userrecipes (userid, recipeid) VALUES `

        for (let i = 0; i < changes.length; i++) {
            query += `(${userID[0].id}, ${changes[i]})`
            if (changes.length - i - 1 > 0) {
                query += `, `
            }
        }
        query += `;`
        await sql.query(query)
        console.log(query)

        /* removes unsaved recipes from db */
        if (original.length > 0) {
            query = `DELETE FROM userrecipes WHERE userid = ${userID[0].id} AND (`

            for (let i = 0; i < original.length; i++) {
                query += ` recipeid = ${original[i]}`
                if (original.length - original[i] > 0) {
                    query += ` OR`
                }
            }
            query += `);`
            await sql.query(query)
            console.log(query)
        }
    }
    console.log('changes', changes, 'original', original, sims);

    return NextResponse.json('it work');
}