import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import List from "@atoms/List.vue";

const ListItemStub = defineComponent({
  name: "ListItem",
  props: ["label"],
  setup(props) {
    return () => h("li", { "data-label": props.label });
  },
});

describe("List", () => {
  it("renders all help items", () => {
    const wrapper = mount(List, {
      global: { stubs: { ListItem: ListItemStub } },
    });

    const items = wrapper.findAll("li");
    expect(items.length).toBe(5);
  });

  it("passes correct labels", () => {
    const wrapper = mount(List, {
      global: { stubs: { ListItem: ListItemStub } },
    });

    const items = wrapper.findAll("li");
    expect(items.at(0)!.attributes("data-label")).toBe("Get to the aircraft");
    expect(items.at(4)!.attributes("data-label")).toBe(
      "Move around the aircraft cabin if required",
    );
  });
});
