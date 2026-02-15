<template>
  <div>
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
      class="mt-2 w-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-green disabled:opacity-50 disabled:cursor-not-allowed"
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    id: string;
    name: string;
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
  },
);
</script>
