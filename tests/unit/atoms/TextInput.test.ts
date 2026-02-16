import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TextInput from "@atoms/TextInput.vue";

describe("TextInput", () => {
  it("renders label", () => {
    const wrapper = mount(TextInput, {
      props: {
        id: "email",
        name: "email",
        label: "Email",
      },
    });

    expect(wrapper.text()).toContain("Email");
  });

  it("renders input with correct attributes", () => {
    const wrapper = mount(TextInput, {
      props: {
        id: "age",
        name: "age",
        type: "number",
        min: 1,
        max: 10,
        required: true,
        disabled: true,
      },
    });

    const input = wrapper.get("input");

    expect(input.attributes("type")).toBe("number");
    expect(input.attributes("min")).toBe("1");
    expect(input.attributes("max")).toBe("10");
    expect(input.attributes("required")).toBeDefined();
    expect(input.attributes("disabled")).toBeDefined();
  });

  it("shows error message when errors exist", () => {
    const wrapper = mount(TextInput, {
      props: {
        id: "email",
        name: "email",
        errors: { email: ["Invalid email"] },
      },
    });

    expect(wrapper.text()).toContain("Invalid email");
    expect(wrapper.get("input").attributes("aria-invalid")).toBe("true");
  });

  it("does not show error when no errors", () => {
    const wrapper = mount(TextInput, {
      props: {
        id: "email",
        name: "email",
      },
    });

    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.get("input").attributes("aria-invalid")).toBe("false");
  });
});
