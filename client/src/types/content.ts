export interface Project {
  slug: string;
  title: string;
  description: string;
  content?: string;
  image?: string;
  images?: string[];
  tech?: string[];
  url?: string;
  github?: string;
  date?: string;
  category?: string;
  featured?: boolean;
}

export interface Certification {
  name?: string;
  issuer?: string;
  date?: string;
  image: string;
  url?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  current?: boolean;
}

export interface ContentMetadata {
  title: string;
  description?: string;
  date?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  draft?: boolean;
}
