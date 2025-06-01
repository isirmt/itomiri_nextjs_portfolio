import MainContentBox from '@/components/common/mainContentBox'
import { cmsClient } from '@/libs/cmsClient'
import { ApiResponse, NewsContent } from '@/libs/interface/cmsObject'
import NewsCard from '@/components/news/newsCard';

export default async function Home() {
  const data = await cmsClient.get({
    endpoint: "news",
  }) as ApiResponse<NewsContent>;

  console.log(data)

  return (
    <MainContentBox>
      <section className="w-auto aspect-video bg-red-50">
      </section>
      <section>
        <div className='text-6xl font-bold text-center text-gray-200'>News</div>
        <h2 className='text-6xl font-bold text-center relative -top-10 text-rose-500'>ニュース</h2>

        <div className='flex gap-4 p-10 flex-wrap'>
          {data.contents.map((newsContent, idx) => (
            <NewsCard key={idx} content={newsContent} />
          ))}
        </div>
      </section>
      <section>
        <div className='text-6xl font-bold text-center text-gray-200'>Works</div>
        <h2 className='text-6xl font-bold text-center relative -top-10 text-rose-500'>作品</h2>
      </section>
    </MainContentBox>
  )
}
