import { Zen_Kaku_Gothic_Antique } from "next/font/google";
import localFont from "next/font/local";

// 既定のフォント
export const zenKakuGothic = Zen_Kaku_Gothic_Antique({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const lineSeed = localFont({
  src: '../../public/LINESeedJP_OTF_Bd.woff2'
})