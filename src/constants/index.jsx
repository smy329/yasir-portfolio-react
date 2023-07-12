import { disneyPalace, flavorFusion, melodyMakers } from '../assets';
import {
  BiLogoCss3,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNetlify,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi';
import { SiExpress, SiFigma, SiVercel } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const skills = [
  {
    name: 'HTML 5',
    icon: <BiLogoHtml5 />,
  },
  {
    name: 'CSS 3',
    icon: <BiLogoCss3 />,
  },
  {
    name: 'Tailwind CSS',
    icon: <BiLogoTailwindCss />,
  },
  {
    name: 'JavaScript',
    icon: <BiLogoJavascript />,
  },
  {
    name: 'TypeScript',
    icon: <BiLogoTypescript />,
  },

  // {
  //   name: 'TypeScript',
  //   icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  // },
  {
    name: 'React JS',
    icon: <BiLogoReact />,
  },
  {
    name: 'Next.js',
    icon: <TbBrandNextjs />,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png',
  // },

  {
    name: 'Node JS',
    icon: <BiLogoNodejs />,
  },
  {
    name: 'Express.js',
    icon: <SiExpress />,
  },
  {
    name: 'MongoDB',
    icon: <BiLogoMongodb />,
  },

  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'Github',
    icon: <BiLogoGithub />,
  },
  {
    name: 'Figma',
    icon: <SiFigma />,
  },
  {
    name: 'Netlify',
    icon: <BiLogoNetlify />,
  },
  {
    name: 'Vercel',
    icon: <SiVercel />,
  },

  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

export const projects = [
  {
    id: 'project-1',
    name: 'Melody Makers Camp: Summer Camp Music Learning School',
    description:
      'Melody Makers Camp is a summer music school that offers a wide range of music classes and activities for students of all ages. Our website provides a user-friendly platform for students to enroll in classes, explore talented instructors, and manage their learning journey. The website design is visually appealing, with a unique and captivating layout that enhances the user experience.',
    tags: ['Express.js', 'MongoDB', 'JWT', 'React', 'Tanstack Query', 'Framer Motion', 'Tailwind'],
    image: melodyMakers,
    clientRepo: 'https://github.com/smy329/melody-makers-client-react',
    serverRepo: 'https://github.com/smy329/melody-makers-server-express.js',
    demo: 'https://melody-makers-camp.web.app/',
  },
  {
    id: 'project-2',
    name: 'Disney Palace: A Toy Marketplace',
    description:
      'The Disney Palace Marketplace is an online platform where users can explore and purchase various kinds of Disney toys. This marketplace provides a wide range of Disney toys along with detailed information, pricing, available quantity, and seller information for each toy. In addition, authenticated sellers have the ability to upload, update, and delete their toy products.',
    tags: ['Express.js', 'MongoDB', 'React', 'React Router', 'Firebase', 'AOS', 'Tailwind'],
    image: disneyPalace,
    clientRepo: 'https://github.com/smy329/disney-palace-client-react',
    serverRepo: 'https://github.com/smy329/disney-palace-server-express.js',

    demo: 'https://disney-palace.web.app/',
  },
  {
    id: 'project-3',
    name: 'Flavor Fusion: A Mexican Recipe Website',
    description:
      'This is a recipe website. You will find delicious Mexican recipes and chefs details. Newly arrived recipes also can be found',
    tags: ['Express.js', 'React', 'React Router', 'Firebase', 'React Lazy Load', 'Tailwind'],
    image: flavorFusion,
    clientRepo: 'https://github.com/smy329/flavor-fusion-client-react',
    ServerRepo: 'https://github.com/smy329/flavor-fusion-server-express.js',
    demo: 'https://chef-recipe-558e5.web.app/',
  },
];

export const experiences = [
  {
    id: '4',
    title: 'Backend Developer (Intern)',
    company_name: 'DomumGym LLC',
    date: 'Jul 2023 - Present',
  },
  {
    id: '1',
    title: 'Co-founder & CEO',
    company_name: 'Levia',
    date: 'Jan 2019 - Nov 2022',
  },
  {
    id: '2',
    title: 'Officer Cadet (OC)',
    company_name: 'Bangladesh Military Academy',
    date: 'Dec 2014 - April 2016',
  },
  {
    id: '3',
    title: 'B. Sc in Computer Science & Engineering',
    company_name: 'University of Chittagong',
    date: 'Jan 2014 - Dec 2019',
  },
];
