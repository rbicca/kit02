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
<h2>{product.title}</h2>
<p>{product?.description}</p>
<img src={product?.thumbnail} alt={product?.title}>

<style>
    img {
        width: 30%;
    }
</style>