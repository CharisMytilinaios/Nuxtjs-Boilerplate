<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="classnames(defaultClasses, props.class)"
  >
    <slot />
    <ChevronRight class="ml-auto h-4 w-4" />
  </DropdownMenuSubTrigger>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { DropdownMenuSubTrigger, useForwardProps } from 'radix-vue';
import { ChevronRight } from 'lucide-vue-next';
import type { DropdownMenuSubTriggerProps } from 'radix-vue';
import type { HTMLAttributes, ComputedRef } from 'vue';
import { classnames } from '~/utils/classnames';

const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const defaultClasses: ComputedRef<string> = computed((): string => {
  return 'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent';
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
