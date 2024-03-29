export interface IProject {
  name: string
  description: string
  type: 'Frontend' | 'Backend'
  deployUrl?: string
  githubUrl: string
}

export const projects: Array<IProject> = [
  {
    name: 'Portifólio',
    description: 'Este portifólio é um projeto que visa divulgar meus projetos e habilidades, além de fazer você me conhecer um pouco melhor',
    type: 'Frontend',
    deployUrl: '',
    githubUrl: 'https://github.com/joaoPedrooC/Portifolio'
  },
  {
    name: 'Contacts',
    description: 'Contacts é uma aplicação em que você consegue cadastrar, editar, excluir e visualizar seus contatos, além de contar com autenticação e autorização.',
    type: 'Frontend',
    deployUrl: 'https://contacts-olive.vercel.app/',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/Desafio-FullStack-frontend-joaoPedrooC'
  },
  {
    name: 'Contacts',
    description: 'Contacts é uma aplicação em que você consegue cadastrar, editar, excluir e visualizar seus contatos, além de contar com autenticação e autorização.',
    type: 'Backend',
    deployUrl: 'https://contacts-evn5.onrender.com/',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/Desafio-FullStack-backend-joaoPedrooC'
  },
  {
    name: 'Hamburgueria',
    description: 'O projeto simula a página de uma hamburgueria, em que você consegue adicionar e remover produtos do carrinho de compras.',
    type: 'Frontend',
    deployUrl: 'https://hamburgueria-kenzie-joaopedroc.vercel.app/',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/entrega-s3-hamburgueria-joaoPedrooC'
  },
  {
    name: 'KenzieHub',
    description: 'O projeto Kenzie Hub é uma aplicação feita com o intuito de os usuários serem capazes de logar no sistema e cadastrar, editar ou deletar as tecnologias que possuem domínio.',
    type: 'Frontend',
    deployUrl: 'https://kenzie-hub-joaopedrooc.vercel.app/',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-joaoPedrooC'
  },
  {
    name: 'Movies',
    description: 'O projeto Movies simula uma API rest de uma locadora de filmes, em que você consegue cadastrar, editar, buscar e excluir filmes. A busca por filmes contém paginação.',
    type: 'Backend',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/m4-movies-typeorm-joaoPedrooC'
  },
  {
    name: 'Kimóveis',
    description: 'O projeto Kimóveis simula uma API rest de uma imobiliária, em que é possível cadastrar, editar, buscar e excluir usuários e imóveis. Além disso, também é possível agendar visitas dos usuários a um imóvel.',
    type: 'Backend',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/m4-kimoveis-joaoPedrooC'
  },
  {
    name: 'User e Courses',
    description: 'O projeto User e Courses simula uma API rest de uma plataforma de cursos, em que é possível cadastrar, editar, buscar e excluir alunos e cursos.',
    type: 'Backend',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/crud_admin_m4-joaoPedrooC'
  },
]