import { useState } from 'react';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';

export default function CountButton({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center'>
        <Minus
          className='bg-slate-400 mx-2 w-6 h-6 flex items-center justify-center cursor-pointer rounded-full'
          onClick={() => handleQuantity('dec')}
        />
        <span>{quantity}</span>
        <Plus
          className='bg-slate-400 mx-2 w-6 h-6 flex items-center justify-center cursor-pointer rounded-full'
          onClick={() => handleQuantity('inc')}
        />
      </div>
      <button
        onClick={handleClick}
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        <ShoppingCart />
        Add to cart
      </button>
    </div>
  );
}
