import { StaticImageData } from "next/image";

export interface IClient {
  id: number;
  imgUrl: string | StaticImageData;
}
