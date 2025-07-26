import Image from "next/image";
import { neon } from "@neondatabase/serverless";

export default function Home() {
    async function getData() {
        const sql = neon(process.env.DATABASE_URL!);
        const data = await sql`SELECT * FROM posts;`;
        console.log(data);
        return data;
    }

    return (
        <h1>hello this is the home page</h1>
    );
}
