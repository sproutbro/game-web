<script>
    export let data;
</script>

<div class="card">
    <strong>QnA</strong>
    {#if data.user}
        <a href="/board/qna/write" class="right write-button">Write</a>
    {/if}
    {#if data.qnas.length > 0}
        <div class="card-content">
            {#each data.qnas as qna}
                <div class="post-card">
                    <a href="/board/qna/{qna.id}"><div>{qna.title}</div></a>
                    <small>
                        👤{qna.nickname}
                        <span class="right"> 📅{qna.created_at}</span>
                    </small>
                </div>
            {/each}
        </div>
    {:else}
        <p>No QnA.</p>
    {/if}
</div>
