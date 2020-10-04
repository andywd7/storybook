import IiButton from "../CSF-MDXpage/Button.vue"

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IiButton },
  template: `<ii-button v-bind="$props">{{ this.default }}</ii-button>`
})

export const Playground1 = Template.bind()
Playground1.args = {
  variant: "secondary"
}
Playground1.parameters = {
  controls: {
    disable: false
  }
}

export const Standard1 = Template.bind()
Standard1.args = {
  default: "Standard",
  variant: "standard"
}
Standard1.parameters = {
  docs: {
    source: {
      code: `<ii-button>Standard</ii-button>`
    }
  }
}

export const Secondary1 = Template.bind()
Secondary1.args = {
  default: "Secondary",
  variant: "secondary"
}
Secondary1.parameters = {
  docs: {
    source: {
      code: `<ii-button variant="secondary">Secondary</ii-button>`
    }
  }
}

export const Primary1 = Template.bind()
Primary1.args = {
  default: "Primary",
  variant: "primary"
}
Primary1.parameters = {
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

export const Danger1 = Template.bind()
Danger1.args = {
  default: "Danger",
  variant: "danger"
}
Danger1.parameters = {
  docs: {
    source: {
      code: `<ii-button variant="danger">Danger</ii-button>`
    }
  }
}

export const Ghost1 = Template.bind()
Ghost1.args = {
  default: "Ghost",
  variant: "ghost"
}
Ghost1.parameters = {
  docs: {
    source: {
      code: `<ii-button variant="ghost">Ghost</ii-button>`
    }
  }
}
