import { json } from "@sveltejs/kit";
import { saveScore } from "$lib/server/models/score.js";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals }) {
    if (!locals.user) return json();

    const userId = locals.user.id;
    const { game, score } = await request.json();

    await saveScore({ userId, game, score });

    return json({});
}
