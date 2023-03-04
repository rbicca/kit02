import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../../products/$types";

export const load: PageServerLoad = async ({ params }) => {
    //console.log(params);
    const products = await (await import('$lib/dummy-products.json')).default;
    const product = products.products.find(p => p.id === +params.id);
    //console.log(product);
    if(!product){
        throw error(404, 'Product not found');
        //throw redirect(301, '/products');
    }
    return { product };
};