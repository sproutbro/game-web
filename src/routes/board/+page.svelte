<script>
    export let data;
</script>

<div class="card">
    <strong>Notice</strong>
    {#if data.notices.length > 0}
        <div class="card-content">
            {#each data.notices as notice}
                <div class="post-card">
                    <a href="/board/notice/{notice.id}"
                        ><div>{notice.title}</div></a
                    >
                    <small>
                        👤{notice.nickname}
                        <span class="right"> 📅{notice.created_at}</span>
                    </small>
                </div>
            {/each}
        </div>
        <a href="/board/notice">more+</a>
    {:else}
        <p>No notices.</p>
    {/if}
</div>

<div class="card">
    <strong>QnA</strong>
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
        <a href="/board/qna">more+</a>
    {:else}
        <p>No QnA.</p>
    {/if}
</div>
