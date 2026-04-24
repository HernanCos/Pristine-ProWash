export const GOOGLE_ADS_ID = "AW-17545951539";
export const QUOTE_FORM_SEND_TO = "AW-17545951539/GtctCKr92KEcELPyx65B";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function trackQuoteFormSubmit() {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "conversion", {
    send_to: QUOTE_FORM_SEND_TO,
    value: 10.0,
    currency: "USD",
  });
  if (process.env.NODE_ENV !== "production") {
    console.log("[gtag] quote form conversion fired", QUOTE_FORM_SEND_TO);
  }
}
