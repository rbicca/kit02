import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

//Podemos usar sequence para separar os handles, e trata-los em sequencia

export const handle:Handle = async ({event, resolve}) => {
    console.log('Disparando hook', event);

    //Exemplo de override
    const { url } = event;
    // if (url.pathname === '/products'){
    //     return new Response('Rota interceptada');
    // }


    
    const response = await resolve(event);
    
    //Adicionar headers
    //response.headers.set('x-custom-header', 'value');
    
    return response;
};