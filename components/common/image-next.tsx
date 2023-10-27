import Image, { ImageProps } from 'next/image';
import * as React from 'react';
import clsx from 'clsx';
import { Skeleton } from 'antd';
interface Props extends ImageProps {
  width?: number;
  height?: number;
}
export const ImageNext = ({
  className,
  src,
  alt,
  width,
  height,
  sizes,
  ...props
}: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState(src);

  if (!src) return <div> no image</div>;
  if (isLoading) {
    return <Skeleton.Image />;
  }

  return (
    <Image
      onLoadStart={() => {
        setIsLoading(true);
      }}
      onLoadingComplete={() => {
        setIsLoading(false);
      }}
      width={width ?? '0'}
      height={height ?? '0'}
      sizes={sizes ?? '100vw'}
      className={clsx('w-full', className)}
      alt={alt as string}
      // priority={true}
      src={imageSrc as string}
      referrerPolicy='no-referrer'
      // onError={() => {
      //   setImageSrc(imageDefault.src);
      // }}
      {...props}
    />
  );
};
