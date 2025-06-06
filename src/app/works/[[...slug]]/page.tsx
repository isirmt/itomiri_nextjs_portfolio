import MainContentBox from "@/components/common/mainContentBox";
import WorkDetail from "@/components/works/workDetail";
import WorksTile from "@/components/works/worksTile";
import { cmsClient } from "@/libs/cmsClient";
import { ApiResponse, WorksContent } from "@/libs/interface/cmsObject";

export default async function WorksList({ params }: { params: Promise<{ slug?: string[] }> }) {
  const worksData = await cmsClient.get({
    endpoint: "works",
  }) as ApiResponse<WorksContent>;

  const slug = (await params).slug;
  const workId = slug ? slug.join("") : "";

  const workContent = slug ? await cmsClient.get({
    endpoint: 'works',
    contentId: (await params).slug?.join("")
  }) as WorksContent : undefined;

  console.log(workId);

  return (
    <>
      <MainContentBox>
        <section>
          <div className='text-6xl font-bold text-center text-gray-200'>Works</div>
          <h2 className='text-6xl font-bold text-center relative -top-10 text-rose-500'>作品</h2>

          <WorksTile workContents={worksData.contents} />
        </section>
      </MainContentBox>
      {workContent && <section className="fixed w-svw h-svh pointer-events-none">
        <WorkDetail work={workContent} />
      </section>}
    </>
  )
}