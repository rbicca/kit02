import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({cookies}) => {
    const token = cookies.get('token');

    //nesse momento obteríamos o usuário do token

    const user = { name: 'kuka', id: 1 };
    //console.log('em token temos ', token);
    return { 
        user: token ? user : null
    } ;
};