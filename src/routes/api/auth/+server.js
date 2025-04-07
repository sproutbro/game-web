import { json } from "@sveltejs/kit";
import { findUserById } from "$lib/server/models/user.js";

/** @type {import('./$types').RequestHandler} */
export async function GET({ locals }) {
    if (!locals.user) return json({});
    const user = await findUserById(locals.user.id);
    return json(user);
}
