'use client'
import { NewsContent } from '@/libs/interface/cmsObject';
import 'swiper/css';
import NewsCard from './newsCard';

export default function LatestNews({ newsList }: { newsList: NewsContent[] }) {
  return (
    <div className='flex justify-center gap-6 flex-wrap'>
      {newsList.slice(0, 3).map((newsContent, idx) => (
        <NewsCard key={idx} content={newsContent} />
      ))}
    </div>
  )
}