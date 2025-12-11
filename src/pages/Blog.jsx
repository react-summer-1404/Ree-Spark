import React, { useEffect, useState } from "react";
import { BlogHeroSection } from "../components/blog/BlogHeroSection";
import { BlogBody } from "../components/blog/BlogBody";
import { WelcomeScreen } from "../components/wellcome/WelcomeScreen";
import { AnimatePresence } from "framer-motion";

const Blog = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const navType = performance.getEntriesByType("navigation")[0].type;

    if (navType === "reload") {
      setShowWelcome(true);

      setTimeout(() => setShowWelcome(false), 2000);
    }
  }, []);
  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen
            wellcomeMessage={"صفحه بلاگ ها"}
            onFinish={() => setShowWelcome(false)}
          />
        )}
      </AnimatePresence>
      <div className="h-[2070px] sm:h-[1700px] overflow-hidden">
        <BlogHeroSection />
        <BlogBody />
      </div>
    </>
  );
};

export { Blog };
