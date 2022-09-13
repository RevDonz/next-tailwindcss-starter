import DarkMode from '@/components/DarkModeToggler';
import type { NextPage } from 'next';

const SecondPage: NextPage = () => {
  return (
    <div className='h-screen w-screen'>
      <div className='flex flex-col items-center justify-center h-full w-full'>
        <p className='font-bold text-5xl mb-10'>You Are In Second Page</p>
        <div className='flex space-x-3'>
          <a
            className='relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring'
            href='/'
          >
            <span className='absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z'
                  clipRule='evenodd'
                />
              </svg>
            </span>

            <span className='text-sm font-medium transition-all group-hover:ml-4'>
              First Page
            </span>
          </a>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
