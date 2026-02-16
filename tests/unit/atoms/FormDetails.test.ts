import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import InfoText from "@atoms/FormDetails.vue";

describe("InfoText", () => {
  it("renders title and label", () => {
    const wrapper = mount(InfoText, {
      props: {
        title: "Section Title",
        label: "Some description text",
      },
    });

    expect(wrapper.text()).toContain("Section Title");
    expect(wrapper.text()).toContain("Some description text");
  });
});
