export const pages = {
  home: {
    path: "/",
    title: "Olga Feldman | Monoxrome visual artwork",
    description: "Olga Feldman. Monoxrome visual artwork.",
  },
  about: {
    path: "/about",
    title: "Olga Feldman | Bio & Artist Statement",
    description: "Olga Feldman. Bio & Artist Statement.",
  },
  exhibitions: {
    path: "/exhibitions",
    title: "Olga Feldman | Exhibitions",
    description: "Olga Feldman. Recent and upcoming exhibitions.",
  },
  projects: {
    path: "/projects",
    title: "Olga Feldman | Projects",
    description: "Selected visual art projects by Olga Feldman.",
  },
  contact: {
    path: "/contact",
    title: "Olga Feldman | Contact",
    description: "Get in touch with Olga Feldman.",
  },
  twisters: {
    path: "/projects/twisters",
    title: "Twisters | Olga Feldman",
    description: "Monochrome project 'Twisters' by Olga Feldman.",
  },
  hikli: {
    path: "/exhibitions/hikli",
    title: "Hikli | Olga Feldman",
    description: "Visual series 'Hikli' by Olga Feldman.",
  },
  shelter: {
    path: "/exhibitions/shelter",
    title: "Shelter | Olga Feldman",
    description: "Project 'Shelter' by Olga Feldman.",
  },
  frequencies: {
    path: "/projects/frequencies",
    title: "Frequencies | Olga Feldman",
    description: "Monochrome artwork from the 'Frequencies' series.",
  },
  anatomy: {
    path: "/projects/anatomy",
    title: "AnAtomy | Olga Feldman",
    description: "Visual project 'AnAtomy' by Olga Feldman.",
  },
  oneofakind: {
    path: "/projects/oneofakind",
    title: "One Of A Kind | Olga Feldman",
    description: "Unique artworks from 'One Of A Kind' series.",
  },
  parting: {
    path: "/exhibitions/parting",
    title: "Parting: stories of grief and letting go | Olga Feldman",
    description: "Monochrome exploration in 'Parting' project.",
  },
  women: {
    path: "/projects/women",
    title: "Women | Olga Feldman",
    description: "The 'Women' series by Olga Feldman.",
  },
  variousart: {
    path: "/projects/variousart",
    title: "Various Art | Olga Feldman",
    description: "Various monochrome artworks by Olga Feldman.",
  },
  talkingmouse: {
    path: "/projects/talkingmouse",
    title: "Decomposition of the Talking Mouse | Olga Feldman",
    description: "Reaearch on humans and mice",
  },
} as const;

export type Page = keyof typeof pages;

export const pageIds = Object.keys(pages) as Page[];

export function isPage(value: string): value is Page {
  return Object.prototype.hasOwnProperty.call(pages, value);
}
