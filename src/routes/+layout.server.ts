import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = () => {
    const user = { name: 'kuka', id: 1 };
    return { user } ;
};