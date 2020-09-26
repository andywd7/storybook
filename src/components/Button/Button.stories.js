import { withDesign } from "storybook-addon-designs"

import IiButton from "./Button.vue"
import MDX from "./Button.storie.mdx"
// import VUE from "!!raw-loader!./Button.vue"
// import CSS from "!!raw-loader!./button.css"

const sizeOptions = {
  Default: undefined,
  Small: "sm"
}

const variantOptions = {
  Default: undefined,
  Primary: "primary",
  Secondary: "secondary",
  Standard: "standard",
  Danger: "danger",
  Ghost: "ghost"
}

export default {
  title: "Components/Button",
  component: IiButton,
  decorators: [withDesign],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      page: MDX
    }
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: sizeOptions
      }
    },
    variant: {
      control: {
        type: "select",
        options: variantOptions
      }
    },
    default: {
      control: { type: "text" },
      defaultValue: "Button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "null" }
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IiButton },
  template: `<ii-button v-bind="$props">{{ this.default }}</ii-button>`
})

export const Playground = Template.bind()
Playground.parameters = {
  controls: {
    disable: false
  }
}

export const Standard = Template.bind()
Standard.args = {
  default: "Standard",
  variant: "standard"
}
Standard.parameters = {
  docs: {
    source: {
      code: `<ii-button>Standard</ii-button>`
    }
  }
}

export const Secondary = Template.bind()
Secondary.args = {
  default: "Secondary",
  variant: "secondary"
}
Secondary.parameters = {
  docs: {
    source: {
      code: `<ii-button variant="secondary">Secondary</ii-button>`
    }
  }
}

export const Primary = Template.bind()
Primary.args = {
  default: "Primary",
  variant: "primary"
}
Primary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/xV0XmrrCru3JAPH8w0FWb5/%F0%9F%93%90Netace-UI?node-id=83%3A2"
  },
  docs: {
    source: {
      code: `<ii-button variant="primary">Primary</ii-button>`
    }
  }
}

export const Danger = Template.bind()
Danger.args = {
  default: "Danger",
  variant: "danger"
}
Danger.parameters = {
  docs: {
    source: {
      code: `<ii-button variant="danger">Danger</ii-button>`
    }
  }
}

export const Ghost = Template.bind()
Ghost.args = {
  default: "Ghost",
  variant: "ghost"
}
Ghost.parameters = {
  docs: {
    source: {
      code: `<ii-button variant="ghost">Ghost</ii-button>`
    }
  }
}

// const buttonVariants = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { IiButton },
//   template: `<ii-button :variant="variant">{{text}}</ii-button>`
// })

// export const Primary = buttonVariants.bind()
// Primary.args = {
//   text: "Button",
//   variant: "primary"
// }

// const SOURCE_REGEX = /`(?:[^`])*`$/gm
// Primary.parameters = {
//   docs: {
//     transformSource: src => {
//       const match = SOURCE_REGEX.exec(src)
//       const clean = match[0].replace(/`/gm, "")
//       return match ? clean : src
//     }
//   }
// }
