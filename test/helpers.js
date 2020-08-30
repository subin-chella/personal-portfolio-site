const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Subin Chellapandian',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Subin Chellapandian',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Subin Chellapandian',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Subin Chellapandian',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Subin Chellapandian',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
