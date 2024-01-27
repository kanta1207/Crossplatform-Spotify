export const getCurrentBreakpoint = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1536) {
    return '2xl';
  } else if (screenWidth >= 1280) {
    return 'xl';
  } else if (screenWidth >= 1024) {
    return 'lg';
  } else if (screenWidth >= 768) {
    return 'md';
  } else {
    return 'sm';
  }
};
