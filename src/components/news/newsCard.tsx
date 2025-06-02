/* eslint-disable @next/next/no-img-element */
import { NewsContent } from "@/libs/interface/cmsObject";
import NavLink from "../common/navLink";

export default function NewsCard({ content }: { content: NewsContent }) {
  return <NavLink href={`/news/${content.id}`} className='block size-72 border rounded-lg'>
    <div className='w-full aspect-[1200/630] bg-rose-100 overflow-hidden'>
      {content.meta.thumbnail && <img src={content.meta.thumbnail.url} alt={`${content.id}のサムネイル`} />}
    </div>
    <div className='p-2'>
      <p className='text-lg font-bold text-rose-900'>{content.title}</p>
    </div>
  </NavLink>
}