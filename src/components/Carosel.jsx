import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/style.css';

import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Banner } from '../dumydata/data';
import VideoModal from './VideoModal';

export default function Carosel() {
  return (
    <div className='h-[34rem]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {Banner.map((item) => (
          <SwiperSlide
            className='flex relative justify-start items-center bg-cover bg-center'
            style={{ backgroundImage: `url(${item.Image})` }}
            key={item.id}
          >
            <div className='absolute w-full h-full bg-slate-800 opacity-25' />
            <div className='relative text-left w-[58rem] space-y-4 px-40'>
              <h1 className='text-white text-4xl font-bold'>{item.title}</h1>
              <p className='text-white '>{item.desc}</p>
              <div className='flex items-center justify-start mt-4'>
                <button
                  type='button'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 mr-2 -ml-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
                  </svg>
                  Buy now
                </button>
                <VideoModal />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
