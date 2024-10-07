import ReactGA from "react-ga4";

const TRACKING_ID = "G-DVQGP1631E";

export const initAnalytics = () => {
  if (import.meta.env.MODE !== "development") {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview");
  }
};
