"use client";

import dynamic from "next/dynamic";

const WelcomeOverlay = dynamic(
  () => import("./welcomeOverlay"),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-[9999] bg-white" />
    ),
  }
);

export default function ClientInitialOverlay() {
  return <WelcomeOverlay />;
}