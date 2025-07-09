"use client";

import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import itomiriLogo from "../../../public/itomiri_logo.json";

export default function WelcomeOverlay() {
  const [visible, setVisible] = useState(true);
  const [sliding, setSliding] = useState(false);

  const handleComplete = () => {
    setSliding(true);
  };

  const handleTransitionEnd = () => {
    if (sliding) setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[1000] flex items-center justify-center bg-white p-2
        w-full h-full
        transform transition-transform duration-500 ease-in-out delay-100
        ${sliding ? "translate-y-[200%]" : "translate-y-0"}
      `}
      onTransitionEnd={handleTransitionEnd}
    >
      <svg className={`${sliding ? "bottom-[0%]" : "bottom-full"} absolute left-0 z-[1010] transform transition-all duration-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2056.17 103.47">
        <polygon className="fill-teal-400" points="2056.17 56.76 1028.09 103.47 0 56.76 0 0 1028.09 46.7 2056.17 0 2056.17 56.76" />
      </svg>
      <svg className={`bottom-full absolute left-0 z-[1010] transform transition-all duration-200`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2056.17 103.47">
        <polygon className="fill-teal-400" points="2056.17 56.76 1028.09 103.47 0 56.76 0 0 1028.09 46.7 2056.17 0 2056.17 56.76" />
      </svg>
      <Player
        autoplay
        loop={false}
        src={itomiriLogo}
        onEvent={(event) => {
          if (event === "complete") {
            handleComplete();
          }
        }}
      />
    </div>
  );
}
