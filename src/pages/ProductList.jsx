import { Footer, Navbar, Products } from '../components';

export default function ProductList() {
  return (
    <>
      <Navbar />
      <div className='mt-10 mx-7'>
        <h1 className='font-bold text-3xl mb-6'>Dresses</h1>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <h2>Filter Product:</h2>
            <select
              id='countries'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option selected>Choose a country</option>
              <option value='US'>United States</option>
              <option value='CA'>Canada</option>
              <option value='FR'>France</option>
              <option value='DE'>Germany</option>
            </select>
          </div>
          <div className='flex items-center gap-4'>
            <select
              id='countries'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option selected>Choose a country</option>
              <option value='US'>United States</option>
              <option value='CA'>Canada</option>
              <option value='FR'>France</option>
              <option value='DE'>Germany</option>
            </select>
            <h2>Sort Product:</h2>
          </div>
        </div>
        <div>
          <Products />
        </div>
      </div>
      <Footer />
    </>
  );
}
