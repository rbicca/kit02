<script lang="ts">
	import type { PageData } from "./$types";


    export let data: PageData;

    $: product = data.product;
</script>

<!-- <svelte:head>
    <title>{product.title}</title>
    <meta name="description" content={product.description} />
</svelte:head> -->

<h1>Produto</h1>
<img src={product?.thumbnail} alt={product?.title}>
<h2>{product.title}</h2>
<p>{product?.description}</p>

{#await data.nested.comments}
    <p>Loading</p>
{:then data}
    {#each data.comments as comment}
        <p>{comment.body}</p>
    {/each}
{/await}


<style>
    img {
        width: 30%;
    }
</style>