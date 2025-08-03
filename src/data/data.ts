import { Skill } from '@/types/skills';
import { IExperienceItem } from '@/types/experience';
import { IProject } from '@/types/projects';

export const skills: Skill[] = [
  {
    label: 'JavaScript',
    logoSrc: '/images/javascript.png',
    id: crypto.randomUUID(),
  },
  {
    label: 'TypeScript',
    logoSrc: '/images/typescript.png',
    id: crypto.randomUUID(),
  },
  {
    label: 'React',
    logoSrc: '/images/react.png',
    id: crypto.randomUUID(),
  },
  {
    label: 'Vue',
    logoSrc: '/images/vue.png',
    id: crypto.randomUUID(),
  },
  {
    label: 'HTML',
    logoSrc: '/images/html.png',
    id: crypto.randomUUID(),
  },
  {
    label: 'CSS',
    logoSrc: '/images/css.png',
    id: crypto.randomUUID(),
  },
  {
    label: 'Next.js',
    logoSrc: '/images/next.png',
    id: crypto.randomUUID(),
    addImageBackground: true,
  },
  {
    label: 'Node.js',
    logoSrc: '/images/node.png',
    id: crypto.randomUUID(),
    addImageBackground: false,
  },
  {
    label: 'Go',
    logoSrc: '/images/go.svg',
    id: crypto.randomUUID(),
    addImageBackground: true,
  },
  {
    label: 'Tailwind',
    logoSrc: '/images/tailwind.png',
    id: crypto.randomUUID(),
  },
];

export const experience: IExperienceItem[] = [
  {
    name: 'E Net Production',
    position: 'Frontend developer',
    startDate: '09/2023',
    endDate: 'present',
    duties: [
      'Developing main online store',
      'Implementing new features',
      'Refactoring code',
      'Writing documentations',
      'Improving performance',
      'Building administrator panel',
    ],
  },
  {
    name: 'Future Processing',
    position: 'Frontend developer',
    startDate: '08/2023',
    endDate: '03/2021',
    duties: [
      'Implementing new features based on product owner requirements',
      'Maintaining application and fixing bugs',
      'Refactoring code',
      'Improving performance',
      'Participation in design application',
      'Writing unit tests',
    ],
  },
  {
    name: '3E Software House',
    position: 'Frontend developer',
    startDate: '09/2020',
    endDate: '02/2021',
    duties: [
      'Product development and maintaining existing applications',
      'Maintaining application and fixing bugs',
      'Building administrator panel',
    ],
  },
  {
    name: 'Net Innovation Software',
    position: 'Fullstack developer',
    startDate: '07/2017',
    endDate: '08/2020',
    duties: [
      'Developing main online store',
      'Designing and implementing backend',
      'Designing database',
      'Writing E2E tests',
    ],
  },
  {
    name: 'Kwadra',
    position: 'Control engineer',
    startDate: '06/2016',
    endDate: '06/2017',
    duties: ['Programming PLC', 'Creating data visualizations'],
  },
  {
    name: "Bialystok's Waterworks",
    position: 'Control engineer',
    startDate: '09/2013',
    endDate: '05/2016',
    duties: ['Programming PLC', 'Creating data visualizations'],
  },
  {
    name: 'Aquard',
    position: 'Control engineer',
    startDate: '09/2012',
    endDate: '08/2013',
    duties: ['Programming PLC', 'Creating data visualizations'],
  },
];

export const projects: IProject[] = [
  {
    name: 'Media Expert',
    description: 'Online store',
    technologies: [
      {
        name: 'Vue',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'Typescript',
        logoUrl: '/images/typescript.png',
      },
    ],
  },
  {
    name: 'Media Expert - Admin Panel',
    technologies: [
      {
        name: 'Vue',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'Typescript',
        logoUrl: '/images/typescript.png',
      },
    ],
  },
  {
    name: 'Blis',
    description: 'Marketing data visualization',
    technologies: [
      {
        name: 'React',
        logoUrl: '/images/react.png',
      },
      {
        name: 'Typescript',
        logoUrl: '/images/typescript.png',
      },
      {
        name: 'Google Maps',
        logoUrl: '/images/typescript.png',
      },
    ],
  },
  {
    name: 'Ordering stack',
    description: 'Application for restaurant orders',
    technologies: [
      {
        name: 'React',
        logoUrl: '/images/react.png',
      },
      {
        name: 'React Saga',
        logoUrl: '/images/redux-saga.png',
      },
      {
        name: 'Styled Components',
        logoUrl: '/images/typescript.png',
      },
    ],
  },
  {
    name: 'Stationary store manager',
    technologies: [
      {
        name: 'Vue',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'Vuex',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'Twig',
        logoUrl: '/images/twig.png',
      },
      {
        name: 'PHP',
        logoUrl: '/images/php.png',
      },
      {
        name: 'Postgres',
        logoUrl: '/images/postgres.png',
      },
    ],
  },
  {
    name: 'Piotr i Paweł',
    description: 'Online store',
    technologies: [
      {
        name: 'Vue',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'PHP',
        logoUrl: '/images/php.png',
      },
      {
        name: 'Postgres',
        logoUrl: '/images/postgres.png',
      },
    ],
  },
  {
    name: 'Employee tasks manager',
    technologies: [
      {
        name: 'Vue',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'Vuex',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'Twig',
        logoUrl: '/images/twig.png',
      },
      {
        name: 'PHP',
        logoUrl: '/images/php.png',
      },
      {
        name: 'Postgres',
        logoUrl: '/images/postgres.png',
      },
    ],
  },
];

export default {};
