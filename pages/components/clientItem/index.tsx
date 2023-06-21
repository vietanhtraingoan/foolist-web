import Image from "next/image";
import React from "react";
import { IClient } from "../../../utils/types/clientTypes";
import project1 from "../../../public/static/project2.png";

interface IClientItem {
  data: IClient;
}

const classNamePrefix = "client-item";

const ClientItem: React.FC<IClientItem> = (props) => {
  const { data } = props;

  return (
    <div className={`${classNamePrefix}__item-wrapper`}>
      {data ? (
        <Image src={data.imgUrl.src} alt="" width={170} height={85} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ClientItem;
