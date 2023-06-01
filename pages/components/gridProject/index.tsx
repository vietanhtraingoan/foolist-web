import React, { useState } from "react";
import { projectMocks } from "../../../mocks/projectMocks";
import Image from "next/image";
import ProjectList from "./projectList";

const classNamePrefix = "grid-project";

const GridProject = () => {
  const [viewMore, setViewMore] = useState<boolean>(false);

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__title`}>Features Projects</div>

      {projectMocks ? (
        <ProjectList
          data={viewMore ? projectMocks.slice(0, 3) : projectMocks}
        />
      ) : (
        ""
      )}

      <div
        className={`${classNamePrefix}__show-more-wrapper`}
        onClick={() => setViewMore(!viewMore)}
      >
        <div className={`${classNamePrefix}__show-more-button`}>
          <span>{viewMore ? "Show More" : "Show Less"} </span>
        </div>
      </div>
    </div>
  );
};

export default GridProject;
