import { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

export interface IClient {
  id: number;
  imgUrl: StaticImageData;
}

export interface BaseComponent {
  id?: string;
  children?: ReactNode;
  className?: string;
}
