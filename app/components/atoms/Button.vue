<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'rounded-md py-2 font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
      variantClasses[variant],
      sizeClasses[size],
    ]"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    type?: "button" | "submit" | "reset";
    variant?: "outline" | "ghost" | "filled";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
  }>(),
  {
    type: "button",
    variant: "outline",
    size: "md",
    disabled: false,
  },
);

const sizeClasses = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-2 text-sm",
  lg: "px-12 py-3 text-base",
} as const;

const variantClasses = {
  outline:
    "border border-brand-blue-ui text-brand-blue-ui hover:bg-brand-blue-ui/5 hover:border-brand-blue-ui hover:text-brand-blue-ui",
  ghost:
    "border border-transparent text-brand-blue-dark hover:bg-brand-blue-dark/5",
  filled: "bg-brand-blue-ui text-white border border-ui hover:opacity-90",
} as const;
</script>
