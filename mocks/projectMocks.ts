import project1 from '../public/static/project1.png';
import project2 from '../public/static/project2.png';
import project3 from '../public/static/project3.png';
import projectSub1 from '../public/static/projectSub1.png';
import projectSub3 from '../public/static/projectSub3.png';
import projectSub2 from '../public/static/projectSub2.png';
import projectPresent1 from '../public/static/projectPresent1.png';
import projectPresent2 from '../public/static/projectPresent2.png';
import projectPresent3 from '../public/static/projectPresent3.png';
import projectLarge1 from '../public/static/projectLarge1.png';
import projectLarge2 from '../public/static/projectLarge2.png';
import projectLarge3 from '../public/static/projectLarge3.png';
import sp1 from '../public/images/services/Sp1.png';
import sp2 from '../public/images/services/Sp2.jpg';
import sp3 from '../public/images/services/Sp3.png';
import sp4 from '../public/images/services/Sp4.png';
import sp5 from '../public/images/services/Sp5.jpg';

export const projectMocks = [
  {
    id: '1',
    largeImg: sp1,
    position: 1,
    name: 'Travelio',
    title: 'project.project1.title',
    intro: 'project.project1.intro',
    subImgUrl: projectSub1,
    isVideo: false,
    videoUrl: null,
    projectPresent: projectPresent1,
    paragraph1: {
      title: 'project.project1.paragraph-1.title',
      content: 'project.project1.paragraph-1.content',
    },
    paragraph2: {
      title: 'project.project1.paragraph-2.title',
      content: 'project.project1.paragraph-2.content',
    },
  },
  {
    id: '2',
    largeImg: sp2,
    position: 2,
    name: 'Andromeda',
    title: 'project.project2.title',
    intro: 'project.project2.intro',
    projectPresent: projectPresent2,
    subImgUrl: projectSub2,
    isVideo: false,
    videoUrl: null,
    paragraph1: {
      title: 'project.project2.paragraph-1.title',
      content: 'project.project2.paragraph-1.content',
    },
    paragraph2: {
      title: 'project.project2.paragraph-2.title',
      content: 'project.project2.paragraph-2.content',
    },
  },
  {
    id: '3',
    imgUrl: project3,
    largeImg: sp3,
    position: 3,
    name: 'Clor Spa',
    title: 'project.project3.title',
    intro: 'project.project3.intro',
    projectPresent: projectPresent3,
    isVideo: false,
    videoUrl: null,
    subImgUrl: projectSub3,
    paragraph1: {
      title: 'project.project3.paragraph-1.title',
      content: 'project.project3.paragraph-1.content',
    },
    paragraph2: {
      title: 'project.project3.paragraph-2.title',
      content: 'project.project3.paragraph-2.content',
    },
  },
  {
    id: '4',
    imgUrl: project3,
    largeImg: sp4,
    position: 3,
    isVideo: false,

    videoUrl: 'https://www.youtube.com/watch?v=F084mTHtBpI',
    name: 'Clor Spa',
    title: 'project.project3.title',
    intro: 'project.project3.intro',
    projectPresent: projectPresent3,
    subImgUrl: projectSub3,
    paragraph1: {
      title: 'project.project3.paragraph-1.title',
      content: 'project.project3.paragraph-1.content',
    },
    paragraph2: {
      title: 'project.project3.paragraph-2.title',
      content: 'project.project3.paragraph-2.content',
    },
  },
  {
    id: '5',
    largeImg: sp5,
    position: 3,
    isVideo: false,
    videoUrl: 'https://www.youtube.com/watch?v=F084mTHtBpI',
    name: 'Clor Spa',
    title: 'project.project3.title',
    intro: 'project.project3.intro',
    projectPresent: projectPresent3,
    subImgUrl: projectSub3,
    paragraph1: {
      title: 'project.project3.paragraph-1.title',
      content: 'project.project3.paragraph-1.content',
    },
    paragraph2: {
      title: 'project.project3.paragraph-2.title',
      content: 'project.project3.paragraph-2.content',
    },
  },
];
