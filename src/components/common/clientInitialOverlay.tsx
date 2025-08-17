"use client";

import dynamic from "next/dynamic";

const WelcomeOverlay = dynamic(
  () => import("./welcomeOverlay"),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-[9999] bg-white lg:w-[calc(100%_-_16rem)] lg:left-64" />
    ),
  }
);

export default function ClientInitialOverlay() {
  return <WelcomeOverlay />;
}