export const getDeviceType = () => {
  const isMac = /(Mac)/i.test(navigator.userAgent);
  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

  const deviceType = isMobile ? 'mobile' : isMac ? 'mac' : undefined;

  return deviceType || 'windows';
};
