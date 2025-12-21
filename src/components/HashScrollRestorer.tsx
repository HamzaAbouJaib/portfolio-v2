import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const HashScrollRestorer: React.FC = () => {
  const { pathname } = useLocation();
  const positions = useRef<Map<string, number>>(new Map());

  // Save scroll position on route change
  useEffect(() => {
    const handleBeforeUnload = () => {
      positions.current.set(pathname, window.scrollY);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      positions.current.set(pathname, window.scrollY);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]);

  // Restore scroll after route changes
  useEffect(() => {
    // wait for page to render
    const timeout = setTimeout(() => {
      const scrollY = positions.current.get(pathname) ?? 0;
      window.scrollTo(0, scrollY);
    }, 0);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default HashScrollRestorer;
