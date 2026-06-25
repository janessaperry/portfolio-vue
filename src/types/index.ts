export type CompanionKey = 'classy' | 'stretch' | 'snooze'
export type CompanionEntry = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string
}
export type CompanionData = Record<CompanionKey, CompanionEntry>
