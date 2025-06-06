'use client'
import { MouseEvent } from 'react';
import { WorksContent } from "@/libs/interface/cmsObject";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function WorkCard({ workContent }: { workContent: WorksContent }) {
  const router = useRouter();
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(`/works/${workContent.id}`, {
      scroll: false
    })
  }

  return <Link
    onClick={handleClick}
    key={workContent.id}
    href={`/works/${workContent.id}`}
    className="block w-full relative rounded-md overflow-hidden group transition-all"
  >
    <Image
      src={workContent.meta.thumbnail.url}
      width={workContent.meta.thumbnail.width}
      height={workContent.meta.thumbnail.height}
      alt={workContent.title}
      className="w-full h-auto object-cover"
    />
    <div className="group-hover:opacity-100 opacity-0 transition-all absolute top-0 left-0 size-full bg-red-100 bg-opacity-50" />
    <div className="transition-all group-hover:-bottom-10 absolute -bottom-24 w-full bg-red-500 rounded-t-xl h-24 px-4 text-white text-xl font-bold [transition-timing-function:cubic-bezier(.09,.9,.33,1.36)] duration-[350ms]">
      <div className='h-14 flex items-center justify-between'>
        <span>{workContent.title}</span>
        <div className='size-8 relative flex-shrink-0'>
          <span className={`block w-full h-0.5 rounded-full bg-white absolute transition-all duration-300 rotate-90 translate-y-4`} />
          <span className={`block w-full h-0.5 rounded-full bg-white absolute transition-all duration-300 rotate-0 translate-y-4`} />
        </div>
      </div>
    </div>
  </Link>
}