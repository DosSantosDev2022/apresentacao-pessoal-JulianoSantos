import { IconType } from 'react-icons'
import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaReact,
  FaJsSquare,
  FaDocker,
} from 'react-icons/fa'
import { v4 as uuid } from 'uuid'
import portImage from './assets/port.webp'
import blogImage from './assets/blog.webp'
import UiImage from './assets/Ui.webp'

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiSass,
} from 'react-icons/si'

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

interface Tech {
  name: string
  description: string
  icon: IconType
}

interface Page {
  profile: Profile
  description: {
    paragraph01: string
    paragraph02: string
    paragraph03: string
  }
  projects: Projects[]
  techs: Tech[]
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
        name: 'Portifólio',
        coverImage: portImage,
        description:
          'Este é o principal canal para conhecer mais sobre meu trabalho, incluindo projetos importantes que destacam minha experiência e habilidades.',
        viewUrl: 'https://dossantosdev.vercel.app/',
      },
      {
        id: uuid(),
        name: 'Blog Dev',
        coverImage: blogImage,
        description:
          'Explore o BlogDev, um blog dinâmico em Next.js com artigos práticos e envolventes, projetados para programadores.',
        viewUrl: 'https://dossantosdev.vercel.app/Project/blog-dev',
      },
      {
        id: uuid(),
        name: 'UIChroma',
        coverImage: UiImage,
        description:
          'A Biblioteca UIChroma oferece componentes ReactJS para facilitar o desenvolvimento de interfaces, focando na praticidade e personalização.',
        viewUrl: 'https://dossantosdev.vercel.app/Project/projetouichroma',
      },
    ],
    techs: [
      {
        name: 'React',
        description:
          'Experiência sólida na criação de interfaces de usuário dinâmicas e reutilizáveis, utilizando componentes e hooks',
        icon: FaReact,
      },
      {
        name: 'Next.js',
        description:
          'Habilidade em desenvolver aplicações server-side renderizadas e estáticas, aproveitando a performance e os recursos de SEO',
        icon: SiNextdotjs,
      },
      {
        name: 'JavaScript',
        description:
          'Proficiência em programação assíncrona, manipulação de DOM e desenvolvimento de funcionalidades interativas',
        icon: FaJsSquare,
      },
      {
        name: 'TypeScript',
        description:
          'Forte conhecimento em tipagem estática e orientação a objetos, garantindo código mais robusto e menos propenso a erros',
        icon: SiTypescript,
      },
      {
        name: 'Tailwind CSS',
        description:
          'Experiência em estilização rápida e eficiente de interfaces com classes utilitárias, proporcionando design responsivo e moderno',
        icon: SiTailwindcss,
      },
      {
        name: 'SCSS',
        description:
          'Capacidade de escrever CSS modular e reutilizável, utilizando variáveis, mixins e aninhamento para melhorar a manutenção do código',
        icon: SiSass,
      },
      {
        name: 'Prisma',
        description:
          'Conhecimento na modelagem de dados e integração com bancos de dados, facilitando consultas e operações complexas',
        icon: SiPrisma,
      },
      {
        name: 'PostgreSQL',
        description:
          'Experiência em design e gerenciamento de banco de dados relacional, otimização de consultas e manutenção de integridade dos dados',
        icon: SiPostgresql,
      },
      {
        name: 'Docker',
        description:
          'Habilidade em containerização de aplicações, garantindo ambientes de desenvolvimento consistentes e facilitando a implantação',
        icon: FaDocker,
      },
    ],
  },
}
