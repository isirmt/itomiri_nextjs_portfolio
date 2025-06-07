import MainContentBox from "@/components/common/mainContentBox";
import NewsCard from "@/components/news/newsCard";
import { cmsClient } from "@/libs/cmsClient";
import { ApiResponse, NewsContent } from "@/libs/interface/cmsObject";

export default async function NewsList() {
  const data = await cmsClient.get({
    endpoint: "news",
  }) as ApiResponse<NewsContent>;

  return <MainContentBox>
    <section>
      <div className='text-6xl font-bold text-center text-gray-200'>News</div>
      <h2 className='text-6xl font-bold text-center relative -top-10 text-rose-500'>ニュース</h2>

      <div className='flex gap-4 p-10 flex-wrap justify-center'>
        {data.contents.map((newsContent, idx) => (
          <NewsCard key={idx} content={newsContent} />
        ))}
      </div>
    </section>
  </MainContentBox>
}