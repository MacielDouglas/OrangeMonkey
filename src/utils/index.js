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

export const controleFormCadastros = [
  {
    id: 'nome',
    type: 'text',
    placeholder: 'Digite seu nome',
    label: 'Nome',
    componentType: 'input',
  },
  {
    id: 'email',
    type: 'email',
    placeholder: 'Digite seu email',
    label: 'Email',
    componentType: 'input',
  },
  {
    id: 'senha',
    type: 'password',
    placeholder: 'Digite uma senha',
    label: 'Senha',
    componentType: 'input',
  },
  {
    id: 'role',
    type: '',
    placeholder: '',
    label: 'Role',
    componentType: 'select',
    options: [
      {
        id: 'admin',
        label: 'Admin',
      },
      {
        id: 'cliente',
        label: 'cliente',
      },
    ],
  },
];

export const loginFormControl = [
  {
    id: 'email',
    type: 'email',
    placeholder: 'Digite seu email',
    label: 'Email',
    componentType: 'input',
  },
  {
    id: 'senha',
    type: 'password',
    placeholder: 'Digite uma senha',
    label: 'Senha',
    componentType: 'input',
  },
];
