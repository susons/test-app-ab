import { describe, it, expect } from "vitest";
import { defineComponent, h } from "vue";
import { mount } from "@vue/test-utils";

import BaseLink from "@atoms/BaseLink.vue";

const NuxtLinkStub = defineComponent({
  props: ["to"],
  setup(props, { slots }) {
    return () =>
      h("a", {}, slots.default?.({ isActive: props.to === "/active" }));
  },
});

describe("BaseLink", () => {
  it("Renders the label", () => {
    const wrapper = mount(BaseLink, {
      props: { label: "Dashboard", to: "/inactive" },
      global: { stubs: { NuxtLink: NuxtLinkStub } },
    });

    expect(wrapper.text()).toContain("Dashboard");
  });

  it("applies active class when active", () => {
    const wrapper = mount(BaseLink, {
      props: { label: "Dashboard", to: "/active" },
      global: { stubs: { NuxtLink: NuxtLinkStub } },
    });

    const span = wrapper.get("span");
    expect(span.classes()).toContain("font-semibold");
  });
});
