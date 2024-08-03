import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('capitalize', <T>(str: string | T): string => {
    if ('string' !== typeof str) return '';
    return str.replace(/\b\w/g, (char) => {
      return char.toUpperCase();
    });
  });
});
