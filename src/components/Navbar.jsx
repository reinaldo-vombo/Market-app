import { useEffect, useState } from 'react';
import Cart from './Cart';
import { HeartIcon, User } from 'lucide-react';

export default function Navbar() {
  const [changeNavColor, setChangeNavColor] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY >= 82) {
      setChangeNavColor(true);
    } else {
      setChangeNavColor(false);
    }
  };
  return (
    <>
      <header>
        <nav
          className={
            changeNavColor
              ? 'fixed transition-all bg-white w-full border-gray-200 z-10 px-4 py-4 lg:px-6 dark:bg-gray-800'
              : 'fixed w-full border-gray-200 z-10 px-4 py-4 lg:px-6 dark:bg-gray-800'
          }
        >
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
            <a href='/' className='flex items-center'>
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='mr-3 h-6 sm:h-9'
                alt='Flowbite Logo'
              />
              <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                Flowbite
              </span>
            </a>
            <div>{['']}</div>
            <div className='flex items-center lg:order-2 redx'>
              <a
                href='/register'
                className='text-gray-800 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
              >
                <User />
              </a>
              <Cart />
              <a href=''>
                <HeartIcon />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
