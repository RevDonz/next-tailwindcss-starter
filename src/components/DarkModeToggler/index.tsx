import React from 'react';
import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi';

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
      className='inline-flex items-center px-8 py-3 transition duration-300 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-indigo-700 active:text-indigo-500 focus:outline-none focus:ring'
    >
      {theme === 'light' ? (
        <HiMoon className='text-yellow-400' />
      ) : (
        <HiSun className='text-yellow-400' />
      )}

      <span className='text-sm ml-3 font-medium'>Dark Mode</span>
    </button>
  );
};

export default DarkMode;
