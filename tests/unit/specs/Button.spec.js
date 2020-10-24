import { shallowMount, createLocalVue } from "@vue/test-utils"
import IiButton from "../../../src/components/Button/Button.vue"

const localVue = createLocalVue()

describe("Button.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(IiButton, {
      localVue
    })
  })

  it("renders a button", () => {
    expect(wrapper.is("button")).toBe(true)
  })

  it("renders base class", () => {
    expect(wrapper.classes()).toContain("ii-btn")
  })

  it("sets default type prop correctly", () => {
    expect(wrapper.vm.$options.props.type.default).toBe("button")
    expect(wrapper.attributes().type).toBe("button")
  })

  it("validates type prop", () => {
    const type = wrapper.vm.$options.props.type
    // expect(type.validator("test")).toBe(false)
    expect(type.validator("reset")).toBe(true)
  })

  it("sets type attr correctly", () => {
    const wrapper = shallowMount(IiButton, {
      propsData: {
        type: "reset"
      }
    })
    expect(wrapper.attributes().type).toBe("reset")
  })

  it("sets default variant prop correctly", () => {
    expect(wrapper.vm.$options.props.variant.default).toBe("standard")
    expect(wrapper.classes()).toContain("ii-btn--standard")
  })

  it("validates variant prop", () => {
    const type = wrapper.vm.$options.props.variant
    expect(type.validator("test")).toBe(false)
    expect(type.validator("danger")).toBe(true)
  })

  it("sets variant correctly", () => {
    const wrapper = shallowMount(IiButton, {
      propsData: {
        variant: "primary"
      }
    })
    expect(wrapper.attributes().class).toBe("ii-btn ii-btn--primary")
  })

  it("sets default size prop correctly", () => {
    // expect(wrapper.vm.$options.props.size.default).toBe("")
    expect(wrapper.classes()).not.toContain("ii-btn--sm")
  })

  it("validates size prop", () => {
    const size = wrapper.vm.$options.props.size
    expect(size.validator("small")).toBe(false)
    expect(size.validator("sm")).toBe(true)
  })

  it("sets size correctly", () => {
    const wrapper = shallowMount(IiButton, {
      propsData: {
        size: "sm"
      }
    })
    expect(wrapper.classes()).toContain("ii-btn--sm")
  })

  it("sets variant and size correctly together", () => {
    const wrapper = shallowMount(IiButton, {
      propsData: {
        size: "sm",
        variant: "danger"
      }
    })
    expect(wrapper.classes()).toContain("ii-btn--sm")
    expect(wrapper.classes()).toContain("ii-btn--danger")
  })

  it("sets default pressed prop correctly", () => {
    // expect(wrapper.vm.$options.props.pressed.default).toBe(null)
    expect(wrapper.classes()).not.toContain("ii-btn--pressed")
    expect(wrapper.attributes("aria-pressed")).toBeUndefined()
  })

  it("sets pressed true correctly", () => {
    const wrapper = shallowMount(IiButton, {
      propsData: {
        pressed: true
      }
    })
    expect(wrapper.classes()).toContain("ii-btn--pressed")
    expect(wrapper.attributes("aria-pressed")).toBe("true")
  })

  it("sets pressed false correctly", () => {
    const wrapper = shallowMount(IiButton, {
      propsData: {
        pressed: false
      }
    })
    expect(wrapper.classes()).not.toContain("ii-btn--pressed")
    // expect(wrapper.attributes("aria-pressed")).toBe("false")
  })
})
