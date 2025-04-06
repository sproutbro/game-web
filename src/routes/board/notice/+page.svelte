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
    {:else}
        <p>No notices.</p>
    {/if}
</div>
