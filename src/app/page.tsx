import MainContentBox from '@/components/common/mainContentBox'
import { cmsClient } from '@/libs/cmsClient'
import { ApiResponse, NewsContent, WorksContent } from '@/libs/interface/cmsObject'
import WorksTile from '@/components/works/worksTile';
import LatestNews from '@/components/news/latestNews';
import HeroContent from '@/components/heroContent';

export default async function Home() {
  const newsData = await cmsClient.get({
    endpoint: "news",
  }) as ApiResponse<NewsContent>;

  const worksData = await cmsClient.get({
    endpoint: "works",
  }) as ApiResponse<WorksContent>;

  return (
    <MainContentBox>
      <section className="mx-auto p-6 relative">
        <HeroContent latestWork={worksData.contents.length ? worksData.contents[0] : undefined} />
      </section>
      <section>
        <div className='text-6xl font-bold text-center text-gray-200'>News</div>
        <h2 className='text-6xl font-bold text-center relative -top-10 text-rose-500'>ニュース</h2>

        <div className='flex gap-4 p-10 justify-center'>
          <LatestNews newsList={newsData.contents.slice(0, 5)} />
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
