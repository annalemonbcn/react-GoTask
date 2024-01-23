import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobileScreen;
};

export default useIsMobile