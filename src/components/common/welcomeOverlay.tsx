"use client";

import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import itomiriLogoShort from "../../../public/itomiri_logo_short.json";

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
        fixed inset-0 z-[1000] flex flex-col gap-2 items-center justify-center bg-white p-2
        w-full h-full cursor-pointer
        transform transition-transform duration-200 ease-out
        ${sliding ? "translate-y-[100%]" : "translate-y-0"}
      `}
      onTransitionEnd={handleTransitionEnd}
      onClick={() => {
        setTimeout(() => {
          handleComplete();
        }, 200)
      }}
    >
      <Player
        autoplay
        loop={false}
        keepLastFrame
        src={itomiriLogoShort}
        onEvent={(event) => {
          if (event === "complete") {
            handleComplete();
          } else if (event === "play") {
            setTimeout(() => {
              handleComplete();
            }, 1500)
          }
        }}
      />
      <div className="absolute bottom-4 text-xl font-bold select-none text-teal-500 animate-pulse">Click to Skip</div>
    </div>
  );
}
