import MainContentBox from '@/components/common/mainContentBox'
import { cmsClient } from '@/libs/cmsClient'
import { ApiResponse, NewsContent, WorksContent } from '@/libs/interface/cmsObject'
import WorksTile from '@/components/works/worksTile';
import LatestNews from '@/components/news/latestNews';

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
        <div className='max-h-[calc(100svh_-_4rem)] mx-auto aspect-video relative'>
          <div className='relative size-full flex items-center justify-center p-4 flex-col gap-[5%]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1703.96 232.17">
              <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="5.67" y1="5.92" x2="170.29" y2="5.92" />
              <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="87.98" y1="5.92" x2="87.98" y2="207.92" />
              <line className="fill-none stroke-rose-500 stroke-[8.5px] [stroke-linecap:round] [stroke-linejoin:round]" x1="5.67" y1="209.92" x2="170.67" y2="209.92" />
              <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1533.67" y1="5.92" x2="1698.29" y2="5.92" />
              <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1615.98" y1="5.92" x2="1615.98" y2="207.92" />
              <line className="fill-none stroke-rose-500 stroke-[8.5px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1533.67" y1="209.92" x2="1698.67" y2="209.92" />
              <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1047.67" y1="5.92" x2="1212.29" y2="5.92" />
              <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1129.98" y1="5.92" x2="1129.98" y2="207.92" />
              <line className="fill-none stroke-rose-500 stroke-[8.5px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1047.67" y1="209.92" x2="1212.67" y2="209.92" />
              <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="240.67" y1="5.92" x2="400.85" y2="5.92" />
              <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="320.76" y1="5.92" x2="320.76" y2="207.92" />
              <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1049.67" y1="5.92" x2="1209.85" y2="5.92" />
              <circle className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" cx="586.43" cy="106.67" r="101" />
              <polyline className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" points="795.67 207.92 795.67 5.92 877.98 157.92 959.67 5.92 960.67 207.92" />
              <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1294.67" y1="5.92" x2="1294.67" y2="207.92" />
              <path className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" d="M1399.67,5.92c32.31,0,60,26.61,60,59.12s-26.19,58.87-58.5,58.87" />
              <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1401.17" y1="123.92" x2="1294.67" y2="123.92" />
              <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1400.17" y1="5.92" x2="1294.17" y2="5.92" />
              <line className="fill-none stroke-rose-500 stroke-[11.34px] [stroke-linecap:round] [stroke-linejoin:round]" x1="1459.67" y1="207.92" x2="1376.33" y2="124.58" />
              <path className="fill-rose-500" d="M630.68,105.26l-38.84-35.77c-1.23-1.13-3.21-.26-3.21,1.41v12.71c0,1.06-.86,1.91-1.91,1.91h-33.24c-1.06,0-1.91.86-1.91,1.91v38.47c0,1.06.86,1.91,1.91,1.91h33.24c1.06,0,1.91.86,1.91,1.91v12.71c0,1.67,1.98,2.54,3.21,1.41l38.84-35.77c.82-.76.82-2.06,0-2.81Z" />
            </svg>
            <div className='w-full'>
              <svg className='w-[30%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 708 208">
                <path className="fill-rose-500" d="M0,0v208h708V0H0ZM206.88,165.36c0,1.49-.75,2.24-2.24,2.24h-19.84c-1.18,0-2.08-.54-2.72-1.6l-57.12-88v87.36c0,1.49-.75,2.24-2.24,2.24h-17.92c-1.5,0-2.24-.75-2.24-2.24V42.64c0-1.49.75-2.24,2.24-2.24h19.84c1.17,0,2.13.54,2.88,1.6l56.8,87.84V42.64c0-1.49.74-2.24,2.24-2.24h18.08c1.49,0,2.24.75,2.24,2.24v122.72ZM337.44,165.36c0,1.49-.75,2.24-2.24,2.24h-82.4c-1.5,0-2.24-.75-2.24-2.24V42.64c0-1.49.75-2.24,2.24-2.24h80.32c1.49,0,2.24.75,2.24,2.24v17.6c0,1.5-.75,2.24-2.24,2.24h-59.2v28.8h53.44c1.6,0,2.4.8,2.4,2.4v17.12c0,1.5-.8,2.24-2.4,2.24h-53.44v32.48h61.28c1.49,0,2.24.8,2.24,2.4v17.44ZM472.32,167.6h-21.28c-1.07,0-1.98-.54-2.72-1.6l-29.6-48.32-29.28,48.32c-.43,1.06-1.28,1.6-2.56,1.6h-21.12c-.85,0-1.44-.27-1.76-.8-.32-.54-.27-1.17.16-1.92l40.16-62.88-37.44-58.88c-.21-.64-.32-1.01-.32-1.12,0-1.07.64-1.6,1.92-1.6h21.28c1.07,0,1.97.54,2.72,1.6l26.72,43.84,26.56-43.84c.43-1.07,1.28-1.6,2.56-1.6h21.12c.85,0,1.46.27,1.84.8.37.54.29,1.18-.24,1.92l-37.44,58.56,40.32,63.2c.21.64.32,1.01.32,1.12,0,1.06-.64,1.6-1.92,1.6ZM605.44,60.24c0,1.5-.75,2.24-2.24,2.24h-39.04v102.88c0,1.49-.8,2.24-2.4,2.24h-18.88c-1.49,0-2.24-.75-2.24-2.24V62.48h-39.36c-1.39,0-2.08-.75-2.08-2.24v-17.6c0-1.49.69-2.24,2.08-2.24h101.92c1.49,0,2.24.75,2.24,2.24v17.6Z" />
              </svg>
            </div>
          </div>
        </div>
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
