//import type { PageLoad } from './$types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
    console.log('Product load function');
    const parentData = await parent();
    console.log(parentData);
    const products = await (await import('$lib/dummy-products.json')).default;

    return {products};
};