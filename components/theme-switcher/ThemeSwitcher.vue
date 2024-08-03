<template>
  <BaseDropdownMenu>
    <BaseDropdownMenuTrigger as-child>
      <BaseButton variant="outline">
        <Icon
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          icon="radix-icons:moon"
        />
        <Icon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          icon="radix-icons:sun"
        />
        <span class="sr-only">
          {{ $t('components.themeSwitcher.title') }}
        </span>
      </BaseButton>
    </BaseDropdownMenuTrigger>
    <BaseDropdownMenuContent align="end">
      <BaseDropdownMenuItem @click="colorMode.preference = 'light'">
        {{ $t('components.themeSwitcher.light') }}
      </BaseDropdownMenuItem>
      <BaseDropdownMenuItem @click="colorMode.preference = 'dark'">
        {{ $t('components.themeSwitcher.dark') }}
      </BaseDropdownMenuItem>
      <BaseDropdownMenuItem @click="colorMode.preference = 'system'">
        {{ $t('components.themeSwitcher.system') }}
      </BaseDropdownMenuItem>
    </BaseDropdownMenuContent>
  </BaseDropdownMenu>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const colorMode = useColorMode();
</script>
