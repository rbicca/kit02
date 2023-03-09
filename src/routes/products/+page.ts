import type { PageLoad } from "./$types";


//No caso de existir page.ts e page.server.ts , ocorre uma cascata
//Primeiro roda server => client => page
//Temos que repassar o parametro data manualmente

export const load: PageLoad = ({data, fetch, depends}) => {

    //2 chamadas canalhas somente para testar
    fetch('https://dummyjson.com/products');
    fetch('https://dummyjson.com/users');

    depends('app:products');
    
    return {
        products: data.products,
        title: 'Catálogo de produtos'
    };
}