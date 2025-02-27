"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const InFeedAds = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="googleAd-container w-full h-48">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-70+ep+p-5t+9k"
        data-ad-client="ca-pub-2999632223537453"
        data-ad-slot="7795344515"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default InFeedAds;
