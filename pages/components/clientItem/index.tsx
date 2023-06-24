import React from "react";
import { IClient } from "../../../utils/types/clientTypes";

interface IClientItem {
  data: IClient;
}

const classNamePrefix = "client-item";

const ClientItem: React.FC<IClientItem> = (props) => {
  const { data } = props;

  return (
    <div className={`${classNamePrefix}__item-wrapper`}>
      {data ? (
        <img src={data.imgUrl.src} alt="" width={350} height={250} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ClientItem;
