// import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons'

import '../src/styles/styles.scss'

export const parameters = {
  layout: 'fullscreen',
  controls: { expanded: true }
  // backgrounds: {
  //   default: 'twitter',
  //   values: [
  //     { name: 'twitter', value: '#00aced' },
  //     { name: 'facebook', value: '#3b5998' }
  //   ]
  // }
}


export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'theme-light',
    toolbar: {
      icon: 'paintbrush',
      items: [
          { value: 'theme-light', title: 'Light theme'},
          { value: 'theme-dark', title: 'Dark theme'}
      ]
    }
  }
}

const withTheme = (Story, context) => { 
  console.log(context.globals.theme)
  // const { the } = context.globals.theme
  return {
    data() {
      return {
        theme: context.globals.theme
      }
    },
    template: `<div class="theme" :class="theme"><story /></div>`
  }
}

export const decorators = [withTheme]
