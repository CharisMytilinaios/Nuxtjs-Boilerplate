<template>
  <span :class="classnames(defaultClasses, props.class)">
    <slot />
  </span>
</template>

<script setup lang="ts">
import type { HTMLAttributes, ComputedRef } from 'vue';
import { classnames } from '~/utils/classnames';

const props = defineProps<{
  class?: HTMLAttributes['class']
}>();

const defaultClasses: ComputedRef<string> = computed((): string => {
  return 'ml-auto text-xs tracking-widest opacity-60';
});
</script>
