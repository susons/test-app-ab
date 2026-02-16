import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import Select from "@atoms/Select.vue";

const IconStub = defineComponent({
  name: "Icon",
  setup() {
    return () => h("i");
  },
});

describe("Select", () => {
  it("renders label and options", () => {
    const wrapper = mount(Select, {
      props: {
        id: "role",
        name: "role",
        label: "Role",
        options: [
          { label: "Admin", value: "admin" },
          { label: "User", value: "user" },
        ],
      },
      global: { stubs: { Icon: IconStub } },
    });

    expect(wrapper.text()).toContain("Role");
    expect(wrapper.findAll("option").length).toBe(2);
  });

  it("renders error message when errors exist", () => {
    const wrapper = mount(Select, {
      props: {
        id: "role",
        name: "role",
        label: "Role",
        options: [{ label: "Admin", value: "admin" }],
        errors: { role: ["Required"] },
      },
      global: { stubs: { Icon: IconStub } },
    });

    expect(wrapper.text()).toContain("Required");
  });

  it("applies disabled and required", () => {
    const wrapper = mount(Select, {
      props: {
        id: "role",
        name: "role",
        options: [{ label: "Admin", value: "admin" }],
        disabled: true,
        required: true,
      },
      global: { stubs: { Icon: IconStub } },
    });

    const select = wrapper.get("select");
    expect(select.attributes("disabled")).toBeDefined();
    expect(select.attributes("required")).toBeDefined();
  });
});
