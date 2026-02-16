import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import SideMenu from "@molecules/SideMenu.vue";

const IconButtonStub = defineComponent({
  name: "IconButton",
  setup() {
    return () => h("div", { class: "icon-button" });
  },
});

const SideBarItemStub = defineComponent({
  name: "SideBarItem",
  props: ["to", "label"],
  setup(props) {
    return () => h("a", { "data-to": props.to }, props.label);
  },
});

describe("SideMenu", () => {
  it("shows overlay when open", () => {
    const wrapper = mount(SideMenu, {
      props: { open: true, toggleOpen: vi.fn() },
      global: {
        stubs: { IconButton: IconButtonStub, SideBarItem: SideBarItemStub },
      },
    });

    expect(wrapper.find(".fixed.inset-0").exists()).toBe(true);
  });

  it("hides overlay when closed", () => {
    const wrapper = mount(SideMenu, {
      props: { open: false, toggleOpen: vi.fn() },
      global: {
        stubs: { IconButton: IconButtonStub, SideBarItem: SideBarItemStub },
      },
    });

    const overlay = wrapper.get(".fixed.inset-0");
    expect(overlay.attributes("style")).toContain("display: none");
  });

  it("calls toggleOpen when overlay clicked", async () => {
    const toggleOpen = vi.fn();

    const wrapper = mount(SideMenu, {
      props: { open: true, toggleOpen },
      global: {
        stubs: { IconButton: IconButtonStub, SideBarItem: SideBarItemStub },
      },
    });

    await wrapper.find(".fixed.inset-0").trigger("click");
    expect(toggleOpen).toHaveBeenCalled();
  });

  it("calls toggleOpen when close button clicked", async () => {
    const toggleOpen = vi.fn();

    const wrapper = mount(SideMenu, {
      props: { open: true, toggleOpen },
      global: {
        stubs: { IconButton: IconButtonStub, SideBarItem: SideBarItemStub },
      },
    });

    await wrapper.find("button").trigger("click");
    expect(toggleOpen).toHaveBeenCalled();
  });

  it("renders correct number of sidebar items", () => {
    const wrapper = mount(SideMenu, {
      props: { open: true, toggleOpen: vi.fn() },
      global: {
        stubs: { IconButton: IconButtonStub, SideBarItem: SideBarItemStub },
      },
    });

    const links = wrapper.findAll("a");
    expect(links.length).toBe(7);
  });
});
