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
    description: 'projectsSectionFirstProjectDescription',
    type: 'Frontend',
    deployUrl: '',
    githubUrl: 'https://github.com/joaoPedrooC/Portifolio'
  },
  {
    name: 'Contacts',
    description: 'projectsSectionSecondProjectDescription',
    type: 'Frontend',
    deployUrl: 'https://contacts-olive.vercel.app/',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/Desafio-FullStack-frontend-joaoPedrooC'
  },
  {
    name: 'Contacts',
    description: 'projectsSectionThirdProjectDescription',
    type: 'Backend',
    deployUrl: 'https://contacts-evn5.onrender.com/',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/Desafio-FullStack-backend-joaoPedrooC'
  },
  {
    name: 'Hamburgueria',
    description: 'projectsSectionFourthProjectDescription',
    type: 'Frontend',
    deployUrl: 'https://hamburgueria-kenzie-joaopedroc.vercel.app/',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/entrega-s3-hamburgueria-joaoPedrooC'
  },
  {
    name: 'KenzieHub',
    description: 'projectsSectionFifthProjectDescription',
    type: 'Frontend',
    deployUrl: 'https://kenzie-hub-joaopedrooc.vercel.app/',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-joaoPedrooC'
  },
  {
    name: 'Movies',
    description: 'projectsSectionSixthProjectDescription',
    type: 'Backend',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/m4-movies-typeorm-joaoPedrooC'
  },
  {
    name: 'Kimóveis',
    description: 'projectsSectionSeventhProjectDescription',
    type: 'Backend',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/m4-kimoveis-joaoPedrooC'
  },
  {
    name: 'User e Courses',
    description: 'projectsSectionEighthProjectDescription',
    type: 'Backend',
    githubUrl: 'https://github.com/Kenzie-Academy-Brasil-Developers/crud_admin_m4-joaoPedrooC'
  },
]