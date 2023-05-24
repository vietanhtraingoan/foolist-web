import Image from "next/image";
import React from "react";

interface IClientItem {
  data?: any;
}

const classNamePrefix = "client-item";

const ClientItem: React.FC<IClientItem> = (props) => {
  const { data } = props;

  return (
    <div className={`${classNamePrefix}__item-wrapper`}>
      <Image src={data.imgUrl} alt="" width={190} height={80} />
    </div>
  );
};

export default ClientItem;
