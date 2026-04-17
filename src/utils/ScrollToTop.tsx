// src/utils/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  // CSS selector for the scrollable container. Default is '#main-content'
  selector?: string;
  // 'auto' or 'smooth'
  behavior?: ScrollBehavior;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  selector = "#main-content",
  behavior = "auto",
}) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // First try the container you control (main area)
    const container = document.querySelector(selector) as HTMLElement | null;

    if (container) {
      // scroll the container to top
      container.scrollTo({ top: 0, left: 0, behavior });
      // Also reset any inner element scroll (defensive)
      container.scrollTop = 0;
    } else {
      // fallback to window (when no special container)
      window.scrollTo({ top: 0, left: 0, behavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    // include hash so linking to anchors also triggers this when needed
  }, [pathname, hash, selector, behavior]);

  return null;
};

export default ScrollToTop;
