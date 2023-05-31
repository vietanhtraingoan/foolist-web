import Image from "next/image";
import React from "react";
import { IClient } from "../../../utils/types/clientTypes";
import tencentLogo from "../public/static/tencentLogo.png";

interface IClientItem {
  data: IClient;
}

const classNamePrefix = "client-item";

const ClientItem: React.FC<IClientItem> = (props) => {
  const { data } = props;

  return (
    <div className={`${classNamePrefix}__item-wrapper`}>
      <Image
        src={data.imgUrl ? data.imgUrl : tencentLogo}
        alt=""
        width={190}
        height={80}
      />
    </div>
  );
};

export default ClientItem;
