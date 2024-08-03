export default defineI18nLocale(async (_locale) => {
  return {
    components: {
      themeSwitcher: {
        title: 'toggle theme',
        dark: 'dark',
        light: 'light',
        system: 'system'
      }
    },
    layouts: {
    },
    pages: {
    },
    utils: {
    }
  };
});
