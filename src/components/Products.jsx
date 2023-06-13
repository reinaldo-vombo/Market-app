import { product } from '../dumydata/data';
import Product from './Product';

export default function Products() {
  return (
    <div className='flex justify-center items-center gap-2 flex-wrap'>
      {product.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
}
