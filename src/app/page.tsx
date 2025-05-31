import MainContentBox from '@/components/common/mainContentBox'
import Link from 'next/link'

export default function Home() {
  return (
    <MainContentBox>
      <div className="w-auto aspect-video bg-red-50">
      </div>
      <section>
        <div className='text-6xl font-bold text-center text-gray-200'>News</div>
        <h2 className='text-6xl font-bold text-center relative -top-10 text-rose-500'>ニュース</h2>

        <div className='flex gap-4 p-10'>
          <Link href={"./"} className='block size-72 border rounded-lg'>
            <div className='w-full aspect-[1200/630] bg-rose-100'>

            </div>
            <div className='p-2'>
              <p className='text-lg font-bold text-rose-900'>タイトル</p>
            </div>
          </Link>
        </div>
      </section>
    </MainContentBox>
  )
}
