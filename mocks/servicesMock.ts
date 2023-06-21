import service1 from "../public/static/service1.png";
import service2 from "../public/static/service2.png";
import service3 from "../public/static/service3.png";
import service4 from "../public/static/service4.png";
import serviceBg1 from "../public/static/serviceBg1.png";
import serviceBg2 from "../public/static/serviceBg2.png";
import serviceBg3 from "../public/static/serviceBg3.png";
import serviceBg4 from "../public/static/service4.png";
import tvc1 from "../public/static/tvc1.png";
import tvc2 from "../public/static/tvc2.png";
import tvc3 from "../public/static/tvc3.png";
import tvc4 from "../public/static/tvc4.png";
import productDesign1 from "../public/static/productDesign1.png";
import productDesign2 from "../public/static/productDesign2.png";
import productDesign3 from "../public/static/productDesign3.png";
import productDesign4 from "../public/static/productDesign4.png";
import webDesign1 from "../public/static/webDesign1.png";
import webDesign2 from "../public/static/webDesign2.png";
import webDesign3 from "../public/static/webDesign3.png";
import erp1 from "../public/static/erp1.png";

export const ServicesMock = [
  {
    id: "1",
    title: "tvc",
    imgeUrl: service1,
    bg: serviceBg1,
    subImg: [
      {
        id: 1,
        item: tvc1,
      },
      {
        id: 2,
        item: tvc2,
      },
      {
        id: 3,
        item: tvc3,
      },
      {
        id: 4,
        item: tvc4,
      },
    ],
    content: {
      paragraphTitle1: "service.detail.detail1.paragraphTitle1",
      paragraphTitle2: "service.detail.detail1.paragraphTitle2",
      paragraphTitle3: "service.detail.detail1.paragraphTitle3",
      paragraphTitle4: "service.detail.detail1.paragraphTitle4",
      first: "service.detail.detail1.first",
      second: "service.detail.detail1.second",
      third: "service.detail.detail1.third",
      fourth: "service.detail.detail1.fourth",
      fifth: "service.detail.detail1.fifth",
      sixth: "service.detail.detail1.sixth"
    },
  },
  {
    id: "2",
    title: "product design",
    imgeUrl: service2,
    bg: serviceBg2,
    subImg: [
      {
        id: 1,
        item: productDesign1,
      },
      {
        id: 2,
        item: productDesign2,
      },
      {
        id: 3,
        item: productDesign3,
      },
      {
        id: 4,
        item: productDesign4,
      },
    ],
    content: {
      paragraphTitle1: "",
      paragraphTitle2: "",
      paragraphTitle3: "",
      paragraphTitle4: "",
      first: "service.detail.detail2.first",
      second: "service.detail.detail2.second",
      third: "service.detail.detail2.third",
      fourth: "service.detail.detail2.fourth",
      fifth: "service.detail.detail2.fifth",
      sixth: "service.detail.detail2.sixth",
    },
  },
  {
    id: "3",
    title: "website",
    imgeUrl: service3,
    bg: serviceBg3,
    subImg: [
      {
        id: 1,
        item: webDesign1,
      },
      {
        id: 2,
        item: webDesign2,
      },
      {
        id: 3,
        item: webDesign3,
      },
    ],
    content: {
      paragraphTitle1: "",
      paragraphTitle2: "",
      paragraphTitle3: "",
      paragraphTitle4: "",
      first: "service.detail.detail3.first",
      second: "service.detail.detail3.second",
      third: "service.detail.detail3.third",
      fourth: "service.detail.detail3.fourth",
      fifth: "service.detail.detail3.fifth",
      sixth: "service.detail.detail3.sixth",
    },
  },
  {
    id: "4",
    title: "erp",
    imgeUrl: service4,
    bg: serviceBg4,
    subImg: [
      {
        id: 1,
        item: erp1,
      },
    ],
    content: {
      paragraphTitle1: "",
      paragraphTitle2: "",
      paragraphTitle3: "",
      paragraphTitle4: "",
      first: "service.detail.detail4.first",
      second: "service.detail.detail4.second",
      third: "service.detail.detail4.third",
      fourth: "service.detail.detail4.fourth",
      fifth: "service.detail.detail4.fifth",
    },
  },
];
