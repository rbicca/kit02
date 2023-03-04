//import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {

    //Usando parent
    // console.log('Product load function');
    // const parentData = await parent();
    // console.log(parentData);
    // const products = await (await import('$lib/dummy-products.json')).default;

    //return {products};

    //Usando fetch - como é o fetch próprio do kit posso usar caminho relativo sem mencionar o servidor
    const response = await fetch('/api/products');
    if(response.ok){
        return {
            products: response.json()
        }
    }
    
    const errorJSON = await response.json();  //ou usa o await no return -- products: await response.json
    throw error(response.status, errorJSON);
    
};