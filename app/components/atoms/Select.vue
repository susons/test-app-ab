<template>
  <div>
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
        class="w-full appearance-none border border-slate-200 px-4 py-3 text-sm text-brand-blue-dark outline-none focus:border-brand-green"
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
        ▾
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    id: string;
    name: string;
    options: { label: string; value: string }[];
    required?: boolean;
    disabled?: boolean;
  }>(),
  {
    disabled: false,
    required: false,
    label: "",
  },
);
</script>
