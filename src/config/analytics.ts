export const GA_TRACKING_ID = 'G-KRPJGR09L6';

export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', 'engagement', `${depth}%`);
};

export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', 'engagement', `${seconds}s`);
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

export const trackLinkClick = (linkText: string, linkUrl: string) => {
  trackEvent('link_click', 'engagement', linkText, undefined);
};

export const trackProjectView = (projectName: string) => {
  trackEvent('project_view', 'engagement', projectName);
};

export const trackResumeDownload = () => {
  trackEvent('resume_download', 'engagement', 'resume');
};

export const trackSocialClick = (platform: string) => {
  trackEvent('social_click', 'engagement', platform);
};

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: {
        page_title?: string;
        page_location?: string;
        page_path?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
      }
    ) => void;
  }
}
