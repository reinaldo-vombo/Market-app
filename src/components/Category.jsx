import { categories } from '../dumydata/data';
import CategoryItem from './CategoryItem';

export default function Category() {
  return (
    <div className='flex justify-center items-center mt-12 mb-12'>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
}
