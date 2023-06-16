import { category } from '../dumydata/data';
import CategoryItem from './CategoryItem';

export default function Category() {
  return (
    <div className='flex justify-center items-center mt-12 mb-12'>
      {category.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
}
