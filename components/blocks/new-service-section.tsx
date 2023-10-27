import React from 'react';
import Section from '../common/section';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

const NewServiceSection = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  const { t } = useTranslation('common');

  const services = [
    {
      id: 1,
      title: 'CHIẾN LƯỢC THƯƠNG HIỆU',
      description:
        'Foolist sẽ đưa ra cho khách hàng và đối tác những thông tin,',
      slug: '/dich-vu/chien-luoc-thuong-hieu',
      services: [
        'Dịch vụ 1',
        'Dịch vụ 2',
        'Dịch vụ 3',
        'Dịch vụ 4',
        'Dịch vụ 5',
      ],
    },
    {
      id: 2,
      title: 'SẢN XUẤT MEDIA',
      description:
        'Foolist sẽ đưa ra cho khách hàng và đối tác những thông tin,',
      slug: '/dich-vu/chien-luoc-thuong-hieu',
      services: [
        'Dịch vụ 1',
        'Dịch vụ 2',
        'Dịch vụ 3',
        'Dịch vụ 4',
        'Dịch vụ 5',
      ],
    },

    {
      id: 3,
      title: 'TRUYỀN THÔNG',
      description:
        'Foolist sẽ đưa ra cho khách hàng và đối tác những thông tin,',
      slug: '/dich-vu/chien-luoc-thuong-hieu',
      services: [
        'Dịch vụ 1',
        'Dịch vụ 2',
        'Dịch vụ 3',
        'Dịch vụ 4',
        'Dịch vụ 5',
      ],
    },
  ];

  return (
    <Section className='relative overflow-hidden bg-coolGray-50'>
      <Section.Title className='!text-2xl font-medium text-white uppercase border-b font-heading mb-12 md:mb-14 lg:mb-28'>
        {t('Section_label.service')}
      </Section.Title>
      {services
        ? services?.map((service, index: number) => {
            return (
              <div
                key={service.slug + index}
                className='relative items-center block px-4 transition-all border-b border-black last:mb-0 mb-14 lg:mb-24 group lg:flex'
              >
                <div className='mb-8 xl:mb-0'>
                  <span className='block mb-2 text-lg text-gray-200'>{`0${
                    index + 1
                  }`}</span>
                  <div className='max-lg:flex max-lg:items-center max-lg:justify-between'>
                    <Link href={service.slug || '#'} className='group'>
                      <h3
                        className='block pt-2 pb-2 text-3xl text-transparent uppercase transition duration-150 border-transparent xs:text-2xl lg:text-4xl xl:text-5xl border-b-3 group-hover:border-black'
                        style={{
                          background:
                            'linear-gradient(hsl(0 0% 90%), hsl(0 0% 40%))',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          color: 'transparent',
                        }}
                      >
                        {service.title}
                      </h3>
                    </Link>
                    <div className='hidden mr-2 text-right max-lg:block'>
                      <Link href={service.slug || '#'}>
                        <span className='inline-block transition duration-100 transform max-md:w-6 group-hover:rotate-45'>
                          <svg
                            width={isMobile ? 20 : 33}
                            height={isMobile ? 20 : 33}
                            viewBox='0 0 33 33'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M30 3L3 30'
                              stroke='white'
                              strokeWidth='4.3875'
                              strokeMiterlimit={10}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M30 27.758V3H5.24196'
                              stroke='white'
                              strokeWidth='4.3875'
                              strokeMiterlimit={10}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className='max-w-md mb-8 ml-auto text-right xl:mb-0 xl:mr-20'>
                <p>{service.description}</p>
              </div> */}
                <div className='w-full max-w-md ml-auto xl:mr-20'>
                  {service?.services?.length > 0 ? (
                    <ul className='grid items-center w-full grid-cols-2 gap-3 mb-0 xl:gap-5'>
                      {service?.services?.map((item) => (
                        <li
                          className='group'
                          style={{
                            listStyleType: 'square',
                          }}
                          key={item}
                        >
                          <Link
                            href={item || '#'}
                            className='relative before:absolute before:content-[""] hover:text-white before:bg-white before:h-[1px] before:w-0 hover:before:w-full before:transition-all before:left-0 before:-bottom-[4px]'
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <div className='mr-2 text-right max-lg:hidden'>
                  <Link href={service.slug || '#'}>
                    <span className='inline-block transition duration-100 transform group-hover:rotate-45'>
                      <svg
                        width={33}
                        height={33}
                        viewBox='0 0 33 33'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M30 3L3 30'
                          stroke='white'
                          strokeWidth='4.3875'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M30 27.758V3H5.24196'
                          stroke='white'
                          strokeWidth='4.3875'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            );
          })
        : null}
    </Section>
  );
};

export default NewServiceSection;
