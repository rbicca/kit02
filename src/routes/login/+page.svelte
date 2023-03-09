<script lang="ts">
	import { goto, invalidateAll } from "$app/navigation";
	import type { Snapshot } from "./$types";


    let username = '';
    let password = '';

    export const snapshot: Snapshot<{username: string; password:string}> = {
        capture: () => {
            return {
                username,
                password
            }
         },
        restore: (value) => { 
            username = value.username;
            password = value.password;
        }
    };

    const login = async () => {
        const resp = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({username, password})
        });
        const resJSON = await resp.json();

        if(resp.ok){
            goto('/');
            //Rodar novamente TODAS as LoadFunctions
            // ou
            //goto('/', { invalidateAll: true });
            
            invalidateAll();
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