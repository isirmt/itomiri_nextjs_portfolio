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
        transform transition-transform duration-500 ease-in-out
        ${sliding ? "translate-y-full" : "translate-y-0"}
      `}
      onTransitionEnd={handleTransitionEnd}
    >
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
