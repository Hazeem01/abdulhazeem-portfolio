import { useEffect, useRef } from 'react';
import { 
  trackPageView, 
  trackEvent, 
  trackScrollDepth, 
  trackTimeOnPage,
  trackProjectView,
  trackResumeDownload,
  trackSocialClick,
  trackFormSubmission
} from '@/config/analytics';

export const useAnalytics = () => {
  const startTime = useRef<number>(Date.now());
  const maxScrollDepth = useRef<number>(0);

  useEffect(() => {
    trackPageView(window.location.pathname);

    const trackTime = () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(timeSpent);
    };

    const trackScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScrollDepth.current) {
        maxScrollDepth.current = scrollPercent;
        
        if (scrollPercent >= 25 && maxScrollDepth.current < 50) {
          trackScrollDepth(25);
        } else if (scrollPercent >= 50 && maxScrollDepth.current < 75) {
          trackScrollDepth(50);
        } else if (scrollPercent >= 75 && maxScrollDepth.current < 100) {
          trackScrollDepth(75);
        } else if (scrollPercent >= 100) {
          trackScrollDepth(100);
        }
      }
    };

    window.addEventListener('scroll', trackScroll);
    window.addEventListener('beforeunload', trackTime);

    const handleFormSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement;
      const formName = form.getAttribute('data-form-name') || 'contact_form';
      trackFormSubmission(formName);
    };

    document.addEventListener('submit', handleFormSubmit);

    const handleLinkClick = (e: Event) => {
      const link = e.target as HTMLAnchorElement;
      const linkText = link.textContent?.trim() || 'unknown';
      const linkUrl = link.href;
      
      if (linkUrl.includes('resume') || linkUrl.includes('.pdf')) {
        trackResumeDownload();
      }
      
      if (linkUrl.includes('github.com')) {
        trackSocialClick('github');
      } else if (linkUrl.includes('linkedin.com')) {
        trackSocialClick('linkedin');
      } else if (linkUrl.includes('x.com') || linkUrl.includes('twitter.com')) {
        trackSocialClick('twitter');
      } else if (linkUrl.includes('instagram.com')) {
        trackSocialClick('instagram');
      }
      
      trackEvent('link_click', 'engagement', linkText);
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('scroll', trackScroll);
      window.removeEventListener('beforeunload', trackTime);
      document.removeEventListener('submit', handleFormSubmit);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const trackProject = (projectName: string) => {
    trackProjectView(projectName);
  };

  return {
    trackProject,
    trackResumeDownload,
    trackSocialClick,
    trackFormSubmission
  };
};
