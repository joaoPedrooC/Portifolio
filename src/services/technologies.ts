import { IconType } from "react-icons";
import { DiDjango, DiGit } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPrisma, SiRedux, SiTypescript } from "react-icons/si";

type technologiesListType = IconType[]

export const technologiesList: technologiesListType = [
  FaHtml5,
  FaCss3Alt,
  IoLogoJavascript,
  SiTypescript,
  FaReact,
  SiRedux,
  FaSass,
  FaNodeJs,
  SiPrisma,
  FaPython,
  DiDjango,
  DiGit,
  FaGithub
]

export const technologiesNames: Array<string> = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Sass',
  'NodeJS',
  'Prisma',
  'Python',
  'Django',
  'Git',
  'GitHub'
]