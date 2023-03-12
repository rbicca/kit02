import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({cookies, locals}) => {
    const token = cookies.get('token');

    //nesse momento obteríamos o usuário do token

    //Agora que implementamos um hookie - podemos pegar o user que espetamos em locals
    console.log('do locals hookie', locals);

    const user = { name: 'kuka', id: 1 };
    //console.log('em token temos ', token);
    return { 
        user: token ? user : null
    } ;
};