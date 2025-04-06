<script>
    export let data;
</script>

<div class="card">
    <strong>QnA</strong>
    {#if data.qnas.length > 0}
        {#each data.qnas as qna}
            <div class="post-card">
                <a href="/board/qna/{qna.id}"><div>{qna.title}</div></a>
                <small>
                    👤{qna.nickname}
                    <span class="right"> 📅{qna.created_at}</span>
                </small>
            </div>
        {/each}
    {:else}
        <p>No QnA.</p>
    {/if}
</div>
