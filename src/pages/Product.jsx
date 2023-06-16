import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import CountButton from '../components/CountButton';
import { publicRequest } from '../requestMethods';

export default function Product() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProdut = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProdut();
  }, [id]);

  return (
    <>
      <Navbar />
      <div
        className='bg-cover relative bg-center h-screen'
        style={{ backgroundImage: `url(${product.banner})` }}
      >
        <div className='absolute w-full h-full bg-[#000000cc]' />
        <div className='relative flex gap-8 items-center justify-center h-full flex-wrap'>
          <div className='w-[28rem] '>
            <img className='w-full' src={product.image} alt='' />
          </div>
          <div className='w-[33rem] text-white space-y-4'>
            <h1 className=' text-4xl'>{product.title}</h1>
            <p className=''>{product.description}</p>
            <h2 className='font-bold text-3xl'>$ {product.price} (kz)</h2>
            <div className='flex flex-col gap-2 mt-6'>
              <span>Quantity:</span>
              <CountButton product={product} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
