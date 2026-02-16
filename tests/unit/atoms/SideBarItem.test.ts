import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import SideBarItem from "@atoms/SideBarItem.vue";

const NuxtLinkStub = defineComponent({
  name: "NuxtLink",
  props: { to: { type: String, required: true } },
  setup(props, { slots }) {
    return () =>
      h(
        "a",
        { href: props.to },
        slots.default?.({ isActive: props.to === "/active" }),
      );
  },
});

describe("SideBarItem", () => {
  it("renders label", () => {
    const wrapper = mount(SideBarItem, {
      props: { to: "/inactive", label: "Dashboard" },
      global: { stubs: { NuxtLink: NuxtLinkStub } },
    });

    expect(wrapper.text()).toContain("Dashboard");
  });

  it("applies active class when active", () => {
    const wrapper = mount(SideBarItem, {
      props: { to: "/active", label: "Dashboard" },
      global: { stubs: { NuxtLink: NuxtLinkStub } },
    });

    expect(wrapper.get("span").classes().join(" ")).toContain(
      "text-brand-green",
    );
  });
});
