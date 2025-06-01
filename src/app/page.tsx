import MainContentBox from '@/components/common/mainContentBox'
import { cmsClient } from '@/libs/cmsClient'
import { ApiResponse, NewsContent, WorksContent } from '@/libs/interface/cmsObject'
import NewsCard from '@/components/news/newsCard';
import WorksTile from '@/components/works/worksTile';

export default async function Home() {
  const newsData = await cmsClient.get({
    endpoint: "news",
  }) as ApiResponse<NewsContent>;

  const worksData = await cmsClient.get({
    endpoint: "works",
  }) as ApiResponse<WorksContent>;

  return (
    <MainContentBox>
      <section className="w-auto aspect-video bg-red-50">
      </section>
      <section>
        <div className='text-6xl font-bold text-center text-gray-200'>News</div>
        <h2 className='text-6xl font-bold text-center relative -top-10 text-rose-500'>ニュース</h2>

        <div className='flex gap-4 p-10 flex-wrap'>
          {newsData.contents.map((newsContent, idx) => (
            <NewsCard key={idx} content={newsContent} />
          ))}
        </div>
      </section>
      <section>
        <div className='text-6xl font-bold text-center text-gray-200'>Works</div>
        <h2 className='text-6xl font-bold text-center relative -top-10 text-rose-500'>作品</h2>
      
        <WorksTile workContents={worksData.contents} />
      </section>
    </MainContentBox>
  )
}
