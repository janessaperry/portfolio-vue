import type { CompanionData } from '../types'

export const companionData: CompanionData = {
  classy: {
    title: 'Class Act',
    description: `Your orange cat companion provides <span class="bonus-stat">+10% focus</span> when debugging complex systems.`,
    imageSrc: '/src/assets/images/louie-sitting.png',
    imageAlt: 'Orange cat sitting',
  },
  stretch: {
    title: 'Big Stretchies',
    description: `Your orange cat companion's morning stretch unlocks <span class="bonus-stat">+15% momentum</span> entering a flow state.`,
    imageSrc: '/src/assets/images/louie-stretching.png',
    imageAlt: 'Orange cat stretching',
  },
  snooze: {
    title: 'Snoozie Boos',
    description: `Your orange cat companion sleeps on it, <span class="bonus-stat">+15% clarity</span> guaranteed by morning.`,
    imageSrc: '/src/assets/images/louie-sleeping.png',
    imageAlt: 'Orange cat sleeping',
  },
}
