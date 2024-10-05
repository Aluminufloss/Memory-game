export function getMediaQuery(maxWdith: number): string {
  return `@media (max-width: ${maxWdith}px)`;
}

export const mediaValues = {
  mobile: 480,
  desktop: 720,
  extraDesktop: 940,
  ld: 1090,    
  extraLd: 1435,
}

const media = {
  custom: getMediaQuery,
  desktop: getMediaQuery(mediaValues.desktop),
  extraDesktop: getMediaQuery(mediaValues.extraDesktop),
  ld: getMediaQuery(mediaValues.ld),
  extraLd: getMediaQuery(mediaValues.extraLd),
  mobile: getMediaQuery(mediaValues.mobile)
}

export default media;

export function getIsMobile(): boolean {
  return !window.matchMedia("(max-width: 720px)").matches
}