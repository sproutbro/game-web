import { db } from '$lib/server/db.js';

export async function saveScore({ userId, game, score }) {
    await db.query(
        'INSERT INTO scores (user_id, game, score) VALUES ($1, $2, $3)',
        [userId, game, score]
    );
}

export async function getScores(game) {
    const result = await db.query(
        'SELECT * FROM scores WHERE game = $1 ORDER BY score DESC',
        [game]
    );
    return result.rows;
}