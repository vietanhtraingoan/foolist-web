import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { projectMocks } from '../../../mocks/projectMocks';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/outline';
// Import Swiper styles
import { ImageNext } from '../../../components/common/image-next';
import ChevronRight from '../../../components/icons/chevron-right';
import ChevronLeft from '../../../components/icons/chevron-left';
import clsx from 'clsx';
import YoutubeIframe from '../../../components/common/youtube-iframe';
import { getYoutubeEmbedUrl } from '../../../utils/commonFunctions';
import { Progress, Skeleton, Spin } from 'antd';

const classNamePrefix = 'project-carousel';

const ProjectCarousel = () => {
  const [viewingProject, setViewingProject] = useState<any | null>(null);
  const [loadingProject, setLoadingProject] = useState(false);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousBtnRef = useRef<HTMLButtonElement | null>(null);

  const nextButton = (
    <button
      className='translate-x-full pointer-events-auto pl-3 hover:pl-4 transition-all [&.swiper-button-disabled]:opacity-50 [&.swiper-button-disabled]:cursor-not-allowed'
      ref={nextBtnRef}
    >
      <ChevronRight className='w-8 h-8' strokeWidth={2} />
    </button>
  );

  const previousButton = (
    <button
      className='-translate-x-full pointer-events-auto pr-3 hover:pr-4 transition-all [&.swiper-button-disabled]:opacity-50 [&.swiper-button-disabled]:cursor-not-allowed'
      ref={previousBtnRef}
    >
      <ChevronLeft className='w-8 h-8' />
    </button>
  );

  return (
    <div className={clsx(classNamePrefix, 'relative md:px-6')} tabIndex={0}>
      <Swiper
        className='pb-8'
        spaceBetween={32}
        slidesPerView={3}
        draggable
        breakpoints={{
          0: { slidesPerView: 1 },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          enabled: true,
          nextEl: nextBtnRef.current,
          prevEl: previousBtnRef.current,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      >
        {projectMocks?.map((proj, index) => (
          <SwiperSlide key={proj.id}>
            <div
              onClick={() => {
                if (proj.isVideo) {
                  setViewingProject(proj);
                  setLoadingProject(true);
                }
              }}
              className='relative group before:absolute before:content-[""] before:inset-0 before:bg-transparent hover:before:bg-white/20 cursor-pointer'
            >
              <ImageNext
                src={proj.largeImg.src}
                alt='image-product'
                // placeholderSrc={proj.largeImg.src}
              />
              {proj?.isVideo && (
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='flex justify-center p-2 bg-white border rounded-full shadow-md cursor-pointer items-'>
                    <PlayIcon width={50} className='fill-black' />
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
        {projectMocks?.map((proj, index) => (
          <SwiperSlide key={proj.id}>
            <ImageNext
              src={proj.largeImg.src}
              alt='image-product'
              // placeholderSrc={proj.largeImg.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='container absolute z-10 items-center justify-between hidden w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 md:flex top-1/2'>
        {previousButton}
        {nextButton}
      </div>
      {viewingProject && (
        <div
          className='fixed z-[999] flex items-center py-28 justify-center inset-0 bg-gray-500/20 backdrop-blur-xl'
          onClick={() => setViewingProject(null)}
        >
          <div
            className='bg-black   border-gray-300 mx-4 rounded-lg relative w-full max-w-[800px] h-full '
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <div className='flex items-center p-6 '>
              <button
                className='ml-auto'
                onClick={() => setViewingProject(null)}
              >
                <XMarkIcon
                  width={30}
                  height={30}
                  color='#fff'
                  className='fill-white'
                />
              </button>
            </div>
            {viewingProject?.videoUrl && (
              <YoutubeIframe
                onLoad={() => {
                  setLoadingProject(false);
                }}
                original
                src={getYoutubeEmbedUrl(viewingProject?.videoUrl)}
              />
            )}
            <div className='p-6 prose'>
              <h3 className='text-white'>{viewingProject?.title}</h3>
              <p>{viewingProject?.intro}</p>
            </div>
            {loadingProject && (
              <div className='absolute inset-0 p-6'>
                <Skeleton active />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
