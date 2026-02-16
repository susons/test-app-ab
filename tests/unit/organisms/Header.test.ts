import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import Header from "@organisms/Header.vue";

const LogoStub = defineComponent({
  name: "Logo",
  setup() {
    return () => h("div", { "data-logo": "1" });
  },
});

const IconStub = defineComponent({
  name: "Icon",
  props: ["name", "size"],
  setup() {
    return () => h("i");
  },
});

const HeaderControlStub = defineComponent({
  name: "HeaderControl",
  setup() {
    return () => h("div", { "data-header-control": "1" });
  },
});

const HeaderNavStub = defineComponent({
  name: "HeaderNav",
  setup() {
    return () => h("nav", { "data-header-nav": "1" });
  },
});

const SideMenuStub = defineComponent({
  name: "SideMenu",
  props: {
    open: { type: Boolean, required: true },
    toggleOpen: { type: Function, required: true },
  },
  setup(props) {
    return () => h("div", { "data-side-menu-open": String(props.open) });
  },
});

describe("Header", () => {
  it("toggles SideMenu open prop when burger button is clicked", async () => {
    const wrapper = mount(Header, {
      global: {
        stubs: {
          Teleport: true,
          Logo: LogoStub,
          Icon: IconStub,
          HeaderControl: HeaderControlStub,
          HeaderNav: HeaderNavStub,
          SideMenu: SideMenuStub,
        },
      },
    });

    expect(
      wrapper.get("[data-side-menu-open]").attributes("data-side-menu-open"),
    ).toBe("false");

    await wrapper.get('button[aria-label="Open menu"]').trigger("click");

    expect(
      wrapper.get("[data-side-menu-open]").attributes("data-side-menu-open"),
    ).toBe("true");

    await wrapper.get('button[aria-label="Open menu"]').trigger("click");

    expect(
      wrapper.get("[data-side-menu-open]").attributes("data-side-menu-open"),
    ).toBe("false");
  });
});
