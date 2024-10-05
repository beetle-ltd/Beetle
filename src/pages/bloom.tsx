import { useEffect } from "react";
import Spotlight from "../components/bloom/spotlight";
import Container from "../containers/bloom/container";
import Hero from "../containers/bloom/hero";
import IdeaPromotion from "../containers/bloom/idea-promotion";
import Offers from "../containers/bloom/offers";
import People from "../containers/bloom/people";
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
      <Container>
        <Hero />
        <IdeaPromotion />
        <Offers />
      </Container>
      <Spotlight />
      <Container>
        <People />
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default Bloom;
