import { disneyPalace, flavorFusion, melodyMakers } from '../assets';

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
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg',
  },
  {
    name: 'CSS 3',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  // {
  //   name: 'TypeScript',
  //   icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  // },
  {
    name: 'React JS',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Next.js',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png',
  // },

  {
    name: 'Node JS',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    name: 'Express.js',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
  },
  {
    name: 'MongoDB',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Mongodb-icon.svg',
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
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg',
  },
  {
    name: 'Figma',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  },
  {
    name: 'Netlify',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg',
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
    tags: ['react', 'restapi', 'scss'],
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
    tags: ['react', 'restapi', 'scss'],
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
    tags: ['React', 'restapi', 'scss'],
    image: flavorFusion,
    clientRepo: 'https://github.com/smy329/flavor-fusion-client-react',
    ServerRepo: 'https://github.com/smy329/flavor-fusion-server-express.js',
    demo: 'https://chef-recipe-558e5.web.app/',
  },
];

export const experiences = [
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
