const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

const pageView = (url: string): void => {
  if (!GA_TRACKING_ID) return;
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

interface EventParams {
  eventName: Gtag.EventNames | string;
  params: Gtag.ControlParams | Gtag.EventParams | Gtag.ConfigParams | Gtag.CustomParams;
}

const event = ({ eventName, params }: EventParams): void => {
  if (!GA_TRACKING_ID) return;

  window.gtag('event', eventName, params);
};

export const ga = {
  pageView,
  event,
  GA_TRACKING_ID,
};
