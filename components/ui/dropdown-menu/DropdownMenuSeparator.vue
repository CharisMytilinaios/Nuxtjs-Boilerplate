<template>
  <DropdownMenuSeparator
    v-bind="delegatedProps"
    :class="classnames(defaultClasses, props.class)"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { DropdownMenuSeparator } from 'radix-vue';
import type { DropdownMenuSeparatorProps } from 'radix-vue';
import type { HTMLAttributes, ComputedRef } from 'vue';
import { classnames } from '~/utils/classnames';

const props = defineProps<DropdownMenuSeparatorProps & {
  class?: HTMLAttributes['class']
}>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const defaultClasses: ComputedRef<string> = computed((): string => {
  return '-mx-1 my-1 h-px bg-muted';
});
</script>
