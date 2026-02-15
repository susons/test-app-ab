<template>
  <div class="rounded-md bg-sidebar-background mt-10">
    <form @submit.prevent="handleSubmit">
      <div
        class="grid grid-cols-1 gap-10 px-10 py-10 sm:grid-cols-[minmax(100px,140px)_1fr] lg:grid-cols-[260px_1fr]"
      >
        <FormDetails
          title="Contact details"
          label="Something also goes here, so it doesn't look that lonely down here"
        />

        <div class="max-w-lg space-y-5">
          <TextInput
            id="name"
            name="name"
            label="Name, surname"
            type="text"
            :errors="errors"
            required
          />
          <TextInput
            id="email"
            name="email"
            label="E-mail"
            type="email"
            :errors="errors"
            required
          />
          <div class="grid grid-cols-[1fr_2fr] gap-4">
            <Select
              id="phonePrefix"
              name="phonePrefix"
              label="Phone prefix"
              :errors="errors"
              :options="[
                { label: '+371', value: '+371' },
                { label: '+372', value: '+372' },
              ]"
            />
            <TextInput
              id="phone"
              name="phone"
              label="Phone number"
              type="tel"
              :errors="errors"
              required
            />
          </div>
        </div>
      </div>

      <div class="h-px w-full bg-sidebar-divider" />

      <div
        class="grid grid-cols-1 gap-10 px-10 py-10 sm:grid-cols-[minmax(100px,140px)_1fr] lg:grid-cols-[260px_1fr]"
      >
        <FormDetails
          title="Select flight"
          label="Suspendisse elementum turpis ut volutpat ultricies. Mauris eget nisl diam. In vel felis in metus vulputate imperdiet vestibulum at dolor."
        />

        <div class="max-w-lg space-y-5">
          <TextInput
            id="flightNumber"
            name="flightNumber"
            label="Flight number"
            type="text"
            :errors="errors"
            required
          />
          <div>
            <div
              class="grid grid-cols-[3fr_3fr_5fr] gap-4 md:grid-cols-2 lg:grid-cols-[3fr_3fr_5fr_1fr]"
            >
              <TextInput
                id="flightDate"
                name="flightDate"
                label="Flight date"
                type="number"
                placeholder="DD"
                :errors="errors"
                :min="1"
                :max="31"
                required
              />
              <TextInput
                id="flightMonth"
                name="flightMonth"
                type="number"
                :errors="errors"
                required
                placeholder="MM"
                :min="1"
                :max="12"
              />
              <Select
                id="flightYear"
                name="flightYear"
                :errors="errors"
                :options="[
                  { label: '2026', value: '2026' },
                  { label: '2025', value: '2025' },
                  { label: '2024', value: '2024' },
                  { label: '2023', value: '2023' },
                ]"
              />
              <div />
            </div>
            <div class="mt-2 text-sm text-brand-blue-dark/60">
              For example: <span class="font-medium">30 8 1972</span>
            </div>
          </div>

          <div class="pt-2 flex items-center gap-4 lg:gap-8">
            <Button label="Add flight" variant="outline" />
            <Button label="Delete flight" variant="ghost" />
          </div>
        </div>
      </div>

      <div class="h-px w-full bg-sidebar-divider" />

      <div
        class="grid grid-cols-1 gap-6 px-10 py-10 sm:grid-cols-[minmax(100px,140px)_1fr] lg:grid-cols-[260px_1fr]"
      >
        <p class="text-sm leading-5 text-brand-blue-dark/60 max-w-sm">
          By submitting this form you agree to airBaltic’s
          <a href="#" class="underline text-brand-blue-dark">Privacy Policy</a>
        </p>
        <div class="w-full sm:justify-self-start sm:w-auto">
          <Button
            label="Confirm"
            variant="filled"
            size="lg"
            class="w-full sm:w-auto"
            type="submit"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FetchError } from "ofetch";
import { contactSchema } from "@/shared/schemas/contact";
import { toast } from "vue3-toastify";

const errors = ref<Record<string, string[]>>({});

const handleSubmit = async (event: SubmitEvent) => {
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const { phonePrefix, phone, ...rest } = data;

  const parsed = contactSchema.safeParse({
    ...rest,
    phone: `${phonePrefix}${phone}`,
  });

  if (!parsed.success) {
    toast.error(
      "Form validation failed, please recheck the provided information!",
    );

    const flat = z.flattenError(parsed.error);
    errors.value = {
      ...flat.fieldErrors,
      ...(flat.fieldErrors?.["phone"]
        ? { phonePrefix: flat.fieldErrors?.["phone"] }
        : {}),
    };

    return;
  }

  errors.value = {};

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: parsed.data ?? "",
    });

    toast.success("Form submitted successfully 🎉");
  } catch (err: unknown) {
    if (err && typeof err === "object" && "status" in err && "data" in err) {
      const fetchErr = err as FetchError;

      if (fetchErr.status === 400 && fetchErr.data) {
        errors.value = fetchErr.data.errors ?? {};

        toast.error(
          "Form validation failed, please recheck the provided information!",
        );

        return;
      }
    }

    toast.error(
      "Something went wrong, please recheck the form or contact support!",
    );
    errors.value = { _form: ["Something went wrong"] };
  }
};
</script>
