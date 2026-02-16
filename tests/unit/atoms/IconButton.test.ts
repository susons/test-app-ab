import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import IconButton from "@atoms/IconButton.vue";
import type { IconName } from "~/types/icons";

const NuxtLinkStub = defineComponent({
  name: "NuxtLink",
  props: { to: { type: String, required: true } },
  setup(_, { slots, attrs }) {
    return () => h("a", attrs, slots.default?.());
  },
});

const IconStub = defineComponent({
  name: "Icon",
  props: ["name", "size"],
  setup(props) {
    return () => h("i", { "data-icon": props.name, "data-size": props.size });
  },
});

describe("IconButton", () => {
  it("renders label when provided", () => {
    const wrapper = mount(IconButton, {
      props: { to: "/x", name: "search" as IconName, label: "Search" },
      global: { stubs: { NuxtLink: NuxtLinkStub, Icon: IconStub } },
    });

    expect(wrapper.text()).toContain("Search");
  });

  it("applies sidebar variant class", () => {
    const wrapper = mount(IconButton, {
      props: { to: "/x", name: "search" as IconName, variant: "sidebar" },
      global: { stubs: { NuxtLink: NuxtLinkStub, Icon: IconStub } },
    });

    expect(wrapper.get("a").classes().join(" ")).toContain("flex-col");
  });
});
