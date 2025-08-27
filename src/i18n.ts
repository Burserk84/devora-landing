export const getMessages = async (locale: string) => {
  return (await import(`../messages/${locale}.json`)).default;
};
