<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent/10 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
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
    variant?: "outline" | "ghost" | "filled" | "filledAccent";
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
    "border border-brand-primary text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary-hover hover:text-brand-primary-hover",

  ghost:
    "border border-transparent text-brand-primary-dark hover:bg-brand-primary/10",

  filled:
    "bg-brand-primary text-brand-white border border-brand-primary hover:bg-brand-primary-hover",

  filledAccent:
    "bg-brand-accent text-brand-white border border-brand-accent hover:bg-brand-accent-hover",
} as const;
</script>
