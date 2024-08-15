import { useEffect, useState } from "react";
import ScrollButtonTop from "./ScrollButtonTop";

function ScrollButton() {
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollTop && <ScrollButtonTop />;
}

export default ScrollButton;
