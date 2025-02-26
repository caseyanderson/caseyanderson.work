type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

/**
export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]
**/

export const BLOG_POSTS: BlogPost[] = [
/**
    {
        title: 'Trade School',
        description: 'a project space building worker power through creative experimentation and education',
        link: '/blog/trade-school',
        uid: 'blog-1',
    },
    {
        title: 'KAOS Kids',
        description: 'an Afrofuturist Culture School designed for / with KAOS Network, the legendary Leimert Park community arts center',
        link: '/blog/kaos-kids',
        uid: 'blog-2',
    },
    {
        title: 'a wave press',
        description: 'a private press with an emphasis on experimental work in and around music and sound',
        link: '/blog/awavepress',
        uid: 'blog-3',
    },
    {
        title: 'yon ti vizit',
        description: 'a conversation with Ogou Feray, a lwa (voudou spirit) who came to our friend Anetude "Zaza" Geffrard',
        link: '/blog/yon-ti-vizit',
        uid: 'blog-4',
    },
    {
        title: 'ghostses',
        description: 'a computationally generated deconstruction / distortion of W.G. Sebald’s The Rings of Saturn for two readers with a batterie of instruments',
        link: '/blog/ghostses',
        uid: 'blog-5',
    },
    {
        title: 'Laboratwa Eletronik Matènwa',
        description: 'a hands-on technology curriculum designed for / with Lekòl Kominote Matènwa, a community school in rural Haiti',
        link: '/blog/laboratwa-eletroknik-matnewa',
        uid: 'blog-6',
    },
        {
        title: 'RADIOS',
        description: 'works for many AM/FM Radios',
        link: '/blog/RADIOS',
        uid: 'blog-7',
    },
    {
        title: 'territory (echo park)',
        description: 'a participatory sound event for radio transmitter and many radios',
        link: '/blog/territory',
        uid: 'blog-8',
    },
    {
        title: 'Electric Melon',
        description: 'a hands-on technology workshop in which participants create and perform with an amplified melon',
        link: '/blog/electric-melon',
        uid: 'blog-9',
    },
    {
        title: 'Rainforest IV, David Tudor',
        description: 'designed technology for, and installed, this landmark Tudor sound installation',
        link: '/blog/rainforest',
        uid: 'blog-10',
    },
    {
        title: 'Changes: 64 Studies for 6 Harps, James Tenney',
        description: 'recovered and completed this massive, unfinished Tenney project for archiving, recording, and performance',
        link: '/blog/changes',
        uid: 'blog-11',
    },
    {
        title: 'The Experimental Music Yearbook',
        description: 'a repository and periodic festival archiving the methods and styles of artists working in the experimental music tradition',
        link: '/blog/emy',
        uid: 'blog-12',
    },
**/
    {
        title: 'test',
        description: 'test',
        link: '/blog/emy',
        uid: 'blog-1',
    },


]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/caseyanderson',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/casey-thomas-anderson',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/fakecaseyanderson',
  },
]

export const EMAIL = 'cta@caseyanderson.com'
