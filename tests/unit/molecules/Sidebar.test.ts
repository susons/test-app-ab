import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import Sidebar from "@molecules/Sidebar.vue";

const SideBarItemStub = defineComponent({
  name: "SideBarItem",
  props: ["to", "label"],
  setup(props) {
    return () => h("a", { "data-to": props.to }, props.label);
  },
});

describe("Sidebar", () => {
  it("renders four sidebar items", () => {
    const wrapper = mount(Sidebar, {
      global: { stubs: { SideBarItem: SideBarItemStub } },
    });

    expect(wrapper.findAll("a").length).toBe(4);
  });

  it("passes correct routes", () => {
    const wrapper = mount(Sidebar, {
      global: { stubs: { SideBarItem: SideBarItemStub } },
    });

    const links = wrapper.findAll("a");
    expect(links.length).toBe(4);

    expect(links.at(0)!.attributes("data-to")).toBe("/contact");
    expect(links.at(1)!.attributes("data-to")).toBe("/question");
    expect(links.at(2)!.attributes("data-to")).toBe("/assistance");
    expect(links.at(3)!.attributes("data-to")).toBe("/other");
  });
});
