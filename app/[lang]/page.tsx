import { dictionary } from '@/content';

function Page({ params }: { params: { lang: string } }) {
  return (
    <div>
      <h1 className='text-lg'>{dictionary[params.lang]?.homeHeader}</h1>
      <p className='text-md'>{dictionary[params.lang]?.homeContent}</p>
    </div>
  );
}

export default Page;