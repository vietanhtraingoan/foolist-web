import React from "react";
import Image from "next/image";

interface IProjectList {
  data: any;
}

const classNamePrefix = "project-list";

const ProjectList: React.FC<IProjectList> = (props) => {
  const { data } = props;

  return (
    <div className={classNamePrefix}>
      {data
        ? data.map((item) => (
            <div key={item.id} className={`${classNamePrefix}__item`}>
              <div className={`${classNamePrefix}__image-wrapper`}>
                <Image
                  className={`${classNamePrefix}__image`}
                  src={item.imgUrl}
                  alt=""
                />
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default ProjectList;
