import { useEffect } from "react";

export default function PagefindSearch() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/pagefind/pagefind.js";
    script.async = true;
    
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
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div id="search"></div>;
}