<script lang="ts">
	import { goto } from "$app/navigation";


    let username = '';
    let password = '';

    const login = async () => {
        const resp = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({username, password})
        });
        const resJSON = await resp.json();

        if(resp.ok){
            goto('/');
        } else {
            alert(resJSON.message);
        }
    };

</script>

<form on:submit|preventDefault={login}>
    <label for="username"></label>
    <input bind:value={username} id="username " name="username" placeholder="login" type="text">
    <br />
    <label for="password"></label>
    <input bind:value={password} id="password " name="password" placeholder="senha" type="password">
    <br />
    <button type="submit">Login</button>
</form>