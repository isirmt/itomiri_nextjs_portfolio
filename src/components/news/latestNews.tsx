'use client'
import { NewsContent } from '@/libs/interface/cmsObject';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewsCard from './newsCard';

export default function LatestNews({ newsList }: { newsList: NewsContent[] }) {
  return (
    <Swiper
      freeMode
      spaceBetween={32}
      slidesPerView={'auto'}
      modules={[FreeMode]}
    >
      {newsList.map((newsContent, idx) => (
        <SwiperSlide key={idx} style={{ width: 'auto' }}>
          <NewsCard key={idx} content={newsContent} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}