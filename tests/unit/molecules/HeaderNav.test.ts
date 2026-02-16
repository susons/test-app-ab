import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import HeaderNav from "@molecules/HeaderNav.vue";

const BaseLinkStub = defineComponent({
  name: "BaseLink",
  props: ["to", "label"],
  setup(props) {
    return () => h("a", { "data-to": props.to }, props.label);
  },
});

describe("HeaderNav", () => {
  it("renders three BaseLink items", () => {
    const wrapper = mount(HeaderNav, {
      global: { stubs: { BaseLink: BaseLinkStub } },
    });

    expect(wrapper.findAll("a").length).toBe(3);
  });

  it("passes correct routes", () => {
    const wrapper = mount(HeaderNav, {
      global: { stubs: { BaseLink: BaseLinkStub } },
    });

    const links = wrapper.findAll("a");

    expect(links.length).toBe(3);

    expect(links.at(0)!.attributes("data-to")).toBe("/book");
    expect(links.at(1)!.attributes("data-to")).toBe("/prepare");
    expect(links.at(2)!.attributes("data-to")).toBe("/offers");
  });
});
