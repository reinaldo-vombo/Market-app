import { img3 } from '../assets';
import { Footer, Navbar } from '../components';
import CountButton from '../components/CountButton';

export default function Cart() {
  return (
    <>
      <Navbar />
      <div className='p-[30px]'>
        <h1 className='text-center font-medium'>Your bag</h1>
        <div className='flex items-center justify-between mb-7'>
          <button
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5 mr-2 -ml-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
            </svg>
            Buy now
          </button>
          <div className='flex gap-3'>
            <h2>Shopping Bag(2)</h2>
            <h2>Your Wishlist (0)</h2>
          </div>
          <button
            type='button'
            className='text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2'
          >
            <svg
              className='w-4 h-4 mr-2 -ml-1'
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='paypal'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
            >
              <path
                fill='currentColor'
                d='M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z'
              ></path>
            </svg>
            Check out with PayPal
          </button>
        </div>
        <div className='flex justify-between font-extrabold cursor-pointer'>
          <div className='flex-2'>
            <div className='flex justify-between'>
              <div className='flex-2 flex'>
                <img className='w-28' src={img3} alt='' />
                <div className='p-[20px] flex flex-col justify-around'>
                  <h1>
                    {' '}
                    <b>Product:</b> Jessie thunder shoes
                  </h1>
                  <h2>
                    {' '}
                    <b>ID:</b> 9387534{' '}
                  </h2>
                </div>
              </div>
              <div className='flex-1 flex flex-col'>
                <CountButton />
                <h2 className='text-3xl'>$ 30</h2>
              </div>
            </div>
          </div>
          <div className='flex-1 space-y-4 space-x-4 border-[0.5px] border-solid border-gray-100 '>
            <h1 className='font-thin'>Order Summary</h1>
            <div className='flex justify-between'>
              <h2>Subtatal</h2>
              <h3>$ 80</h3>
            </div>
            <div className='flex justify-between'>
              <h2>Estimated Shipping</h2>
              <h3>$ 80</h3>
            </div>
            <div className='flex justify-between'>
              <h2>Shipping Discount</h2>
              <h3>$ -5.89</h3>
            </div>
            <div className='flex justify-between'>
              <h2> Total</h2>
              <h3>$ 10.89</h3>
            </div>
            <button
              type='button'
              className='text-gray-900 w-full bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2'
            >
              <svg
                className='w-4 h-4 mr-2 -ml-1'
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='paypal'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 384 512'
              >
                <path
                  fill='currentColor'
                  d='M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z'
                ></path>
              </svg>
              Check out with PayPal
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
