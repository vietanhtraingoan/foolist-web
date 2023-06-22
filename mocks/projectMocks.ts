import project1 from "../public/static/project1.png";
import project2 from "../public/static/project2.png";
import project3 from "../public/static/project3.png";
import projectSub1 from "../public/static/projectSub1.png";
import projectSub3 from "../public/static/projectSub3.png";
import projectSub2 from "../public/static/projectSub2.png"

export const projectMocks = [
  {
    id: "1",
    imgUrl: project1,
    position: 1,
    name: "Travelio",
    title: "project.project1.title",
    intro: "project.project1.intro",
    subImgUrl: projectSub1,
    paragraph1: {
      title: "project.project1.paragraph-1.title",
      content: "project.project1.paragraph-1.content",
    },
    paragraph2: {
      title: "project.project1.paragraph-2.title",
      content: "project.project1.paragraph-2.content",
    },
  },
  {
    id: "2",
    imgUrl: project2,
    position: 2,
    name: "Andromeda",
    title: "project.project2.title",
    intro: "project.project2.intro",
    subImgUrl: projectSub3,
    paragraph1: {
      title: "project.project2.paragraph-1.title",
      content: "project.project2.paragraph-1.content",
    },
    paragraph2: {
      title: "project.project2.paragraph-2.title",
      content: "project.project2.paragraph-2.content",
    },
  },
  {
    id: "3",
    imgUrl: project3,
    position: 3,
    name: "Clor Spa",
    title: "project.project3.title",
    intro: "project.project3.intro",
    subImgUrl: projectSub2,
    paragraph1: {
      title: "project.project3.paragraph-1.title",
      content: "project.project3.paragraph-1.content",
    },
    paragraph2: {
      title: "project.project3.paragraph-2.title",
      content: "project.project3.paragraph-2.content",
    },
  },
];
