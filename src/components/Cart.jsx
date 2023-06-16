import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  const [showModal, setShowModal] = useState(false);

  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <>
      <button
        className='block relative text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        type='button'
        onClick={() => setShowModal(true)}
      >
        <ShoppingCart />
        <div className='absolute bg-red-600 w-[1.5rem] h-[1.4rem] top-[-9px] right-[37px] rounded-full'>
          <span className='text-white'>{quantity}</span>
        </div>
      </button>
      <div
        className={
          showModal
            ? 'absolute h-[100vh] w-[50vh] right-0 top-[8px] rounded-md bg-white transition-all translate-y-[0px]'
            : 'absolute h-[100vh] w-[50vh] right-0 top-[8px] rounded-md bg-white transition-all translate-y-[2000px]'
        }
      >
        <div className=''></div>
      </div>
    </>
  );
}
