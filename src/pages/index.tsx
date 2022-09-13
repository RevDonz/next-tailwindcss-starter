import DarkMode from '@/components/DarkModeToggler';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen'>
      <div className='flex flex-col items-center justify-center h-full w-full'>
        <p className='font-bold text-5xl mb-10'>Next.js TailwindCSS Starter</p>
        <div className='flex space-x-3'>
          <DarkMode />
          <a
            className='relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded-md group active:bg-indigo-500 focus:outline-none focus:ring'
            href='/second'
          >
            <span className='absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                  clipRule='evenodd'
                />
              </svg>
            </span>

            <span className='text-sm font-medium transition-all group-hover:mr-4'>
              Second Page
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
