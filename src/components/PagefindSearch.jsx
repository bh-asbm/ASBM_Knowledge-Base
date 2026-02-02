import { useEffect } from "react";

export default function PagefindSearch() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/pagefind/pagefind.js";
    script.type = "text/javascript";
    script.async = true;
    script.crossOrigin = "anonymous";
    
    script.onload = () => {
      if (window.pagefindUI) {
        window.pagefindUI({ element: "#search" });
      }
    };
    
    script.onerror = () => {
      console.error("Failed to load Pagefind script");
    };
    
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="search"></div>;
}