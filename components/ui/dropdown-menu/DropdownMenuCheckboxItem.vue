<template>
  <DropdownMenuCheckboxItem
    v-bind="forwarded"
    :class="classnames(defaultClasses, props.class)"
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <Check class="w-4 h-4" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuCheckboxItem>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuItemIndicator,
  useForwardPropsEmits,
} from 'radix-vue';
import { Check } from 'lucide-vue-next';
import type { HTMLAttributes, ComputedRef } from 'vue';
import type { DropdownMenuCheckboxItemEmits, DropdownMenuCheckboxItemProps } from 'radix-vue';
import { classnames } from '~/utils/classnames';

const props = defineProps<DropdownMenuCheckboxItemProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<DropdownMenuCheckboxItemEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const defaultClasses: ComputedRef<string> = computed((): string => {
  return 'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50';
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>
