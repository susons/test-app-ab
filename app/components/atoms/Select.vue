<template>
  <div class="flex flex-col">
    <label
      :for="id"
      class="block min-h-[16px] text-xs font-medium text-brand-blue-dark"
    >
      {{ label }}
    </label>
    <div class="relative mt-2">
      <select
        :id="id"
        :name="name"
        :required="required"
        :disabled="disabled"
        :class="
          cn(
            'w-full appearance-none border border-slate-200 px-4 py-3 text-sm text-brand-blue-dark outline-none focus:border-brand-green',
            hasError ? 'border-brand-red' : '',
          )
        "
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <span
        class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-blue-dark/50"
      >
        <Icon :name="IconName.caret" class="rotate-90" />
      </span>
    </div>
    <p
      v-if="hasError"
      class="mt-1 text-xs space-y-1 text-brand-red border-brand-red"
    >
      {{ fieldErrors[0] }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { IconName } from "~/types/icons";

const props = withDefaults(
  defineProps<{
    label?: string;
    id: string;
    name: string;
    errors?: Partial<Record<string, string[]>>;
    options: { label: string; value: string }[];
    required?: boolean;
    disabled?: boolean;
  }>(),
  {
    disabled: false,
    required: false,
    errors: () => ({}) as Partial<Record<string, string[]>>,
    label: "",
  },
);

const fieldErrors = computed(() => props.errors?.[props.name] ?? []);
const hasError = computed(() => fieldErrors.value.length > 0);
</script>
