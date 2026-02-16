import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Icon from "@atoms/Icon.vue";
import type { IconName } from "@definitions/icons";

describe("Icon", () => {
  it("renders image when icon exists", async () => {
    const wrapper = await mountSuspended(Icon, {
      props: { name: "search" as IconName },
    });

    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("does not render when icon missing", async () => {
    const wrapper = await mountSuspended(Icon, {
      props: { name: "not-existing" as IconName },
    });

    expect(wrapper.find("img").exists()).toBe(false);
  });

  it("applies size", async () => {
    const wrapper = await mountSuspended(Icon, {
      props: { name: "search" as IconName, size: 32 },
    });

    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("width")).toBe("32");
    expect(img.attributes("height")).toBe("32");
  });
});
