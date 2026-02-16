import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { defineComponent, h } from "vue";
import AssistancePage from "@pages/assistance.vue";

const NuxtLinkStub = defineComponent({
  name: "NuxtLink",
  props: ["to"],
  setup(props, { slots }) {
    return () => h("a", { "data-to": props.to }, slots.default?.());
  },
});

const ListStub = defineComponent({
  name: "List",
  setup() {
    return () => h("div", { "data-list": "1" });
  },
});

const NotificationStub = defineComponent({
  name: "Notification",
  props: ["label", "type"],
  setup(props) {
    return () =>
      h("div", { "data-notification": props.type ?? "info" }, props.label);
  },
});

const ContactFormStub = defineComponent({
  name: "ContactForm",
  setup() {
    return () => h("div", { "data-contact-form": "1" });
  },
});

describe("assistance page", () => {
  it("renders main content and components", async () => {
    const wrapper = await mountSuspended(AssistancePage, {
      global: {
        stubs: {
          NuxtLink: NuxtLinkStub,
          List: ListStub,
          Notification: NotificationStub,
          ContactForm: ContactFormStub,
        },
      },
    });

    expect(wrapper.text()).toContain("Request assistance from us");

    expect(wrapper.find('a[data-to="/contact"]').exists()).toBe(true);
    expect(wrapper.find('[data-list="1"]').exists()).toBe(true);
    expect(wrapper.find('[data-contact-form="1"]').exists()).toBe(true);

    const notes = wrapper.findAll("[data-notification]");
    expect(notes.length).toBe(2);
  });
});
