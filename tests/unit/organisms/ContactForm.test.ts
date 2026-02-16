import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { defineComponent, h } from "vue";
import { z } from "zod";

const toastError = vi.fn();
const toastSuccess = vi.fn();

vi.mock("vue3-toastify", () => {
  const toast = {
    error: toastError,
    success: toastSuccess,
  };

  return {
    toast,
    default: { toast },
  };
});
const safeParseMock = vi.fn();

vi.mock("@/shared/schemas/contact", () => ({
  contactSchema: {
    safeParse: safeParseMock,
  },
}));

const FormDetailsStub = defineComponent({
  name: "FormDetails",
  props: ["title", "label"],
  setup(props) {
    return () => h("div", { "data-title": props.title }, props.label);
  },
});

const TextInputStub = defineComponent({
  name: "TextInput",
  props: [
    "id",
    "name",
    "type",
    "placeholder",
    "required",
    "disabled",
    "min",
    "max",
    "errors",
    "label",
  ],
  setup(props) {
    return () =>
      h("div", [
        h("label", { for: props.id }, props.label ?? ""),
        h("input", {
          id: props.id,
          name: props.name,
          type: props.type ?? "text",
          placeholder: props.placeholder ?? "",
          required: !!props.required,
          disabled: !!props.disabled,
          min: props.min ?? undefined,
          max: props.max ?? undefined,
        }),
      ]);
  },
});

const SelectStub = defineComponent({
  name: "Select",
  props: ["id", "name", "required", "disabled", "errors", "label", "options"],
  setup(props) {
    return () =>
      h("div", [
        h("label", { for: props.id }, props.label ?? ""),
        h(
          "select",
          {
            id: props.id,
            name: props.name,
            required: !!props.required,
            disabled: !!props.disabled,
          },
          (props.options ?? []).map((o: any) =>
            h("option", { value: o.value }, o.label),
          ),
        ),
      ]);
  },
});

const ButtonStub = defineComponent({
  name: "Button",
  props: ["label", "type"],
  setup(props) {
    return () => h("button", { type: props.type ?? "button" }, props.label);
  },
});

describe("Contact form organism", () => {
  beforeEach(() => {
    toastError.mockClear();
    toastSuccess.mockClear();
    safeParseMock.mockReset();
    vi.stubGlobal("$fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("shows validation toast and does not call $fetch when schema fails", async () => {
    safeParseMock.mockReturnValue({
      success: false,
      error: new z.ZodError([
        { code: "custom", path: ["email"], message: "Invalid email" } as any,
      ]),
    });

    const Component = (await import("@organisms/ContactForm.vue")).default;

    const wrapper = await mountSuspended(Component, {
      global: {
        stubs: {
          FormDetails: FormDetailsStub,
          TextInput: TextInputStub,
          Select: SelectStub,
          Button: ButtonStub,
        },
      },
    });

    await wrapper.get('input[name="name"]').setValue("John Doe");
    await wrapper.get('input[name="email"]').setValue("not-an-email");
    await wrapper.get('select[name="phonePrefix"]').setValue("+371");
    await wrapper.get('input[name="phone"]').setValue("1234567");

    await wrapper.get("form").trigger("submit");

    expect(toastError).toHaveBeenCalled();
    expect((globalThis as any).$fetch).not.toHaveBeenCalled();
  });

  it("calls $fetch and shows success toast when schema passes", async () => {
    safeParseMock.mockReturnValue({
      success: true,
      data: {
        name: "John Doe",
        email: "john@doe.com",
        flightNumber: "BT123",
        flightDate: "1",
        flightMonth: "1",
        flightYear: "2026",
        phone: "+3711234567",
      },
    });
    (globalThis as any).$fetch = vi.fn().mockResolvedValue({ ok: true });

    const Component = (await import("@organisms/ContactForm.vue")).default;

    const wrapper = await mountSuspended(Component, {
      global: {
        stubs: {
          FormDetails: FormDetailsStub,
          TextInput: TextInputStub,
          Select: SelectStub,
          Button: ButtonStub,
        },
      },
    });

    await wrapper.get('input[name="name"]').setValue("John Doe");
    await wrapper.get('input[name="email"]').setValue("john@doe.com");
    await wrapper.get('select[name="phonePrefix"]').setValue("+371");
    await wrapper.get('input[name="phone"]').setValue("1234567");

    await wrapper.get('input[name="flightNumber"]').setValue("BT123");
    await wrapper.get('input[name="flightDate"]').setValue("1");
    await wrapper.get('input[name="flightMonth"]').setValue("1");
    await wrapper.get('select[name="flightYear"]').setValue("2026");

    await wrapper.get("form").trigger("submit");

    expect((globalThis as any).$fetch).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({ method: "POST" }),
    );
    expect(toastSuccess).toHaveBeenCalled();
  });
});
