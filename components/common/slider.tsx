import React, { useRef } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import ChevronRight from '../icons/chevron-right';
import ChevronLeft from '../icons/chevron-left';
import { BaseComponent } from '../../utils/types/clientTypes';
import clsx from 'clsx';

export interface SliderProps extends BaseComponent, SwiperProps {
  navigation?: boolean;
  pagination?: boolean;
  spaceBetween?: number;
  slidesPerView?: number;
}

const Slider = ({
  navigation,
  pagination,
  children,
  className,
  slidesPerView = 3,
  spaceBetween = 32,
  ...swiperProps
}: SliderProps) => {
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousBtnRef = useRef<HTMLButtonElement | null>(null);

  const nextButton = (
    <button
      className='translate-x-full pl-3 hover:pl-4 transition-all [&.swiper-button-disabled]:opacity-50 [&.swiper-button-disabled]:cursor-not-allowed'
      ref={nextBtnRef}
    >
      <ChevronRight className='w-8 h-8' strokeWidth={2} />
    </button>
  );

  const previousButton = (
    <button
      className='-translate-x-full pr-3 hover:pr-4 transition-all [&.swiper-button-disabled]:opacity-50 [&.swiper-button-disabled]:cursor-not-allowed'
      ref={previousBtnRef}
    >
      <ChevronLeft className='w-8 h-8' />
    </button>
  );

  return (
    <div className={clsx('relative')} tabIndex={0}>
      <Swiper
        className={clsx('pb-8', className)}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        draggable
        navigation={{
          enabled: navigation,
          nextEl: nextBtnRef.current,
          prevEl: previousBtnRef.current,
        }}
        pagination={{
          enabled: pagination,
          clickable: true,
        }}
        keyboard
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        {...swiperProps}
      >
        {React.Children?.map(
          children as any,
          (child: React.ReactNode, index: number) => {
            return <SwiperSlide key={index}>{child}</SwiperSlide>;
          }
        )}
      </Swiper>
      {navigation && (
        <div className='absolute z-10 flex items-center justify-between w-full -translate-y-1/2 top-1/2'>
          {previousButton}
          {nextButton}
        </div>
      )}
    </div>
  );
};

export default Slider;
