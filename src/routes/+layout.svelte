<script lang="ts">
	import type { LayoutData } from "./$types";
    import { page } from "$app/stores";
	import { invalidateAll } from "$app/navigation";


    export let data: LayoutData;

    $: titulo =  $page.data.product? $page.data.product.title : '';
</script>

<svelte:head>
    <title>Kit02 - {titulo}</title>
    {#if $page.data.product?.description}
        <meta name="description" content={$page.data.product.description}/>
    {/if}
</svelte:head>

<p>Em token temos {JSON.stringify(data)}</p>

{#if data.user}
    <p>Logado como {data.user.name}</p>
{/if}
<nav>
    <a href="/">Início</a>
    <a href="/products">Produtos</a>
    {#if !data.user}
        <a href="/login">Login</a>
    {/if}
</nav>

{#if data.user}
    <button on:click={ async () => {
            const res = await fetch('/api/logout', { method: 'POST' });
            if (res.ok) invalidateAll(); 

        }}
    >Logout</button>
{/if}

<slot />