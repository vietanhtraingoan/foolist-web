import React from "react";
import projectImage from "../../../public/static/project3.png";

const classNamePrefix = "mansory-item-card";

const MansoryItemCard = () => {
  return (
    <div className={`${classNamePrefix}__item`}>
      <div
        className={`${classNamePrefix}__item-image`}
        style={{
          backgroundImage: `url(${projectImage.src})`,
        }}
      >
        <div className="item-image-layer">
          <div className="item-image-layer-content">
            <div>test</div>
          </div>
        </div>
      </div>

      {/* <div className={`${classNamePrefix}__item-info`}>
          <span>Post number {index + 1}</span>
          <span>{p.title}</span>
          <div>{p.message}</div>
        </div> */}
    </div>
  );
};

export default MansoryItemCard;
