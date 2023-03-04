import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../../products/$types";

export const load: PageServerLoad = async ({ params, fetch }) => {

    //Buscando dados fixos
    // const products = await (await import('$lib/dummy-products.json')).default;
    // const product = products.products.find(p => p.id === +params.id);

    // if(!product){
    //     throw error(404, 'Product not found');
    //     //throw redirect(301, '/products');
    // }
    // return { product };



    //Buscando dados da Dummy api
    const productRes = await fetch(`https://dummyjson.com/products/${params.id}`);

    if(!productRes.ok){
        throw error(productRes.status, 'Failed to load products');
    }
    const product = await productRes.json();


    //Agora entupir de comentários
    const comments = fetch('https://dummyjson.com/comments')
       .then((res) => res.json());




    //Como colocamos os comentários em uma chave aninhada, retorna promise - nao temos que esperar

    return {
        product,
        title: product.title,
        description: product.description,
        nested: {
           comments
        }
    };


};