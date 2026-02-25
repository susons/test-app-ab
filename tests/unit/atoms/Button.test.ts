import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "@atoms/Button.vue";

describe("Button", () => {
  it("renders label", () => {
    const wrapper = mount(Button, {
      props: { label: "Click me" },
    });

    expect(wrapper.text()).toContain("Click me");
  });

  it("applies disabled state", () => {
    const wrapper = mount(Button, {
      props: { label: "Click me", disabled: true },
    });

    const button = wrapper.get("button");
    expect(button.attributes("disabled")).toBeDefined();
  });

  it("applies variant class", () => {
    const wrapper = mount(Button, {
      props: { label: "Click me", variant: "filled" },
    });

    expect(wrapper.get("button").classes().join(" ")).toContain(
      "bg-brand-primary-hover",
    );
  });

  it("renders slot instead of label", () => {
    const wrapper = mount(Button, {
      props: { label: "Fallback" },
      slots: {
        default: "Slot content",
      },
    });

    expect(wrapper.text()).toContain("Slot content");
    expect(wrapper.text()).not.toContain("Fallback");
  });
});
