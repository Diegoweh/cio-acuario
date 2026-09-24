// Meta (Facebook) Pixel.
export const FB_PIXEL_ID = '812080418915056';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (
  event: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, params);
  }
};
