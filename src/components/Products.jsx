import { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

export default function Products({ cat, filter, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3333/api/products?category=${cat}`
            : 'http://localhost:3333/api/products'
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filter, products]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className='flex justify-center items-center gap-2 flex-wrap'>
      {cat
        ? filteredProducts.map((item) => <Product key={item._id} item={item} />)
        : products
            .slice(0, 8)
            .map((item) => <Product key={item._id} item={item} />)}
    </div>
  );
}
