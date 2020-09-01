const skills = [{
  title: 'Javascript',
  competency: 3,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'Node.JS',
  competency: 3,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'React',
  competency: 3,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Bash',
  competency: 2,
  category: ['Tools', 'Languages'],
},
{
  title: 'Jira',
  competency: 2,
  category: ['Tools'],
},
{
  title: 'Amazon Web Services',
  competency: 4,
  category: ['Web Development', 'Tools'],
},
{
  title: 'OracleDB',
  competency: 4,
  category: ['Web Development', 'Databases', 'Languages'],
},{
  title: 'ETL',
  competency: 4,
  category: ['Web Development', 'Databases', 'Languages'],
},
{
  title: 'MySql',
  competency: 4,
  category: ['Web Development', 'Databases', 'Languages'],
},{
  title: 'Java',
  competency: 5,
  category: ['Languages', 'Java'],
},
{
  title: 'Git/Bitbucket',
  competency: 5,
  category: ['Tools'],
},

{
  title: 'HTML + CSS',
  competency: 3,
  category: ['Web Development', 'Languages'],
},

{
  title: 'Python',
  competency: 2,
  category: ['Languages'],
},
{
  title: 'Spring Boot',
  competency: 5,
  category: ['Java'],
},
{
  title: 'Agile',
  competency: 4,
  category: ['Web Development'],
},
{
  title: 'Servlets',
  competency: 4,
  category: ['Web Development','Java'],
},
{
  title: 'JSP',
  competency: 4,
  category: ['Web Development','Java'],
},
{
  title: 'Cryptography',
  competency: 3,
  category: ['Web Development','Java'],
},
{
  title: 'OIDC',
  competency: 5,
  category: ['Web Development','Java'],
},
{
  title: 'SAML',
  competency: 5,
  category: ['Web Development','Java'],
},
{
  title: 'Junit',
  competency: 4,
  category: ['Web Development','Java'],
}
,
{
  title: 'TestNG',
  competency: 4,
  category: ['Web Development','Java'],
}
,
{
  title: 'Selenium',
  competency: 5,
  category: ['Web Development','Java'],
},
{
  title: 'Rest API',
  competency: 5,
  category: ['Web Development','Java'],
},
{
  title: 'Unix',
  competency: 5,
  category: ['Operating System','Server'],
},
{
  title: 'Apache',
  competency: 5,
  category: ['Server'],
},
{
  title: 'Tomcat',
  competency: 5,
  category: ['Server'],
},
{
  title: 'Pubic Key Infrastructure',
  competency: 5,
  category: ['Java'],
},
{
  title: 'JMS',
  competency: 3,
  category: ['Java'],
},
{
  title: 'nodejs',
  competency: 3,
  category: ['Server', 'Tools'],
},
{
  title: 'npm',
  competency: 3,
  category: ['Tools'],
},
{
  title: 'Jenkins',
  competency: 5,
  category: ['Tools'],
}
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
