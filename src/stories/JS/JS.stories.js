import IiButton from "../../components/Button/Button.vue"
import {
  sizeOptions,
  typeOptions,
  variantOptions
} from "../../components/store"

export default {
  title: "TYPES/JS",
  component: IiButton,
  parameters: {
    controls: {
      disable: true
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

export const Playground3 = Template.bind()
Playground3.args = {
  variant: "secondary"
}
Playground3.parameters = {
  controls: {
    disable: false
  }
}

export const Standard3 = Template.bind()
Standard3.args = {
  default: "Standard",
  variant: "standard"
}
Standard3.parameters = {
  docs: {
    source: {
      code: `<ii-button>Standard</ii-button>`
    }
  }
}

export const Secondary3 = Template.bind()
Secondary3.args = {
  default: "Secondary",
  variant: "secondary"
}
Secondary3.parameters = {
  docs: {
    source: {
      code: `<ii-button variant="secondary">Secondary</ii-button>`
    }
  }
}

export const Primary3 = Template.bind()
Primary3.args = {
  default: "Primary",
  variant: "primary"
}
Primary3.parameters = {
  docs: {
    source: {
      code: `<ii-button variant="primary">Primary</ii-button>`
    }
  }
}

export const Danger3 = Template.bind()
Danger3.args = {
  default: "Danger",
  variant: "danger"
}
Danger3.parameters = {
  docs: {
    source: {
      code: `<ii-button variant="danger">Danger</ii-button>`
    }
  }
}

export const Ghost3 = Template.bind()
Ghost3.args = {
  default: "Ghost",
  variant: "ghost"
}
Ghost3.parameters = {
  docs: {
    source: {
      code: `<ii-button variant="ghost">Ghost</ii-button>`
    }
  }
}
