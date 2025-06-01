import MainContentBox from "@/components/common/mainContentBox"
import { cmsClient } from "@/libs/cmsClient"
import { NewsContent } from "@/libs/interface/cmsObject"
import '@/styles/newsStyle.scss'

export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const newsContent = await cmsClient.get({
    endpoint: 'news',
    contentId: (await params).slug
  }) as NewsContent

  console.log(newsContent)

  return <MainContentBox>
    <section className="mb-10 px-4 py-6 border-b bg-rose-500">
        <div className="text-4xl font-bold text-white">{newsContent.title}</div>
      </section>
    <article className="max-w-[52rem] mx-auto">
      <section
        className="news px-6"
        dangerouslySetInnerHTML={{
          __html: `${newsContent.content}`,
        }} />
    </article>
  </MainContentBox>
}