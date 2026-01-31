export const loadLottie = async (iconName?: string) => {
  try {
    return await import(`~/public/icons/${iconName}.json`);
  } catch {
    return await import('~/public/icons/source.json');
  }
};
