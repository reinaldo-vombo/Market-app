import { Heart, ShoppingBag } from 'lucide-react';

export default function Product({ item }) {
  return (
    <div className='max-w-[17rem] h-[22rem] relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>
        <img
          className='rounded-t-lg w-full h-full object-cover'
          src={item.Image}
          alt=''
        />
        <div className='absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-black from-[-34%]'>
          <div className='bottom-0 relative top-72 text-white mx-4 flex justify-between items-center'>
            <div>
              <h1 className=''>{item.title}</h1>
              <span className='text-zinc-400'>Jogos</span>
            </div>
            <div>
              <ShoppingBag />
            </div>
          </div>
          <div className='w-8 h-8 relative top-[-18px] rounded-full border-solid border-[2px] border-red-500 flex justify-center items-center'>
            <Heart color='red' />
          </div>
        </div>
      </a>
    </div>
  );
}
