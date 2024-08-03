export const useCapitalize = () => {
  const nuxtApp = useNuxtApp();
  return (str: string): string => {
    return nuxtApp.$capitalize(str);
  };
};
