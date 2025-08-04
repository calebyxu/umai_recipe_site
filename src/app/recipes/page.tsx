'use client'

/* Next.js */
import { useRouter } from 'next/router';
/* React */

/* General */

export default function recipe() {
    /* init router and query */
    const router = useRouter();
    const query = router.query as {
        id: string;
        name: string;
        img: string;
        video: string;
        time: string;
        serving: string;
        description?: string;
        ingredients?: string;
        instructions?: string;
        tags?: string;
    };

    <div id='container'>
        <h1>hello</h1>
        <h2>{query.id}</h2>
    </div>
}