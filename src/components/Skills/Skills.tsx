import Badge from "../Badge/Badge";

const Skills = () => {
  const skills = [
    {
      name: 'html',
      title: 'Html5',
      image: '/html5.svg'
    },
    {
      name: 'css',
      title: 'Css3',
      image: '/css3.svg'
    },
    {
      name: 'javascript',
      title: 'Javascript',
      image: '/javascript.svg'
    },
    {
      name: "angular",
      title: 'Angular',
      image: "/angular.svg"
    },
    {
      name: 'react',
      title: 'React',
      image: '/react.svg'
    },
    {
      name: 'nextjs',
      title: 'Nextjs',
      image: '/nextjs.svg'
    },
    {
      name: 'bootstrap',
      title: 'Bootstrap',
      image: '/bootstrap.svg'
    },
    {
      name: 'tailwind',
      title: 'Tailwindcss',
      image: '/tailwindcss.svg'
    },
    {
      name: 'nodejs',
      title: 'Nodejs',
      image: '/nodejs.svg'
    },
    {
      name: 'express',
      title: 'Express',
      image: '/express.svg'
    },
    {
      name: 'mongodb',
      title: 'MongoDB',
      image: '/mongodb.svg'
    },
    {
      name: 'mysql',
      title: 'Mysql',
      image: '/mysql.svg'
    },
    {
      name: 'typescript',
      title: 'Typescript',
      image: '/typescript.svg'
    },
    {
      name: 'python',
      title: 'Python',
      image: '/python.svg'
    }
  ];

  return (
    <div className="flex flex flex-wrap justify-center md:justify-start items-center gap-2">
      {skills.map((skill, index) => (
        <div key={index}>
          <Badge badge={skill} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
