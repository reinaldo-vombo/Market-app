import { Heart } from 'lucide-react';

export default function Product({ item }) {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>
        <div>
          <img
            className='rounded-t-lg w-full h-[233px] object-cover'
            src={item.Image}
            alt=''
          />
        </div>
      </a>
      <div className='p-5'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {item.title}
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className='mb-3'>
          <h2 className='font-semibold text-lg'>$400</h2>
        </div>
        <div className='flex justify-between'>
          <a
            href='#'
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black border-blue-700 border-2  rounded-lg hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:border-blue-600 dark:hover:border-blue-700 dark:focus:ring-blue-800'
          >
            Read more
            <svg
              aria-hidden='true'
              className='w-4 h-4 ml-2 -mr-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a>
          <a
            href='#'
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Add to cart
            <svg
              aria-hidden='true'
              className='w-4 h-4 ml-2 -mr-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a>
          <i className='rounded-full w-8 h-8 flex justify-center items-center border-solid border-2 border-red-600'>
            <Heart className='text-red-600' />
          </i>
        </div>
      </div>
    </div>
  );
}
