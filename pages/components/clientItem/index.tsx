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
      <Image src={project1.src} alt="" width={190} height={80} />
    </div>
  );
};

export default ClientItem;
