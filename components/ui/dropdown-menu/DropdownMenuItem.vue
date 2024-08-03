<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    :class="classnames(defaultClasses, inset && 'pl-8', props.class)"
  >
    <slot />
  </DropdownMenuItem>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { DropdownMenuItem, useForwardProps } from 'radix-vue';
import type { HTMLAttributes, ComputedRef } from 'vue';
import type { DropdownMenuItemProps } from 'radix-vue';
import { classnames } from '~/utils/classnames';

const props = defineProps<DropdownMenuItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const defaultClasses: ComputedRef<string> = computed((): string => {
  return 'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50';
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
