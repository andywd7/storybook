// .storybook/preview.js
// import { DocsContainer } from '@storybook/addon-docs/blocks';
// import Nav from '../src/components/Button/Nav.js'

import Vue from 'vue'
import { 
  NavbarPlugin,
  VBScrollspyPlugin
} from 'bootstrap-vue'

Vue.use(NavbarPlugin)
Vue.use(VBScrollspyPlugin)

import '../src/styles/styles.scss'

const SOURCE_REGEX = /`(?:[^`])*`$/gm

export const parameters = {
  controls: { expanded: true },
  layout: 'centered'
  // docs: {
  //   transformSource: (src, storyId) => {
  //     const match = SOURCE_REGEX.exec(src)
  //     const clean = match[0].replace(/`/gm, "")
  //     console.log(clean)
  //     return match ? match[0] : src
  //     // return src
  //   }
  // }
}

// export const globalTypes = {
//   locale: {
//     name: 'Locale',
//     description: 'Internationalization locale',
//     defaultValue: 'en',
//     toolbar: {
//       icon: 'globe',
//       items: [
//         { value: 'en', right: '🇺🇸', title: 'English' },
//         { value: 'fr', right: '🇫🇷', title: 'Français' },
//         { value: 'es', right: '🇪🇸', title: 'Español' },
//         { value: 'zh', right: '🇨🇳', title: '中文' },
//         { value: 'kr', right: '🇰🇷', title: '한국어' },
//       ]
//     }
//   }
// }
