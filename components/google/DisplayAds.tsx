"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const DisplayAds = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    // window.onload = function () {
    //   (window.adsbygoogle = window.adsbygoogle || []).push({});
    // };
  }, []);

  return (
    <div className="googleAd-container w-full flex">
      <ins
        className="adsbygoogle"
        style={{ display: "block " }}
        data-ad-client="ca-pub-2999632223537453"
        data-ad-slot="7897348490"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default DisplayAds;
