import { requireUser } from '$lib/server/auth.js';

/** @type {import('./$types').PageServerLoad} */
export function load({ locals }) {
    requireUser(locals);

    return {
        user: locals.user
    };
}