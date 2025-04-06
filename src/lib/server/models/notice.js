import { db } from '$lib/server/db.js';

export async function getNotices(limit) {
    const result = await db.query(
        `SELECT
            notices.id,
            notices.title,
            users.nickname,
            TO_CHAR (notices.created_at, 'YYYY-MM-DD') as created_at
        FROM
            notices
        JOIN
            users
        ON
            notices.user_id = users.id
        ORDER BY 
            id DESC
        LIMIT $1`,
        [limit]
    );
    return result.rows;
}

export async function findNoticeById(id) {
    const result = await db.query(
        `SELECT
            notices.title,
            notices.content,
            users.nickname,
            TO_CHAR (notices.created_at, 'YYYY-MM-DD') as created_at
        FROM
            notices
        JOIN
            users
        ON
            notices.user_id = users.id
        WHERE
            notices.id = $1`,
        [id]
    );
    return result.rows[0] ?? null;
}