import { img6 } from '../assets';

export default function Ads() {
  return (
    <div className='flex justify-center items-center px-24 '>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md relative px-5 rounded-md w-full h-[17rem] flex jsb'>
        <div className='w-80 space-y-2'>
          <h1 className='text-[42px] font-semibold'>All New Games This Year</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
            itaque assumenda in explicabo quas magnam provident doloribus
          </p>
          <button className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"'>
            lear more
          </button>
        </div>
        <div className=''>
          <img
            className='absolute w-[524px] top-[-23px] right-0'
            src={img6}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
