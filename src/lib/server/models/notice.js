import { db } from '$lib/server/db.js';

export async function getNotices() {
    const result = await db.query(
        `SELECT
            id,
            user_id,
            title,
            content,
            TO_CHAR (created_at, 'YYYY-MM-DD') as created_at
        FROM
            notices
        ORDER BY 
            id DESC`
    );
    return result.rows;
}

export async function findNoticeById(id) {
    const result = await db.query(
        `SELECT
            id,
            user_id,
            title,
            content,
            TO_CHAR (created_at, 'YYYY-MM-DD') as created_at
        FROM
            notices
        WHERE
            id = $1`,
        [id]
    );
    return result.rows[0] ?? null;
}