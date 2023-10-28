import React from 'react';
import { BaseComponent } from '../../utils/types/clientTypes';

const PuzzleTopLeft = ({
  bgColor = 'white',
  stokeColor = 'black',
  width = 300,
  height = 300,
  className,
}: BaseComponent & {
  bgColor?: string;
  stokeColor?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 477 504'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='path-2-outside-1_1_444'
        maskUnits='userSpaceOnUse'
        x='35.3813'
        y='33.5509'
        width={407}
        height={471}
        fill={stokeColor}
      >
        <rect fill={bgColor} x='35.3813' y='33.5509' width={407} height={471} />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M39.3813 418.449C37.7245 418.449 36.3813 417.106 36.3813 415.449L36.3814 52.5509C36.3814 42.6098 44.4402 34.5509 54.3814 34.5509L437.619 34.5509C439.276 34.5509 440.619 35.8941 440.619 37.5509V170.694C440.619 172.927 438.259 174.39 436.192 173.549C428.866 170.567 420.797 168.915 412.322 168.915C378.834 168.915 351.686 194.697 351.686 226.5C351.686 258.303 378.834 284.085 412.322 284.085C420.797 284.085 428.866 282.434 436.192 279.451C438.259 278.61 440.619 280.074 440.619 282.306V415.449C440.619 417.106 439.276 418.449 437.619 418.449H297.245C294.957 418.449 293.491 420.922 294.418 423.015C297.456 429.875 299.136 437.412 299.136 445.322C299.136 477.125 271.988 502.907 238.5 502.907C205.012 502.907 177.864 477.125 177.864 445.322C177.864 437.412 179.544 429.875 182.582 423.015C183.508 420.922 182.043 418.449 179.755 418.449H39.3813Z'
        />
      </mask>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M39.3813 418.449C37.7245 418.449 36.3813 417.106 36.3813 415.449L36.3814 52.5509C36.3814 42.6098 44.4402 34.5509 54.3814 34.5509L437.619 34.5509C439.276 34.5509 440.619 35.8941 440.619 37.5509V170.694C440.619 172.927 438.259 174.39 436.192 173.549C428.866 170.567 420.797 168.915 412.322 168.915C378.834 168.915 351.686 194.697 351.686 226.5C351.686 258.303 378.834 284.085 412.322 284.085C420.797 284.085 428.866 282.434 436.192 279.451C438.259 278.61 440.619 280.074 440.619 282.306V415.449C440.619 417.106 439.276 418.449 437.619 418.449H297.245C294.957 418.449 293.491 420.922 294.418 423.015C297.456 429.875 299.136 437.412 299.136 445.322C299.136 477.125 271.988 502.907 238.5 502.907C205.012 502.907 177.864 477.125 177.864 445.322C177.864 437.412 179.544 429.875 182.582 423.015C183.508 420.922 182.043 418.449 179.755 418.449H39.3813Z'
        fill={bgColor}
      />
      <path
        d='M36.3814 52.5509L37.3814 52.5509L36.3814 52.5509ZM54.3814 34.5509V33.5509V34.5509ZM294.418 423.015L293.504 423.42L294.418 423.015ZM436.192 173.549L436.569 172.623L436.192 173.549ZM436.192 279.451L435.814 278.525L436.192 279.451ZM182.582 423.015L181.667 422.61L182.582 423.015ZM35.3814 52.5509L35.3813 415.449L37.3813 415.449L37.3814 52.5509L35.3814 52.5509ZM54.3814 33.5509C43.8879 33.5509 35.3814 42.0575 35.3814 52.5509L37.3814 52.5509C37.3814 43.1621 44.9925 35.5509 54.3814 35.5509V33.5509ZM437.619 33.5509L54.3814 33.5509L54.3814 35.5509L437.619 35.5509L437.619 33.5509ZM441.619 170.694V37.5509H439.619V170.694H441.619ZM412.322 169.915C420.666 169.915 428.607 171.541 435.814 174.475L436.569 172.623C429.125 169.592 420.928 167.915 412.322 167.915V169.915ZM352.686 226.5C352.686 195.297 379.337 169.915 412.322 169.915V167.915C378.331 167.915 350.686 194.097 350.686 226.5H352.686ZM412.322 283.085C379.337 283.085 352.686 257.703 352.686 226.5H350.686C350.686 258.904 378.331 285.085 412.322 285.085V283.085ZM435.814 278.525C428.607 281.459 420.666 283.085 412.322 283.085V285.085C420.928 285.085 429.125 283.408 436.569 280.378L435.814 278.525ZM441.619 415.449V282.306H439.619V415.449H441.619ZM297.245 419.449H437.619V417.449H297.245V419.449ZM300.136 445.322C300.136 437.269 298.426 429.595 295.333 422.61L293.504 423.42C296.487 430.156 298.136 437.556 298.136 445.322H300.136ZM238.5 503.907C272.491 503.907 300.136 477.726 300.136 445.322H298.136C298.136 476.525 271.485 501.907 238.5 501.907V503.907ZM176.864 445.322C176.864 477.726 204.509 503.907 238.5 503.907V501.907C205.515 501.907 178.864 476.525 178.864 445.322H176.864ZM181.667 422.61C178.574 429.595 176.864 437.269 176.864 445.322H178.864C178.864 437.556 180.513 430.156 183.496 423.42L181.667 422.61ZM39.3813 419.449H179.755V417.449H39.3813V419.449ZM297.245 417.449C294.162 417.449 292.314 420.732 293.504 423.42L295.333 422.61C294.669 421.112 295.751 419.449 297.245 419.449V417.449ZM439.619 415.449C439.619 416.554 438.723 417.449 437.619 417.449V419.449C439.828 419.449 441.619 417.658 441.619 415.449H439.619ZM439.619 170.694C439.619 172.156 438.035 173.22 436.569 172.623L435.814 174.475C438.483 175.561 441.619 173.697 441.619 170.694H439.619ZM436.569 280.378C438.035 279.781 439.619 280.844 439.619 282.306H441.619C441.619 279.303 438.483 277.439 435.814 278.525L436.569 280.378ZM183.496 423.42C184.686 420.732 182.837 417.449 179.755 417.449V419.449C181.249 419.449 182.331 421.112 181.667 422.61L183.496 423.42ZM437.619 35.5509C438.723 35.5509 439.619 36.4463 439.619 37.5509H441.619C441.619 35.3418 439.828 33.5509 437.619 33.5509L437.619 35.5509ZM35.3813 415.449C35.3813 417.658 37.1722 419.449 39.3813 419.449V417.449C38.2768 417.449 37.3813 416.554 37.3813 415.449L35.3813 415.449Z'
        fill={stokeColor}
        mask='url(#path-2-outside-1_1_444)'
      />
    </svg>
  );
};

export default PuzzleTopLeft;