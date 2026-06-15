export interface Author {
  name: string;
  slug: string;
  avatar: string;
  role: string;
  bioEn: string;
  bioZh: string;
  specialties: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const authors: Record<string, Author> = {
  'alex-chen': {
    name: 'Alex Chen',
    slug: 'alex-chen',
    avatar: 'https://ui-avatars.com/api/?name=Alex+Chen&background=2563eb&color=fff&size=128',
    role: 'Editor-in-Chief',
    bioEn:
      'Alex is a senior software engineer with over 10 years of experience in full-stack development, cloud infrastructure, and developer tooling. He previously led engineering teams at two SaaS startups and contributes to open-source projects in his spare time. At TechPulse, Alex oversees technical content and ensures every article is backed by real-world experience.',
    bioZh:
      'Alex 是一名拥有超过 10 年经验的高级软件工程师，专注于全栈开发、云基础设施和开发者工具。他曾在两家 SaaS 初创公司领导工程团队，并在业余时间参与开源项目。在 TechPulse，Alex 负责技术内容的审核，确保每篇文章都有真实经验支撑。',
    specialties: ['Software Development', 'Cloud Computing', 'DevOps'],
    social: {
      twitter: 'https://twitter.com/alexchen',
      linkedin: 'https://linkedin.com/in/alexchen',
      github: 'https://github.com/alexchen',
    },
  },
  'sarah-lin': {
    name: 'Sarah Lin',
    slug: 'sarah-lin',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Lin&background=0d9488&color=fff&size=128',
    role: 'Senior Productivity Writer',
    bioEn:
      'Sarah is a certified productivity consultant and remote-work advocate. With a background in organizational psychology, she has helped over 50 teams transition to distributed work models. Sarah writes extensively about productivity systems, collaboration tools, and maintaining work-life balance in the digital age.',
    bioZh:
      'Sarah 是一名认证的生产力顾问和远程工作倡导者。她拥有组织心理学背景，曾帮助超过 50 个团队过渡到分布式工作模式。Sarah 广泛撰写关于生产力系统、协作工具和数字时代工作生活平衡的内容。',
    specialties: ['Productivity', 'Remote Work', 'Team Collaboration'],
    social: {
      twitter: 'https://twitter.com/sarahlin',
      linkedin: 'https://linkedin.com/in/sarahlin',
    },
  },
  'mike-johnson': {
    name: 'Mike Johnson',
    slug: 'mike-johnson',
    avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson&background=d97706&color=fff&size=128',
    role: 'Security & Tools Analyst',
    bioEn:
      'Mike is a cybersecurity specialist and tech reviewer with 8 years of hands-on experience. He holds CISSP and CEH certifications and has worked with enterprise clients to secure their cloud infrastructure. Mike specializes in breaking down complex security concepts and evaluating the latest productivity and development tools.',
    bioZh:
      'Mike 是一名网络安全专家和技术评测员，拥有 8 年实战经验。他持有 CISSP 和 CEH 认证，曾与企业客户合作保护其云基础设施。Mike 擅长将复杂的安全概念通俗化，并评测最新的生产力和开发工具。',
    specialties: ['Cybersecurity', 'Tool Reviews', 'Cloud Security'],
    social: {
      twitter: 'https://twitter.com/mikejohnson',
      github: 'https://github.com/mikejohnson',
    },
  },
};

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors[slug];
}

export function getAuthorByName(name: string): Author | undefined {
  return Object.values(authors).find((a) => a.name === name);
}

export function getAllAuthors(): Author[] {
  return Object.values(authors);
}
