import { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiDjango, DiGit } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiNestjs, SiPrisma, SiRedux, SiTypescript, SiZod } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

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
  FaGithub,
  BiLogoPostgresql,
  SiExpress,
  SiZod,
  SiNestjs,
  TbBrandCpp
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
  'GitHub',
  'PostgreSQL',
  'Express',
  'Zod',
  'NestJS',
  'C++'
]