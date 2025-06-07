export function StyledH2({ japanese, english }: { japanese: string, english: string }) {
  return <div className="my-4">
    <div className='text-6xl font-bold text-center text-gray-200'>{english}</div>
    <h2 className='text-6xl font-bold text-center relative -top-10 text-rose-500'>{japanese}</h2>
  </div>
}