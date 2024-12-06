import Navigation from "./Navigation";
import Footer from "./Footer";
import React, { useEffect } from "react";

const Layout = ({ children, user, onComplete, loading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // Call onComplete function after 5 seconds (or video duration)
    }, 3000); // Adjust the duration based on your video length or desired loading time

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="__layout">
      {!loading && <Navigation user={user} />}
      <main className="page">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
