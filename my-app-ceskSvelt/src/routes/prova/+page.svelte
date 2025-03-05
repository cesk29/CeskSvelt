<script>
    import Post from "./Post.svelte";

    let { data } = $props();

</script>

<h1>Francesco</h1>
<p>works</p>

{#each data.works as work}
        <Post title={work.title} description={work.description} image={work.image}></Post>
    {/each}



<style>
</style>