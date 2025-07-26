import Image from "next/image";
import { neon } from "@neondatabase/serverless";

export default function Home() {
    async function getData() {
        const sql = neon(process.env.DATABASE_URL!);
        const data = await sql`SELECT * FROM posts;`;
        return "hello";
    }

    const tableData = getData();

    return (
        <>
            <h1>hello this is the home page</h1>
            <h2>{tableData}</h2>
        </>
    );
}
