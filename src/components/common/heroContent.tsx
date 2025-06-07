'use client';

import { lineSeed } from "@/libs/fonts";
import { WorksContent } from "@/libs/interface/cmsObject";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroContent({ latestWork }: { latestWork?: WorksContent }) {
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    if (stage != 0) return;
    setTimeout(() => {
      setStage(1);

      setTimeout(() => {
        setStage(2);

        setTimeout(() => {
          setStage(3);

          setTimeout(() => {
            setStage(4);

            setTimeout(() => {
              setStage(0);
            }, 500)
          }, 4000)
        }, 3000)
      }, 200)
    }, 3500)
  }, [stage])

  return <div className={`max-h-[calc(100svh_-_4rem)] mx-auto aspect-video relative select-none ${stage >= 4 ? "overflow-hidden" : "overflow-visible"}`}>
    <div className={`${stage == 3 ? "hidden" : "block"} ${stage == 4 ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"} duration-700 ease-out transition-all absolute top-0 left-0 size-full flex items-center justify-center p-4 flex-col gap-[5%]`}>
      <svg className="lg:w-[80%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1703.96 232.17">
        <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="5.67" y1="5.92" x2="170.29" y2="5.92" />
        <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="87.98" y1="5.92" x2="87.98" y2="207.92" />
        <line className="fill-none stroke-rose-500 stroke-[8.5px] [stroke-linecap:round] [stroke-linejoin:round]" x1="5.67" y1="209.92" x2="170.67" y2="209.92" />
        <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1533.67" y1="5.92" x2="1698.29" y2="5.92" />
        <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1615.98" y1="5.92" x2="1615.98" y2="207.92" />
        <line className="fill-none stroke-rose-500 stroke-[8.5px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1533.67" y1="209.92" x2="1698.67" y2="209.92" />
        <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1047.67" y1="5.92" x2="1212.29" y2="5.92" />
        <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1129.98" y1="5.92" x2="1129.98" y2="207.92" />
        <line className="fill-none stroke-rose-500 stroke-[8.5px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1047.67" y1="209.92" x2="1212.67" y2="209.92" />
        <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="240.67" y1="5.92" x2="400.85" y2="5.92" />
        <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="320.76" y1="5.92" x2="320.76" y2="207.92" />
        <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1049.67" y1="5.92" x2="1209.85" y2="5.92" />
        <circle className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" cx="586.43" cy="106.67" r="101" />
        <polyline className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" points="795.67 207.92 795.67 5.92 877.98 157.92 959.67 5.92 960.67 207.92" />
        <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1294.67" y1="5.92" x2="1294.67" y2="207.92" />
        <path className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" d="M1399.67,5.92c32.31,0,60,26.61,60,59.12s-26.19,58.87-58.5,58.87" />
        <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1401.17" y1="123.92" x2="1294.67" y2="123.92" />
        <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1400.17" y1="5.92" x2="1294.17" y2="5.92" />
        <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1459.67" y1="207.92" x2="1376.33" y2="124.58" />
        <path className="fill-rose-500" d="M630.68,105.26l-38.84-35.77c-1.23-1.13-3.21-.26-3.21,1.41v12.71c0,1.06-.86,1.91-1.91,1.91h-33.24c-1.06,0-1.91.86-1.91,1.91v38.47c0,1.06.86,1.91,1.91,1.91h33.24c1.06,0,1.91.86,1.91,1.91v12.71c0,1.67,1.98,2.54,3.21,1.41l38.84-35.77c.82-.76.82-2.06,0-2.81Z" />
      </svg>
    </div>
    <div className={`${stage >= 3 ? "block" : "hidden"} ${stage >= 4 ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"} duration-500 transition-all flex size-full absolute top-0 left-0 overflow-hidden`}>
      <div className={`${lineSeed.className} w-1/2 px-3 gap-2 flex items-start justify-center h-auto flex-col text-[calc(min(calc((100svh_-_4rem)_*_16_/_9),calc(100vw_-_2rem))_/_2_/_6_*_0.5)]  tracking-wider`}>
        <div className="py-2 px-4 bg-rose-500 text-white text-center">LATEST</div>
        <div className="text-rose-800">{latestWork?.title}</div>
      </div>
      <div className="flex-1 flex items-center">
        {latestWork && (
          <Link
            href={`/works/${latestWork.id}`}
            className="flex size-full relative pointer-events-none group"
          >
            <Image
              alt={`hero-${latestWork.id}-thumbnail`}
              src={latestWork.meta.thumbnail.url}
              fill
              priority
              className="object-contain pointer-events-auto group-hover:opacity-60 transition-opacity"
            />
          </Link>
        )}
      </div>
    </div>
    <div className={`absolute size-full flex top-0 left-0 ${stage >= 1 ? "block" : "hidden"} ${lineSeed.className} ${stage >= 3 && "pointer-events-none"}`}>
      <div className={`h-full size-1/6 relative  [perspective:500px]`}>
        <div className={`${stage == 2 && "[transition-timing-function:cubic-bezier(.02,1.61,.7,1.36)]"} delay-[0ms] w-full h-full transform transition-transform duration-500 [transform-style:preserve-3d] ${stage == 2 ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}  relative`}>
          <div className="absolute inset-0 bg-rose-500 flex items-center justify-center [transform:rotateY(-180deg)] [backface-visibility:hidden] size-full text-white text-[calc(min(calc((100svh_-_4rem)_*_16_/_9),calc(100vw_-_2rem))_/_6_*_0.5)] font-bold rounded-s-xl">
            ツ
          </div>
        </div>
      </div>
      <div className={`h-full size-1/6 relative  [perspective:500px]`}>
        <div className={`${stage == 2 && "[transition-timing-function:cubic-bezier(.02,1.61,.7,1.36)]"} delay-[100ms] w-full h-full transform transition-transform duration-500 [transform-style:preserve-3d] ${stage == 2 ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}  relative`}>
          <div className="absolute inset-0 bg-rose-500 flex items-center justify-center [transform:rotateY(-180deg)] [backface-visibility:hidden] size-full text-white text-[calc(min(calc((100svh_-_4rem)_*_16_/_9),calc(100vw_-_2rem))_/_6_*_0.5)] font-bold">
            ク
          </div>
        </div>
      </div>
      <div className={`h-full size-1/6 relative  [perspective:500px]`}>
        <div className={`${stage == 2 && "[transition-timing-function:cubic-bezier(.02,1.61,.7,1.36)]"} delay-[200ms] w-full h-full transform transition-transform duration-500 [transform-style:preserve-3d] ${stage == 2 ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}  relative`}>
          <div className="absolute inset-0 bg-rose-500 flex items-center justify-center [transform:rotateY(-180deg)] [backface-visibility:hidden] size-full text-white text-[calc(min(calc((100svh_-_4rem)_*_16_/_9),calc(100vw_-_2rem))_/_6_*_0.5)] font-bold">
            ル
          </div>
        </div>
      </div>
      <div className={`h-full size-1/6 relative  [perspective:500px]`}>
        <div className={`${stage == 2 && "[transition-timing-function:cubic-bezier(.02,1.61,.7,1.36)]"} delay-[300ms] w-full h-full transform transition-transform duration-500 [transform-style:preserve-3d] ${stage == 2 ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}  relative`}>
          <div className="absolute inset-0 bg-rose-500 flex items-center justify-center [transform:rotateY(-180deg)] [backface-visibility:hidden] size-full text-white text-[calc(min(calc((100svh_-_4rem)_*_16_/_9),calc(100vw_-_2rem))_/_6_*_0.5)] font-bold">
            ミ
          </div>
        </div>
      </div>
      <div className={`h-full size-1/6 relative  [perspective:500px]`}>
        <div className={`${stage == 2 && "[transition-timing-function:cubic-bezier(.02,1.61,.7,1.36)]"} delay-[400ms] w-full h-full transform transition-transform duration-500 [transform-style:preserve-3d] ${stage == 2 ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}  relative`}>
          <div className="absolute inset-0 bg-rose-500 flex items-center justify-center [transform:rotateY(-180deg)] [backface-visibility:hidden] size-full text-white text-[calc(min(calc((100svh_-_4rem)_*_16_/_9),calc(100vw_-_2rem))_/_6_*_0.5)] font-bold">
            ラ
          </div>
        </div>
      </div>
      <div className={`h-full size-1/6 relative  [perspective:500px]`}>
        <div className={`${stage == 2 && "[transition-timing-function:cubic-bezier(.02,1.61,.7,1.36)]"} delay-[500ms] w-full h-full transform transition-transform duration-500 [transform-style:preserve-3d] ${stage == 2 ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}  relative`}>
          <div className="absolute inset-0 bg-rose-500 flex items-center justify-center [transform:rotateY(-180deg)] [backface-visibility:hidden] size-full text-white text-[calc(min(calc((100svh_-_4rem)_*_16_/_9),calc(100vw_-_2rem))_/_6_*_0.5)] font-bold rounded-e-xl">
            イ
          </div>
        </div>
      </div>
    </div>
  </div>
}