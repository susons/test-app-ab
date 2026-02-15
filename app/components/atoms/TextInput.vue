<template>
  <div class="flex flex-col">
    <label
      :for="id"
      class="block min-h-[16px] text-xs font-medium text-brand-blue-dark"
    >
      {{ label }}
    </label>

    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :aria-invalid="hasError ? 'true' : 'false'"
      :aria-describedby="hasError ? `${id}-errors` : undefined"
      :min="min ?? undefined"
      :max="max ?? undefined"
      :class="
        cn(
          'mt-2 w-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-green disabled:opacity-50 disabled:cursor-not-allowed',
          hasError ? 'border-brand-red' : '',
        )
      "
    />
    <p
      v-if="hasError"
      class="mt-1 text-xs space-y-1 text-brand-red border-brand-red"
    >
      {{ fieldErrors[0] }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string;
    id: string;
    errors?: Partial<Record<string, string[]>>;
    name: string;
    min?: number;
    max?: number;
    type?: "text" | "number" | "email" | "tel" | "password";
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
  }>(),
  {
    label: "",
    type: "text",
    placeholder: "",
    required: false,
    disabled: false,
    min: undefined,
    max: undefined,
    errors: () => ({}) as Partial<Record<string, string[]>>,
  },
);

const fieldErrors = computed(() => props.errors?.[props.name] ?? []);
const hasError = computed(() => fieldErrors.value.length > 0);
</script>
