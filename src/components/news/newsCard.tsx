import { NewsContent } from "@/libs/interface/cmsObject";
import NavLink from "../common/navLink";
import Image from "next/image";
import { formatToMonthDay } from "@/libs/timeConvert";
import { TwoColorArrow } from "../common/svgItem";

export default function NewsCard({ content }: { content: NewsContent }) {
  return <NavLink href={`/news/${content.id}`} className='flex flex-col w-72 h-72 border relative rounded-md overflow-hidden transition-all border-rose-100 hover:border-rose-500 group bg-white'>
    <div className='w-full aspect-[1200/630] bg-rose-50 overflow-hidden flex items-center justify-center relative'>
      {content.meta.thumbnail && <Image width={content.meta.thumbnail.width} height={content.meta.thumbnail.height} className="relative z-0" src={content.meta.thumbnail.url} alt={`${content.id}のサムネイル`} />}
      <div className="absolute z-[5] size-0 group-hover:size-[22rem] blur-md bg-rose-100 rounded-full transition-all opacity-45" />
      <TwoColorArrow className="absolute group-hover:left-[20%] z-10 w-10 -left-12 transition-all delay-[0ms] group-hover:delay-[150ms] opacity-0 group-hover:opacity-70" />
      <TwoColorArrow className="absolute group-hover:left-[35%] z-10 w-10 -left-12 transition-all delay-[50ms] group-hover:delay-[100ms] opacity-0 group-hover:opacity-80" />
      <TwoColorArrow className="absolute group-hover:left-[50%] z-10 w-10 -left-12 transition-all delay-[100ms] group-hover:delay-[50ms] opacity-0 group-hover:opacity-90" />
      <TwoColorArrow className="absolute group-hover:left-[65%] z-10 w-10 -left-12 transition-all delay-[150ms] group-hover:delay-[0ms] opacity-0 group-hover:opacity-100" />
    </div>
    <div className='flex-1 relative p-2 before:absolute before:block before:content-[""] before:h-4 before:w-8 before:bg-white before:left-[calc((100%_-_2rem)_/_2)] before:-top-3 before:[clip-path:polygon(0%_100%,50%_0%,100%_100%)]'>
      <p className='text-lg font-bold text-rose-900'>{content.title}</p>
      <p className="absolute bottom-0 right-0 bg-rose-500 text-white font-bold pl-2 pr-3 leading-4 flex items-center justify-center py-0.5 rounded-tl-md">
        <i>{formatToMonthDay(content.createdAt)}</i>
      </p>
    </div>
  </NavLink>
}