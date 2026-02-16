import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ListItem from "@atoms/ListItem.vue";

describe("ListItem", () => {
  it("renders label", () => {
    const wrapper = mount(ListItem, {
      props: { label: "Item text" },
    });

    expect(wrapper.text()).toContain("Item text");
  });

  it("renders li element", () => {
    const wrapper = mount(ListItem, {
      props: { label: "Item text" },
    });

    expect(wrapper.find("li").exists()).toBe(true);
  });
});
