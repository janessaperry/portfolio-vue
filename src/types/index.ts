export type CompanionKey = 'classy' | 'stretch' | 'snooze'
export type CompanionEntry = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string
}
export type CompanionData = Record<CompanionKey, CompanionEntry>

export type Project = {
  id: string;
  showcase: boolean;
  slug?: string;
  githubRepos?: {
    type: "client" | "server";
    title: string;
    url: string;
  }[];
  liveUrl?: string;
  categories: string[];
  thumbnailInfo: {
    filePath: string;
    altText: string;
  };
  title: string;
  role: string;
  type: string;
  yearCompleted: string;
  teaser: string;
  experiencePoints?: string[];
  skillsAndTools: string[];
}
