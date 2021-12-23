import { Tech } from "./Tech";

export class Project {
  name!: string;
  description!: string;
  image!: string;
  techs!: Tech[];
  github?: string;
  demo?: string;
}
