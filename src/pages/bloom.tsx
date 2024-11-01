import { useEffect } from "react";
const Bloom = () => {
  useEffect(() => {
    const redirectToApp = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|iphone|ipad/i.test(userAgent);

      if (isMobile) {
        console.log("deep link found --- ");
        // Redirect to app store or deep link based on platform
        window.location.href = "bloom://home"; // Assuming app can handle bloom://home
      }
      // If not mobile, do nothing (keep them on the landing page)
      console.log("NO deep link found --- ");
    };

    redirectToApp();
  }, []);
  return (
    <div>
      {/* <Navbar /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Bloom;
