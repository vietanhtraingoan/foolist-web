import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from 'react-loading-skeleton';
import { ImageNext } from '../../../../components/common/image-next';

interface IProjectList {
  data: any;
}

const classNamePrefix = 'project-list';

const ProjectList: React.FC<IProjectList> = (props) => {
  const { data } = props;

  const router = useRouter();

  return (
    <div className={classNamePrefix}>
      {data
        ? data.map((item: any) => (
            <AnimationOnScroll
              key={item.id}
              animateIn='animate__zoomIn'
              animateOnce={true}
            >
              <div
                className={`${classNamePrefix}__item`}
                onClick={() => router.push(`/projectDetail?id=${item.id}`)}
              >
                <ImageNext src={item.imgUrl.src} alt='image' />
              </div>
            </AnimationOnScroll>
          ))
        : ''}
    </div>
  );
};

export default ProjectList;
