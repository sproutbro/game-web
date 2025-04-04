<script>
    export let data;
</script>

{#if data.scores.length > 0}
    <ul>
        {#each data.scores as score}
            <li>
                <strong>{score.user_id}</strong>: {score.score} points (Game: {score.game})
            </li>
        {/each}
    </ul>
{:else}
    <p>No scores available.</p>
{/if}
