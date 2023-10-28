import React from 'react';
import { BaseComponent } from '../../utils/types/clientTypes';

const PuzzleBottomLeft = ({
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
      viewBox='0 0 531 453'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='path-2-outside-1_403_244'
        maskUnits='userSpaceOnUse'
        x='34.5508'
        y='33.4492'
        width={496}
        height={386}
        fill={stokeColor}
      >
        <rect fill={bgColor} x='34.5508' y='33.4492' width={496} height={386} />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M437.619 34.5509C439.276 34.5509 440.619 35.894 440.619 37.5509L440.619 170.694C440.619 172.927 442.978 174.39 445.046 173.549C452.371 170.567 460.44 168.915 468.915 168.915C502.403 168.915 529.551 194.697 529.551 226.5C529.551 258.303 502.403 284.085 468.915 284.085C460.44 284.085 452.371 282.434 445.046 279.451C442.978 278.61 440.619 280.074 440.619 282.306L440.619 415.449C440.619 417.106 439.275 418.449 437.619 418.449L54.3813 418.449C44.4402 418.449 36.3813 410.39 36.3813 400.449L36.3813 37.5509C36.3813 35.894 37.7245 34.5509 39.3813 34.5509H179.755C182.043 34.5509 183.509 37.0239 182.582 39.1164C179.544 45.9771 177.864 53.5142 177.864 61.4238C177.864 93.2269 205.012 119.008 238.5 119.008C271.988 119.008 299.136 93.2269 299.136 61.4237C299.136 53.5142 297.456 45.9771 294.418 39.1164C293.491 37.0239 294.957 34.5509 297.245 34.5509L437.619 34.5509Z'
        />
      </mask>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M437.619 34.5509C439.276 34.5509 440.619 35.894 440.619 37.5509L440.619 170.694C440.619 172.927 442.978 174.39 445.046 173.549C452.371 170.567 460.44 168.915 468.915 168.915C502.403 168.915 529.551 194.697 529.551 226.5C529.551 258.303 502.403 284.085 468.915 284.085C460.44 284.085 452.371 282.434 445.046 279.451C442.978 278.61 440.619 280.074 440.619 282.306L440.619 415.449C440.619 417.106 439.275 418.449 437.619 418.449L54.3813 418.449C44.4402 418.449 36.3813 410.39 36.3813 400.449L36.3813 37.5509C36.3813 35.894 37.7245 34.5509 39.3813 34.5509H179.755C182.043 34.5509 183.509 37.0239 182.582 39.1164C179.544 45.9771 177.864 53.5142 177.864 61.4238C177.864 93.2269 205.012 119.008 238.5 119.008C271.988 119.008 299.136 93.2269 299.136 61.4237C299.136 53.5142 297.456 45.9771 294.418 39.1164C293.491 37.0239 294.957 34.5509 297.245 34.5509L437.619 34.5509Z'
        fill={bgColor}
      />
      <path
        d='M529.551 226.5L528.551 226.5L528.551 226.5L529.551 226.5ZM54.3813 418.449L54.3813 419.449L54.3813 418.449ZM36.3813 400.449H35.3813H36.3813ZM294.418 39.1164L293.504 39.5213L294.418 39.1164ZM182.582 39.1164L183.496 39.5213L182.582 39.1164ZM36.3813 37.5509H37.3813H36.3813ZM445.046 279.451L445.423 278.525L445.046 279.451ZM445.046 173.549L444.669 172.623L445.046 173.549ZM441.619 170.694L441.619 37.5509H439.619L439.619 170.694H441.619ZM468.915 167.915C460.31 167.915 452.113 169.592 444.669 172.623L445.423 174.475C452.63 171.541 460.571 169.915 468.915 169.915V167.915ZM530.551 226.5C530.551 194.097 502.906 167.915 468.915 167.915V169.915C501.9 169.915 528.551 195.297 528.551 226.5H530.551ZM468.915 285.085C502.906 285.085 530.551 258.903 530.551 226.5L528.551 226.5C528.551 257.703 501.9 283.085 468.915 283.085V285.085ZM444.669 280.378C452.113 283.408 460.31 285.085 468.915 285.085V283.085C460.571 283.085 452.63 281.459 445.423 278.525L444.669 280.378ZM441.619 415.449L441.619 282.306L439.619 282.306L439.619 415.449L441.619 415.449ZM54.3813 419.449L437.619 419.449L437.619 417.449L54.3813 417.449L54.3813 419.449ZM35.3813 400.449C35.3813 410.943 43.8879 419.449 54.3813 419.449L54.3813 417.449C44.9925 417.449 37.3813 409.838 37.3813 400.449H35.3813ZM35.3813 37.5509L35.3813 400.449H37.3813L37.3813 37.5509H35.3813ZM179.755 33.5509H39.3813V35.5509H179.755V33.5509ZM178.864 61.4238C178.864 53.6573 180.513 46.2579 183.496 39.5213L181.667 38.7115C178.574 45.6963 176.864 53.3711 176.864 61.4238H178.864ZM238.5 118.008C205.515 118.008 178.864 92.6266 178.864 61.4238H176.864C176.864 93.8272 204.509 120.008 238.5 120.008V118.008ZM298.136 61.4237C298.136 92.6266 271.485 118.008 238.5 118.008V120.008C272.491 120.008 300.136 93.8272 300.136 61.4237H298.136ZM293.504 39.5213C296.487 46.2578 298.136 53.6573 298.136 61.4237H300.136C300.136 53.3711 298.426 45.6963 295.333 38.7115L293.504 39.5213ZM437.619 33.5509L297.245 33.5509V35.5509L437.619 35.5509V33.5509ZM295.333 38.7115C294.669 37.2139 295.751 35.5509 297.245 35.5509V33.5509C294.162 33.5509 292.314 36.8339 293.504 39.5213L295.333 38.7115ZM179.755 35.5509C181.249 35.5509 182.331 37.2139 181.667 38.7115L183.496 39.5213C184.686 36.8339 182.838 33.5509 179.755 33.5509V35.5509ZM37.3813 37.5509C37.3813 36.4463 38.2768 35.5509 39.3813 35.5509V33.5509C37.1722 33.5509 35.3813 35.3417 35.3813 37.5509H37.3813ZM439.619 415.449C439.619 416.554 438.723 417.449 437.619 417.449L437.619 419.449C439.828 419.449 441.619 417.658 441.619 415.449L439.619 415.449ZM441.619 37.5509C441.619 35.3417 439.828 33.5509 437.619 33.5509V35.5509C438.723 35.5509 439.619 36.4463 439.619 37.5509H441.619ZM445.423 278.525C442.754 277.439 439.619 279.303 439.619 282.306L441.619 282.306C441.619 280.844 443.202 279.781 444.669 280.378L445.423 278.525ZM439.619 170.694C439.619 173.697 442.754 175.561 445.423 174.475L444.669 172.623C443.202 173.22 441.619 172.156 441.619 170.694H439.619Z'
        fill={stokeColor}
        mask='url(#path-2-outside-1_403_244)'
      />
    </svg>
  );
};

export default PuzzleBottomLeft;
