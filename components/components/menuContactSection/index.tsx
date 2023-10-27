import Link from 'next/link';
import React from 'react';

const classNamePrefix = 'menu-contact-section';

const MenuContactSection = () => {
  return (
    <div className=' !text-gray-400'>
      <div className='flex items-center gap-3 mb-4'>
        <Link className='text-gray-400' href='tel:(+84)913999345'>
          (+84) 913 999 345
        </Link>
        <Link className='text-gray-400' href='mailto:info@foolist.vn'>
          info@foolist.vn
        </Link>
      </div>
      <div className='text-gray-400'>
        64 Vo Thi Sau,Tan Dinh Ward,District 1,HCM, Viet Nam
      </div>
    </div>
  );
};

export default MenuContactSection;
