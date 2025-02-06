export interface IProject {
  name: string;
  description?: string;
  technologies: ITechnology[];
}

export interface ITechnology {
  name: string;
  logoUrl?: string;
}
