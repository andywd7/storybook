import IiButton from "./Button.vue"
import MDX from "./CSF-MDXpage.mdx"
import { sizeOptions, typeOptions, variantOptions } from "../store"
// import VUE from "!!raw-loader!./Button.vue"
// import CSS from "!!raw-loader!./button.css"

export default {
  title: "CSF-MDXpage",
  component: IiButton,
  // decorators: [withDesign],
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
    type: {
      control: {
        type: "select",
        options: typeOptions
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
