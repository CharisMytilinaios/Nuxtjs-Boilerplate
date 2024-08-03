<template>
  <DropdownMenuLabel
    v-bind="forwardedProps"
    :class="classnames(defaultClasses, inset && 'pl-8', props.class)"
  >
    <slot />
  </DropdownMenuLabel>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { DropdownMenuLabel, useForwardProps } from 'radix-vue';
import type { HTMLAttributes, ComputedRef } from 'vue';
import type { DropdownMenuLabelProps } from 'radix-vue';
import { classnames } from '~/utils/classnames';

const props = defineProps<DropdownMenuLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const defaultClasses: ComputedRef<string> = computed((): string => {
  return 'px-2 py-1.5 text-sm font-semibold';
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
