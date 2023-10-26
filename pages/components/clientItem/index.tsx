import React from 'react';
import { IClient } from '../../../utils/types/clientTypes';
import { ImageNext } from '../../../components/common/image-next';

interface IClientItem {
  data: IClient;
}

const classNamePrefix = 'client-item';

const ClientItem: React.FC<IClientItem> = (props) => {
  const { data } = props;

  return (
    <div className={`${classNamePrefix}__item-wrapper max-w-[250px]`}>
      {data && (
        <ImageNext
          priority={false}
          src={data.imgUrl.src}
          alt=''
          width={350}
          height={250}
        />
      )}
    </div>
  );
};

export default ClientItem;
