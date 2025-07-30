export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
};

export const initEmailJS = () => {
  if (typeof window !== "undefined") {
    const { PUBLIC_KEY } = EMAILJS_CONFIG;
    if (PUBLIC_KEY && PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
      import("@emailjs/browser").then((emailjs) => {
        emailjs.default.init(PUBLIC_KEY);
      });
    }
  }
}; 