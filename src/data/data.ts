import { Skill } from '@/types/skills';
import { IExperienceItem } from '@/types/experience';

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
    name: 'Enp',
    position: 'Frontend developer',
    startDate: '10-10-2022',
    endDate: '10-10-2024',
    duties: [
      'Developing main online store',
      'Implementing new features',
      'Refactoring code',
      'Writing documentations',
      'Improving performance',
    ],
  },
  {
    name: 'FP',
    position: 'Frontend developer',
    startDate: '01-01-2020',
    endDate: '01-01-2022',
    duties: [
      'Developing main online store',
      'Implementing new features',
      'Refactoring code',
      'Writing documentations',
      'Improving performance',
    ],
  },
];

export default {};
