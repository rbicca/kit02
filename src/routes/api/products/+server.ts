import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({fetch}) => {

    //const products = await (await import('$lib/dummy-products.json')).default;

    const response = await fetch('https://dummyjson.com/products');

    if(response.ok){
        const respJSON = await response.json();

        return json(respJSON, { status: 200 });
    }
    throw error(response.status, response.statusText);


    // return new Response(JSON.stringify(products), {
    //     status: 200
    // });

    // return new Response(JSON.stringify({ error: 'not perm'}), {
    //     status: 401
    // });

    // throw error(401, 'Nop');

    // return json(products, {
    //     status: 200
    // });
};

export const POST: RequestHandler = async ({request}) => {
    const product = await request.json();

    if(!product.title){
        throw error (400, 'Product title is required!');
    }

    return json({id: 1313, title: product.title });
};