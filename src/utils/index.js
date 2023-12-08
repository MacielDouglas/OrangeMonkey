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
    path: '/admin-view/all-products',
  },
  {
    id: 'adminNovoProduto',
    label: 'Adicionar Novo Produto',
    path: '/admin-view/add-product',
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

export const adminProductFormControls = [
  {
    id: 'nome',
    type: 'text',
    placeholder: 'Nome do produto',
    label: 'Nome',
    componentType: 'input',
  },
  {
    id: 'preço',
    type: 'number',
    placeholder: 'Preço do produto',
    label: 'Preço',
    componentType: 'input',
  },
  {
    id: 'descrição',
    type: 'text',
    placeholder: 'Descrição do produto',
    label: ' Descrição',
    componentType: 'input',
  },
  {
    id: 'categoria',
    type: '',
    placeholder: '',
    label: 'Categoria',
    componentType: 'select',
    options: [
      {
        id: 'masculino',
        label: 'Masculino',
      },
      {
        id: 'feminino',
        label: 'Feminino',
      },
      {
        id: 'infantil',
        label: 'Infantil',
      },
    ],
  },
  {
    id: 'entrega',
    type: '',
    placeholder: '',
    label: 'A venda',
    componentType: 'select',
    options: [
      {
        id: 'sim',
        label: 'Sim',
      },
      {
        id: 'não',
        label: 'Não',
      },
    ],
  },
  {
    id: 'promoção',
    type: 'number',
    placeholder: 'Valor promoção',
    label: ' Promoção',
    componentType: 'input',
  },
];

export const TamanhosDisponiveis = [
  {
    id: 'p',
    label: 'P',
  },
  {
    id: 'm',
    label: 'M',
  },
  {
    id: 'g',
    label: 'G',
  },
  {
    id: 'gg',
    label: 'GG',
  },
];
