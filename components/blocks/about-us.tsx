import React from 'react';
import Section from '../common/section';
import { ImageNext } from '../common/image-next';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const AboutUs = () => {
  return (
    <Section className='relative flex items-center overflow-hidden'>
      <div className='absolute top-0 right-0 mr-64 rounded-full -mt-52 w-186 h-186 bg-gradient-to-t from-violet-900 via-darkBlue-900 to-transparent filter blur-4xl' />
      <div className='container relative px-4 mx-auto'>
        <div className='relative max-w-lg mx-auto prose lg:max-w-xl xl:max-w-2xl md:mx-0'>
          <AnimationOnScroll
            animateIn='animate__fadeInLeft'
            animateOut='animate__fadeOutLeft'
            delay={50}
          >
            <h2 className='mb-10 text-4xl font-medium tracking-tight text-white font-heading xs:text-5xl sm:text-6xl md:text-7xl'>
              About Us
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn='animate__fadeInLeft'
            animateOut='animate__fadeOutLeft'
            delay={100}
          >
            <div className='max-lg:pr-10'>
              <p className='mb-4 text-lg leading-relaxed tracking-tight text-gray-400'>
                Foolist Creative là Agency hoạt động trong lĩnh vực Marketing
                với sứ mệnh “Đồng hành, dùng tinh thần sáng tạo độc nhất để nâng
                tầm thương hiệu Việt”. Foolist được ấp ủ từ những tháng cuối năm
                2022 và chính thức đi vào hoạt động dưới hình thức công ty từ
                ngày 27/05/2023.
              </p>
              <p className='mb-6 text-lg leading-relaxed tracking-tight text-gray-400'>
                Foolist mang trong mình sự kỳ vọng và năng lượng bứt phá, vì thế
                chúng tôi luôn không ngừng nghỉ thu nạp kiến thức về các nội
                dung: xây dựng thương hiệu, phát triển truyền thông và sản xuất
                media, ... Để trở thành lựa chọn hàng đầu của Clients với khả
                năng đi đầu xu hướng và định hình thương hiệu.
              </p>
            </div>
          </AnimationOnScroll>
          {/* <a
            className='inline-flex items-center text-sm font-medium uppercase text-violet-500 hover:text-white'
            href='#'
          >
            <span className='mr-2'>Xem thêm</span>
            <svg
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.92 6.62C17.8185 6.37565 17.6243 6.18147 17.38 6.08C17.2598 6.02876 17.1307 6.00158 17 6H7C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7C6 7.26522 6.10536 7.51957 6.29289 7.70711C6.48043 7.89464 6.73478 8 7 8H14.59L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L16 9.41V17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V7C17.9984 6.86932 17.9712 6.74022 17.92 6.62Z'
                fill='currentColor'
              />
            </svg>
          </a> */}
          <div className='mt-14'>
            <div className='relative flex flex-col sm:flex-row'>
              <div className='pb-8 sm:pb-0 sm:pr-8'>
                <AnimationOnScroll
                  animateIn='animate__fadeInUp'
                  animateOut='animate__fadeOutDown'
                  delay={100}
                >
                  <span className='block text-5xl font-medium text-white lg:text-7xl'>
                    300+
                  </span>
                  <span className='block tracking-tight text-gray-500'>
                    PRODUCTS
                  </span>
                </AnimationOnScroll>
              </div>
              <div className='relative py-8 sm:py-0 sm:px-8'>
                <AnimationOnScroll
                  animateIn='animate__fadeInUp'
                  animateOut='animate__fadeOutDown'
                  delay={200}
                >
                  <span className='block text-5xl font-medium text-white lg:text-7xl'>
                    100+
                  </span>
                  <span className='block tracking-tight text-gray-500'>
                    WEB TEMPLATE
                  </span>
                </AnimationOnScroll>
                <div className='absolute top-0 left-0 hidden w-px h-full bg-white sm:block bg-opacity-20' />
                <div className='absolute top-0 right-0 hidden w-px h-full bg-white sm:block bg-opacity-20' />
                <div className='absolute top-0 left-0 w-full h-px bg-white sm:hidden bg-opacity-20' />
                <div className='absolute bottom-0 left-0 w-full h-px bg-white sm:hidden bg-opacity-20' />
              </div>
              <div className='pt-8 sm:pt-0 sm:pl-8'>
                <AnimationOnScroll
                  animateIn='animate__fadeInUp'
                  animateOut='animate__fadeOutDown'
                  delay={300}
                >
                  <span className='block text-5xl font-medium text-white lg:text-7xl'>
                    215
                  </span>
                  <span className='block tracking-tight text-gray-500'>
                    MOBILE TEMPLATE
                  </span>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/5 sm:w-2/5'>
        <AnimationOnScroll
          animateIn='animate__fadeInRight'
          animateOut='animate__fadeOutRight'
          delay={100}
        >
          <ImageNext
            className='hidden w-full h-full overflow-hidden transform object- rounded-xl md:block '
            src='https://source.unsplash.com/random'
            alt=''
          />
        </AnimationOnScroll>
      </div>
    </Section>
  );
};

export default AboutUs;
