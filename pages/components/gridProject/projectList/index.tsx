import React from "react";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
            <AnimationOnScroll
              key={item.id}
              animateIn="animate__fadeInUp"
              initiallyVisible={true}
              animateOnce={true}
            >
              <div className={`${classNamePrefix}__item`}>
                <div className={`${classNamePrefix}__image-wrapper`}>
                  <Image
                    className={`${classNamePrefix}__image`}
                    src={item.imgUrl}
                    alt=""
                  />
                </div>
              </div>
            </AnimationOnScroll>
          ))
        : ""}
    </div>
  );
};

export default ProjectList;
