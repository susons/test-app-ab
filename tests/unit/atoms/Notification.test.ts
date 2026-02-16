import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Notification from "@atoms/Notification.vue";

describe("Notification", () => {
  it("renders label", () => {
    const wrapper = mount(Notification, {
      props: { label: "Message" },
    });

    expect(wrapper.text()).toContain("Message");
  });

  it("uses info type by default", () => {
    const wrapper = mount(Notification, {
      props: { label: "Message" },
    });

    expect(wrapper.classes().join(" ")).toContain("bg-info-info");
  });

  it("applies warning type class", () => {
    const wrapper = mount(Notification, {
      props: { label: "Message", type: "warning" },
    });

    expect(wrapper.classes().join(" ")).toContain("bg-info-warning");
  });
});
