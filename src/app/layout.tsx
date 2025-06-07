import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { zenKakuGothic } from "@/libs/fonts";
import FallingStars from "@/components/fallingStars";
import { NavStatusProvider, NavigationProgress } from "@/components/common/navigationProgress";

export const metadata: Metadata = {
  title: "井筒ミリ",
  description: "Welcome to Ito Miri's portal website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={zenKakuGothic.className}>
      <body className="flex flex-col min-h-screen">
        <FallingStars />
        <NavStatusProvider>
          <NavigationProgress />
          <Header />
          {children}
          <Footer />
        </NavStatusProvider>
      </body>
    </html>
  );
}
