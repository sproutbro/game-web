<script>
    export let data;
</script>

{#if data.notices.length > 0}
    <ul>
        {#each data.notices as notice}
            <li>
                👤 #{notice.user_id}:
                <a href="/notice/{notice.id}"><strong>{notice.title}</strong></a>
                Date: {notice.created_at}
            </li>
        {/each}
    </ul>
{:else}
    <p>No notices.</p>
{/if}
