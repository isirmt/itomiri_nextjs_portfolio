import MainContentBox from '@/components/common/mainContentBox'
import { cmsClient } from '@/libs/cmsClient'
import { ApiResponse, NewsContent, WorksContent } from '@/libs/interface/cmsObject'
import WorksTile from '@/components/works/worksTile';
import LatestNews from '@/components/news/latestNews';
import HeroContent from '@/components/common/heroContent';
import { StyledH2 } from '@/components/common/headingItem';

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
        <StyledH2 japanese='ニュース' english='News' />
        <div className='flex gap-4 p-10 justify-center'>
          <LatestNews newsList={newsData.contents.slice(0, 5)} />
        </div>
      </section>
      <section>
        <StyledH2 japanese='作品' english='Works' />
        <WorksTile workContents={worksData.contents} />
      </section>
    </MainContentBox>
  )
}
