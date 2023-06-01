import React, { useCallback, useEffect, useRef, useState } from "react";
import { projectMocks } from "../../../mocks/projectMocks";
import Image from "next/image";
import { useIdle } from "../../../utils/commonFunstions";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const classNamePrefix = "project-carousel";

const ProjectCarousel = () => {
  // const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [visibleSlide, setVisibleSlide] = useState(3);
  const [targetSlide, setTargetSlide] = useState(3);
  const wrapperRef = useRef(null);
  const targetSlideRef = useRef(null);

  const scrollToTargetSlide = useCallback(() => {
    const targetSlide = targetSlideRef.current;
    const wrapper = wrapperRef.current;
    if (wrapper && targetSlide) {
      wrapper.scrollTo({
        top: 0,
        left: targetSlide.offsetLeft,
        behavior: "smooth",
      });
    }
  }, []);

  const moveLeft = useCallback(
    (targetSlide) => Math.max(0, targetSlide - 1),
    []
  );

  const moveRight = useCallback(
    (targetSlide) => Math.min(targetSlide + 1, projectMocks.length - 1),
    [projectMocks]
  );

  const handleScroll = useCallback(() => {
    let { width } = wrapperRef.current.getBoundingClientRect();
    let { scrollLeft } = wrapperRef.current;

    setVisibleSlide(Math.round(scrollLeft / width));
  }, []);

  useEffect(scrollToTargetSlide, [targetSlide, scrollToTargetSlide]);

  useEffect(() => {
    wrapperRef.current.addEventListener("scroll", handleScroll);

    () => wrapperRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={classNamePrefix} tabIndex={0}>
      <div
        className={`${classNamePrefix}__carousel-container`}
        id="list"
        onScroll={handleScroll}
        ref={wrapperRef}
      >
        {projectMocks.map((proj, index) => (
          <div
            key={proj.id}
            className={`${classNamePrefix}__carousel-item`}
            ref={index === targetSlide ? targetSlideRef : null}
          >
            <Image
              src={proj.imgUrl}
              alt=""
              className={`${classNamePrefix}__carousel-item-img`}
            />
          </div>
        ))}
      </div>

      <div className={`${classNamePrefix}__carousel-button-group`}>
        <button onClick={() => setTargetSlide(moveLeft)}>
          <LeftOutlined rev={true} />
        </button>
        <button onClick={() => setTargetSlide(moveRight)}>
          <RightOutlined rev={true} />{" "}
        </button>
      </div>

      <div className="dots">
        {projectMocks.slice(0, 3).map((photo, index) => (
          <span
            key={photo.id}
            className={
              visibleSlide === index ? "dot-active active" : "dot-normal"
            }
            onClick={() => {
              setTargetSlide(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
