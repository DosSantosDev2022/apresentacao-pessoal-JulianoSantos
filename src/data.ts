import { IconType } from 'react-icons'
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { v4 as uuid } from 'uuid'

interface Link {
  id: string
  linkName: string
  url: string
  icon: IconType
}

interface Profile {
  image: string
  name: string
  description: string
  links: Link[]
}

interface Projects {
  id: string
  name: string
  coverImage: string
  description: string
  viewUrl: string
}

interface Page {
  profile: Profile
  description: {
    paragraph01: string
    paragraph02: string
    paragraph03: string
  }
  projects: Projects[]
}

interface Data {
  page: Page
}

export const data: Data = {
  page: {
    profile: {
      image: 'https://avatars.githubusercontent.com/u/119906141?v=4',
      name: 'Juliano Santos',
      description:
        'Olá! Sou um desenvolvedor Front-End apaixonado, com experiência em JavaScript, React e Next.js. Crio interfaces dinâmicas e responsivas e uso Tailwind CSS para designs atraentes.',
      links: [
        {
          id: '001',
          linkName: 'DosSantosDev2022',
          url: 'https://github.com/DosSantosDev2022',
          icon: FaGithub,
        },
        {
          id: '002',
          linkName: 'dossantosdev/',
          url: 'https://www.linkedin.com/in/dossantosdev/',
          icon: FaLinkedin,
        },
        {
          id: '003',
          linkName: '32 seguidores',
          url: 'instagram/julianosantosdev',
          icon: FaInstagramSquare,
        },
      ],
    },
    description: {
      paragraph01:
        'Olá! Sou um apaixonado desenvolvedor Front-End com experiência robusta em diversas tecnologias modernas da web. Minha jornada no mundo da programação começou com uma paixão pelo front-end, e ao longo dos anos, expandi meu conhecimento para abranger também o back-end, tornando-me um desenvolvedor versátil e capaz de criar soluções completas e eficientes.  ',
      paragraph02:
        'Com expertise na stack JavaScript focando em tecnologias como React e Next.js, posso desenvolver interfaces de usuário dinâmicas e responsivas, priorizando a experiência do usuário. Além disso, sou entusiasta do design, utilizando ferramentas como Tailwind CSS para criar interfaces visualmente atraentes e intuitivas.',
      paragraph03:
        'Com um olhar atento aos detalhes e uma abordagem orientada para soluções, estou preparado para enfrentar desafios e superar expectativas. Estou ansioso para colaborar em projetos inovadores e continuar a expandir meu conjunto de habilidades, transformando suas visões em realidade digital de sucesso. Entre em contato e vamos criar algo incrível juntos!',
    },
    projects: [
      {
        id: uuid(),
        name: 'Projeto 1',
        coverImage: 'https://via.placeholder.com/300.png/09f/fff',
        description:
          'Este é um projeto incrível que utiliza React e Tailwind CSS para criar uma interface de usuário moderna e responsiva.',
        viewUrl: 'https://github.com/DosSantosDev2022/projeto1',
      },
      {
        id: uuid(),
        name: 'Projeto 2',
        coverImage: 'https://via.placeholder.com/300.png/09f/fff',
        description:
          'Este é um projeto incrível que utiliza React e Tailwind CSS para criar uma interface de usuário moderna e responsiva.',
        viewUrl: 'https://github.com/DosSantosDev2022/projeto1',
      },
      {
        id: uuid(),
        name: 'Projeto 3',
        coverImage: 'https://via.placeholder.com/300.png/09f/fff',
        description:
          'Este é um projeto incrível que utiliza React e Tailwind CSS para criar uma interface de usuário moderna e responsiva.',
        viewUrl: 'https://github.com/DosSantosDev2022/projeto1',
      },
      {
        id: uuid(),
        name: 'Projeto 4',
        coverImage: 'https://via.placeholder.com/300.png/09f/fff',
        description:
          'Este é um projeto incrível que utiliza React e Tailwind CSS para criar uma interface de usuário moderna e responsiva.',
        viewUrl: 'https://github.com/DosSantosDev2022/projeto1',
      },
    ],
  },
}
