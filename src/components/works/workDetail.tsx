'use client'
import { WorksContent } from "@/libs/interface/cmsObject";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import '@/styles/newsStyle.scss'
import { formatToMonthDay } from "@/libs/timeConvert";

export default function WorkDetail({ work }: { work: WorksContent }) {
  const [isClosing, setIsClosing] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setIsClosing(false);
  }, [])

  const triggerClose = () => {
    setIsClosing(true);
    const t = setTimeout(() => {
      router.push("/works/", {
        scroll: false
      })
    }, 250)

    return () => clearTimeout(t);
  }

  return (
    <div className={`pointer-events-auto relative left-0 w-svw top-16 h-[calc(100svh_-_4rem)] lg:w-[calc(100svw_-16rem)] lg:h-svh lg:left-64 lg:top-0 z-10 flex items-center justify-center`}>
      <div onClick={triggerClose} className={`${isClosing ? "bg-opacity-0" : "bg-opacity-25"} size-full bg-black absolute top-0 left-0 z-10 duration-[300ms]`} />
      <div className={`${isClosing ? "scale-0" : "scale-100"} duration-[300ms] transform transition-all bg-white w-[90%] h-[90%] rounded-3xl shadow-md shadow-rose-500 overflow-hidden border-2 z-20 border-rose-500 flex flex-col`}>
        <div className="flex items-center justify-between border-b border-rose-100 px-6 py-2 bg-rose-500">
          <div className="whitespace-nowrap text-white text-3xl">
            {work.title}
          </div>
          <button title="閉じる" onClick={triggerClose} type="button" className="group w-12 h-12 relative flex-shrink-0">
            <span className={`block w-full h-0.5 rounded-full bg-white absolute transition-all duration-300 rotate-45 top-2 translate-y-4 group-hover:rotate-0`} />
            <span className={`block w-full h-0.5 rounded-full bg-white absolute transition-all duration-300 -rotate-45 top-2 translate-y-4 group-hover:rotate-0`} />
          </button>
        </div>
        <div className="w-full bg-rose-100 text-rose-900 py-1 px-12 flex items-center justify-start">
          {formatToMonthDay(work.workPublished)}
        </div>
        <section
          className="px-6 mt-4 flex-1 overflow-y-auto"
          dangerouslySetInnerHTML={{
            __html: `${work.description}`,
          }}
        />
      </div>
    </div>
  );
}