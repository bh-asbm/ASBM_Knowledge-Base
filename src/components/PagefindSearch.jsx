import { useEffect } from "react";

export default function PagefindSearch() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/pagefind/pagefind.js";
    script.onload = () => {
      if (window.pagefindUI) {
        window.pagefindUI({ element: "#search" });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="search"></div>;
}