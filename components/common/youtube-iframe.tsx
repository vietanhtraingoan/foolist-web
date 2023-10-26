import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { BaseComponent } from '../../utils/types/clientTypes';

const YoutubeIframe = ({
  src,
  original,
  onLoad,
  className,
}: {
  src: string;
  original?: boolean;
  onLoad?: () => void;
} & BaseComponent) => {
  if (original) {
    return (
      <div
        className={clsx(
          'w-full relative aspect-video overflow-hidden',
          className
        )}
      >
        <iframe
          onLoad={onLoad}
          className='w-full h-full '
          src={src}
          allowFullScreen={false}
          title='video'
        />
      </div>
    );
  }

  return (
    <div className='relative w-full overflow-hidden pointer-events-none aspect-video'>
      <iframe
        className='w-[300%] -ml-[100%]  h-full '
        src={src}
        onLoad={onLoad}
        allowFullScreen={false}
        title='video'
      />
    </div>
  );
};

export default YoutubeIframe;
