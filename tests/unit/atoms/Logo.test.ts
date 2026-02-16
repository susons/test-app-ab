import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import Logo from "@atoms/Logo.vue";

const NuxtLinkStub = defineComponent({
  props: ["to"],
  setup(props, { slots }) {
    return () => h("a", { href: props.to }, slots.default?.());
  },
});

describe("Logo", () => {
  it("renders logo image", () => {
    const wrapper = mount(Logo, {
      global: { stubs: { NuxtLink: NuxtLinkStub } },
    });

    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("links to root path", () => {
    const wrapper = mount(Logo, {
      global: { stubs: { NuxtLink: NuxtLinkStub } },
    });

    expect(wrapper.get("a").attributes("href")).toBe("/");
  });
});
