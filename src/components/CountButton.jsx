import { Minus, Plus } from 'lucide-react';

export default function CountButton() {
  return (
    <div className='flex items-center'>
      <Plus />
      <span className='bg-slate-400 mx-2 w-5 h-5 flex items-center justify-center rounded'>
        1
      </span>
      <Minus />
    </div>
  );
}
