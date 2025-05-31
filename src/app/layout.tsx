import { Zen_Kaku_Gothic_Antique } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

// 既定のフォント
const zenKakuGothic = Zen_Kaku_Gothic_Antique({
  weight: ["400", "700"],
  subsets: ["latin"],
});

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
