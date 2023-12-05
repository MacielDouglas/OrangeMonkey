export const navOptions = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
  },
  {
    id: 'produtos',
    label: 'Produtos',
    path: '/produtos/lista/todos_produtos',
  },
  {
    id: 'masculino',
    label: 'Masculino',
    path: '/produtos/lista/masculino',
  },
  {
    id: 'feminino',
    label: 'Feminino',
    path: '/produtos/lista/feminino',
  },
  {
    id: 'infantil',
    label: 'Infantil',
    path: '/produtos/lista/infantil',
  },
];

export const adminNavOptions = [
  {
    id: 'adminLista',
    label: 'Gerencie todos os produtos',
    path: '/admin/todos_produtos',
  },
  {
    id: 'adminNovoProduto',
    label: 'Adicionar Novo Produto',
    path: '/admin/adicionar_produto',
  },
];

export const styles = {
  button:
    'mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white',
};
