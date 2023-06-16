import { useLocation } from 'react-router-dom';
import { Footer, Navbar, Products } from '../components';
import { useState } from 'react';

export default function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <Navbar />
      <div className='mt-10 mx-7'>
        <h1 className='font-bold text-3xl mb-6'>{cat}</h1>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <h2>Filter Product:</h2>
            <select
              name='price'
              onChange={handleFilters}
              id='countries'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option selected>Choose a country</option>
              <option>100</option>
              <option>500</option>
              <option>400</option>
              <option>600</option>
            </select>
          </div>
          <div className='flex items-center gap-4'>
            <select
              onChange={(e) => setSort(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option>newest</option>
              <option>price (asc)</option>
              <option>price (dsc)</option>
            </select>
            <h2>Sort Product:</h2>
          </div>
        </div>
        <div>
          <Products cat={cat} filter={filters} sort={sort} />
        </div>
      </div>
      <Footer />
    </>
  );
}
