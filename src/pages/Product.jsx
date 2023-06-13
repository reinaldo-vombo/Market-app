import { img2 } from '../assets';
import { Footer, Navbar } from '../components';
import CountButton from '../components/CountButton';

export default function Product() {
  return (
    <>
      <Navbar />
      <div
        className='bg-cover relative bg-center h-96'
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className='absolute w-full h-full bg-[#000000cc]' />
        <div className='relative flex gap-2 items-center justify-center h-full'>
          <div className='w-[20rem] '>
            <img className='w-full' src={img2} alt='' />
          </div>
          <div className='w-[33rem] text-white'>
            <h1 className=' text-4xl'>Headphone</h1>
            <p className=' mb-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              corporis unde totam culpa quia, aut doloremque consectetur
              sapiente ipsa voluptatibus magnam minus animi itaque et quae
              aliquid nisi a natus!
            </p>
            <h2 className='font-bold text-3xl'>$ 20</h2>
            <div className='flex items-center gap-2 mt-6'>
              <CountButton />
              <button
                type='button'
                className='text-white ml-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
