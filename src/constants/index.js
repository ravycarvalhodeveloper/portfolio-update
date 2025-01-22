import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.jpg";

export const HERO_CONTENT = `Sou um desenvolvedor  front-end  apaixonado, com talento para criar aplicações web robustas e escaláveis. Com 2 anos de experiência prática, aprimorei minhas habilidades em tecnologias front-end como React e Next.js, bem como tecnologias back-end: Node.js, Firebase e MongoDB. Meu objetivo é aproveitar minha experiência para criar soluções inovadoras que impulsionem o crescimento dos negócios e proporcionem experiências excepcionais ao usuário.`;

export const ABOUT_TEXT = `Sou um desenvolvedor full stack dedicado e versátil, apaixonado por criar aplicações web eficientes e fáceis de usar. Com 2 anos de experiência profissional, trabalhei com diversas tecnologias, incluindo React, Next.js, Node.js, MySQL, Firebase e MongoDB. Minha jornada no desenvolvimento web começou com uma profunda curiosidade sobre como as coisas funcionam e evoluiu para uma carreira onde me esforço continuamente para aprender e me adaptar a novos desafios. Eu prospero em ambientes colaborativos e gosto de resolver problemas complexos para entregar soluções de alta qualidade. Fora da programação, gosto de permanecer ativo, explorar novas tecnologias e contribuir para projetos de código aberto.`;

export const EXPERIENCES = [
  {
    year: "2024 - Atualmente",
    role: "Desenvolvedor Front-end",
    company: "Agência Elevart",
    description: `Na Agência Elevart, tenho a oportunidade de colaborar com uma equipe talentosa para desenvolver websites e landing pages que não apenas impressionam visualmente, mas também oferecem uma experiência de usuário impecável. Desde o primeiro dia, tenho trabalhado arduamente para garantir que cada projeto atenda aos mais altos padrões de qualidade, integrando as últimas tendências de design com uma abordagem centrada na acessibilidade.`,
    technologies: ["Javascript", "React.js", "Next.js","Firebase", "mongoDB"],
  },
  {
    year: "2023 - 2027",
    role: "Estudante",
    company: "Unopar",
    description: `Em 2023 dei início ao meu curso de Sistemas de informação na universidade UNOPAR.`,
    technologies: ["Html", "CSS", "JavaScript" , "React.js", "Java", "C++", "Sql"],
  },
  {
    year: "2021 - 2023",
    role: "Desenvolvedor Autônomo",
    company: "Inov Desginer",
    description: `Trabalhei na crição de Landing pages e websites para empresas locais, com foco principal em fornecer soluções digitais com a identidade única de cada empresa, com objetivos de atingir números comerciais positivos.`,
    technologies: ["Html", "CSS", "JavaScript" , "React.js"],
  },
];

export const PROJECTS = [
  {
    title: "Website Loja Doak",
    image: project1,
    description:
      "Website desenvolvido para loja de moda masculina, com funcionalidade de cadastrar produtos e compra.",
    technologies: ["NextJS", "Sass","CosmicJS", "Typescript"],
    url: "https://lojadoak-website.vercel.app/"
  },
  {
    title: "YourLink",
    image: project2,
    description:
      "O projeto é uma aplicação desenvolvida em TypeScript utilizando React e com uma interface construída com Tailwind CSS. Inspirado no conceito do Linktree, ele oferece uma solução para centralizar e organizar links para diferentes plataformas de divulgação.",
    technologies: ["React.JS", "Tailwind", , "Firebase"],
    url: "https://your-link.vercel.app/"
  },
  {
    title: "StarMovie",
    image: project3,
    description:
      "O objetivo deste projeto é criar uma aplicação que permita aos usuários pesquisar filmes e obter informações detalhadas sobre eles, consumindo a API do The Movie Database (TMDB). Além disso, os usuários poderão registrar seus filmes favoritos para acesso rápido.",
    technologies: ["HTML", "CSS", "React", "Firebase"],
    url: "https://start-movie.vercel.app/"
  },
  {
    title: "Cardápio On-line",
    image: project4,
    description:
      "Cardápio on-line para empresas locais de comida.",
    technologies: ["React", "Tailwind", "Firabase"],
    url: "https://ravycarvalhodeveloper.github.io/cardapio/"
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "Um site de portfólio pessoal apresentando projetos, habilidades e informações de contato.",
    technologies: ["React", "Tailwind"],
    url: "https://portfolio-ravycarvalho.vercel.app/"
  },
  {
    title: "Landing Page",
    image: project6,
    description:
      "Landing page desenvolvida para barberia local.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://ravycarvalhodeveloper.github.io/landing-page-barbershop/"
  },
];

export const CONTACT = {
  address: "Fortaleza - CE",
  phoneNo: "+55 88 99493-0658 ",
  email: "ravypdcarvalhomain007@gmail.com",
};