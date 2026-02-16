import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import HeaderControl from "@molecules/HeaderControl.vue";

const IconButtonStub = defineComponent({
  name: "IconButton",
  props: ["name", "to", "label"],
  setup(props) {
    return () =>
      h("button", {
        "data-name": props.name,
        "data-to": props.to,
        "data-label": props.label,
      });
  },
});

describe("HeaderControl", () => {
  it("renders three IconButton components", () => {
    const wrapper = mount(HeaderControl, {
      global: { stubs: { IconButton: IconButtonStub } },
    });

    const buttons = wrapper.findAll("button");
    expect(buttons.length).toBe(3);
  });

  it("passes correct props to IconButton", () => {
    const wrapper = mount(HeaderControl, {
      global: { stubs: { IconButton: IconButtonStub } },
    });

    const buttons = wrapper.findAll("button");

    expect(buttons[0].attributes("data-to")).toBe("/language");
    expect(buttons[1].attributes("data-to")).toBe("/login");
    expect(buttons[2].attributes("data-to")).toBe("/search");
  });
});
