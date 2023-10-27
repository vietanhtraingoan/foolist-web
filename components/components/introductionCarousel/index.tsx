import { Carousel } from 'antd';

import 'react-lazy-load-image-component/src/effects/blur.css';
import { ImageNext } from '../../common/image-next';
import { introductionMocks } from '../../../mocks/introductionMocks';
import Slider from '../../common/slider';
import { BaseComponent } from '../../../utils/types/clientTypes';
import clsx from 'clsx';

const classNamePrefix = 'introduction-carousel';

const IntroductionCarousel = ({ className }: BaseComponent) => {
  return (
    <Slider
      className={clsx(
        className,
        'w-full max-w-[400px] lg:max-w-[480px] xl:max-w-[550px]'
      )}
      slidesPerView={1}
      effect='slide'
      pagination
    >
      {introductionMocks &&
        introductionMocks.map((i, index: number) => (
          <div className='overflow-hidden aspect-square rounded-xl' key={i.id}>
            <ImageNext
              className='object-cover w-full h-full'
              priority={index == 0}
              src={i.imgUrl.src}
              alt='image'
            />
          </div>
        ))}
    </Slider>
  );
};

export default IntroductionCarousel;
