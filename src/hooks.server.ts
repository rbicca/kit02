import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

//Podemos usar sequence para separar os handles, e trata-los em sequencia

export const handle:Handle = async ({event, resolve}) => {
    console.log('Disparando hook', event);

    //Exemplo de override
    const { url, locals ,cookies, isDataRequest} = event;
    // if (url.pathname === '/products'){
    //     return new Response('Rota interceptada');
    // }

    //Tudo que colocarmos no locals, vai estar disponivel em todas
    // as outras ServerLoad Functions
    if(!isDataRequest && !url.pathname.startsWith('/api')){
        const token = cookies.get('token');
        locals.user = token ?  { name: 'kuka', id: 1 } : undefined;
    }

    const response = await resolve(event);
    
    //Adicionar headers
    //response.headers.set('x-custom-header', 'value');
    
    return response;
};