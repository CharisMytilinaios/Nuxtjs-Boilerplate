<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classnames(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive } from 'radix-vue';
import { buttonVariants } from './button-variants';
import type { PrimitiveProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';
import type { ButtonVariants } from './types';
import { classnames } from '~/utils/classnames';

interface ButtonProps extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  variant: 'default',
  class: '',
  size: 'default'
});
</script>
