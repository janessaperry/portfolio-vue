import type { CompanionData } from '../types'
import louieSitting from '../assets/images/louie-sitting.png'
import louieStretching from '../assets/images/louie-stretching.png'
import louieSleeping from '../assets/images/louie-sleeping.png'

export const companionData: CompanionData = {
  classy: {
    title: 'Class Act',
    description: `Your orange cat companion provides <span class="bonus-stat">+10% focus</span> when debugging complex systems.`,
    imageSrc: louieSitting,
    imageAlt: 'Orange cat sitting',
  },
  stretch: {
    title: 'Big Stretchies',
    description: `Your orange cat companion's morning stretch unlocks <span class="bonus-stat">+15% momentum</span> entering a flow state.`,
    imageSrc: louieStretching,
    imageAlt: 'Orange cat stretching',
  },
  snooze: {
    title: 'Snoozie Boos',
    description: `Your orange cat companion sleeps on it, <span class="bonus-stat">+15% clarity</span> guaranteed by morning.`,
    imageSrc: louieSleeping,
    imageAlt: 'Orange cat sleeping',
  },
}
