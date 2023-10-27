import Image from 'next/image';
import { ImageNext } from '../components/common/image-next';
import imageDV2 from '../public/images/services/DV02.png';
import imageDV4 from '../public/images/services/DV04.png';
import imageDV5 from '../public/images/services/DV05.png';
import imageDV7 from '../public/images/services/DV07.jpg';
import imageDV8 from '../public/images/services/DV08.png';
import imageDV9 from '../public/images/services/DV09.png';
import imageDV1 from '../public/images/services/DV1.png';
import imageDV11 from '../public/images/services/DV11.png';
import imageDV12 from '../public/images/services/DV12.png';
import imageDV3 from '../public/images/services/DV3.png';
import imageDV6 from '../public/images/services/DV6.jpg';
import erp1 from '../public/static/erp1.png';
import productDesign1 from '../public/static/productDesign1.png';
import productDesign2 from '../public/static/productDesign2.png';
import productDesign3 from '../public/static/productDesign3.png';
import productDesign4 from '../public/static/productDesign4.png';
import service1 from '../public/static/service1.png';
import service2 from '../public/static/service2.png';
import service3 from '../public/static/service3.png';
import {
  default as service4,
  default as serviceBg4,
} from '../public/static/service4.png';
import serviceBg1 from '../public/static/serviceBg1.png';
import serviceBg2 from '../public/static/serviceBg2.png';
import serviceBg3 from '../public/static/serviceBg3.png';
import servicePresent1 from '../public/static/servicePresent1.png';
import servicePresent2 from '../public/static/servicePresent2.png';
import servicePresent3 from '../public/static/servicePresent3.png';
import servicePresent4 from '../public/static/servicepresent4.png';
import tvc1 from '../public/static/tvc1.png';
import tvc2 from '../public/static/tvc2.png';
import tvc3 from '../public/static/tvc3.png';
import tvc4 from '../public/static/tvc4.png';
import webDesign1 from '../public/static/webDesign1.png';
import webDesign2 from '../public/static/webDesign2.png';
import webDesign3 from '../public/static/webDesign3.png';

export const services = [
  {
    title: 'Chiến lược thương hiệu',
    titleEn: 'Brand Strategy',
    description:
      'Foolist sẽ đưa ra cho khách hàng và đối tác những thông tin, dữ liệu, phân tích, báo cáo. Từ đó, rút ra “Insight Findings” trả lời cho câu hỏi mà doanh nghiệp đặt ra. ',
    descriptionEn:
      'Foolist will provide customers and partners with information, data, analysis, and reports. From there, "Insight Findings" are drawn to answer the questions that businesses pose. By researching and deepening consumer attitudes and behaviors, we ensure to support all product business strategies and business development strategies',
    slug: 'chien-luoc-thuong-hieu',
    enSlug: 'brand-strategy',
    image: imageDV1.src,
    content: (
      <>
        <h2>Nghiên cứu thị trường</h2>
        <p>
          Foolist sẽ đưa ra cho khách hàng và đối tác những thông tin, dữ liệu,
          phân tích, báo cáo. Từ đó, rút ra “Insight Findings” trả lời cho câu
          hỏi mà doanh nghiệp đặt ra. Với việc nghiên cứu, đào sâu thái độ và
          hành vi của người tiêu dùng, chúng tôi đảm bảo sẽ hỗ trợ cho mọi hoạt
          động chiến lược kinh doanh sản phẩm và chiến lược phát triển doanh
          nghiệp của khách hàng và đối tác sẽ vận hành một cách trơn tru và hiệu
          quả hơn.
        </p>
        <ImageNext
          alt='Nghiên cứu thị trường'
          src={imageDV2.src}
          blurDataURL={imageDV2.blurDataURL}
          height={imageDV2.height}
          width={imageDV2.width}
        />
        <p>
          Ngoài ra, với dịch vụ nghiên cứu thị trường, Foolist sẽ giúp những
          khách hàng và đối tác của chúng tôi nhận được đánh giá và phân tích
          những mặt đã làm tốt cũng như hạn chế của đối thủ. Từ đó, góp phần
          giúp doanh nghiệp của bạn có những quyết định đúng đắn trong quá trình
          tung sản phẩm mới hoặc xây dựng chiến lược phát triển dài lâu.
        </p>
        <h2>Xây dựng thương hiệu</h2>
        <p>
          Bước đầu tiên khi Foolist bắt đầu chiến lược xây dựng thương hiệu là
          thiết lập mục tiêu dự định của thương hiệu (nhận thức, cung cấp thông
          tin, tăng mức độ ưa thích,...) và phát triển thông điệp xung quanh mục
          tiêu đó. Bởi chúng tôi hiểu nhiều thương hiệu quan tâm đến mục tiêu
          nằm ở phần dưới phễu tiếp thị như chuyển đổi, song chìa khóa thực sự
          để xây dựng thương hiệu là cách tiếp cận phễu đầy đủ trong toàn bộ
          hành trình của khách hàng, đồng thời biết ngân sách quảng cáo của bạn
          sẽ hiệu quả nhất ở đâu mà không làm bão hòa đối tượng quá mức. Tại
          Foolist, chúng tôi nắm rõ phương thức giúp thương hiệu của bạn xuất
          hiện đầu tiên trong tâm trí khách hàng tiềm năng mỗi khi họ bắt đầu
          cân nhắc các quyết định mua sắm.
        </p>
        <ImageNext
          alt='Xây dựng thương hiệu'
          src={imageDV3.src}
          blurDataURL={imageDV3.blurDataURL}
          height={imageDV3.height}
          width={imageDV3.width}
        />

        <h2>Định vị thương hiệu</h2>
        <p>
          Foolist sẽ dùng bản sắc sáng tạo riêng biệt của mình để tạo ra cho
          khách hàng và đối tác một thương hiệu hình ảnh riêng biệt so với các
          thương hiệu khác bằng các chiến lược sau:
          <ul>
            <li>Định vị dựa vào vấn đề, giải pháp</li>
            <li>Định vị dựa vào tính năng</li> <li>Định vị theo chất lượng</li>
            <li>Định vị dựa vào đối thủ</li> <li>Định vị dựa vào giá trị</li>
            <li>Định vị dựa vào công dụng</li>
            <li>Định vị dựa vào mối quan hệ</li>
            <li>Định vị dựa vào mong ước</li> <li>Định vị dựa vào cảm xúc</li>
          </ul>
          Những chiến lược trên sẽ thể hiện bằng hình ảnh
        </p>
        <ImageNext
          alt='Định vị thương hiệu'
          src={imageDV4.src}
          blurDataURL={imageDV4.blurDataURL}
          height={imageDV4.height}
          width={imageDV4.width}
        />
        <h2>Phát triển thương hiệu</h2>
        <p>
          Khách hàng và đối tác sẽ dựa vào nội lực của mình, kèm theo đó là
          ngoại lực mạnh mẽ từ Foolist để tiến tới việc mở rộng kinh doanh, làm
          tăng độ uy tín, tin cậy, chất lượng cho thương hiệu; đồng thời cũng
          tạo ra những chiều hướng mới hay những lĩnh vực kinh doanh đa dạng hơn
          cho thương hiệu mà bạn xây dựng. Foolist đảm bảo sẽ đồng hành trên
          hành trình đi đến thành công của doanh nghiệp, công ty của bạn.
        </p>
      </>
    ),
    contentEn: (
      <>
        <h2>Market research</h2>
        <p>
          Foolist will provide customers and partners with information, data,
          analysis, and reports. From there, "Insight Findings" are drawn to
          answer the questions that businesses pose. By researching and
          deepening consumer attitudes and behaviors, we ensure to support all
          product business strategies and business development strategies of
          customers and operating partners. more smoothly and efficiently
        </p>
        <ImageNext
          alt='Market research'
          src={imageDV2.src}
          blurDataURL={imageDV2.blurDataURL}
          height={imageDV2.height}
          width={imageDV2.width}
        />
        <p>
          In addition, with market research services, Foolist will help our
          customers and partners receive reviews and analyzes of what
          competitors do well and what they do poorly. From there, it helps your
          business make the right decisions in the process of launching new
          products or building a long-term development strategy.
        </p>
        <h2>Branding</h2>
        <p>
          The first step when Foolist begins a branding strategy is to establish
          the intended brand objective (awareness, information, increase
          favorability, etc.) and develop messaging around the objective. spend
          that. Because we understand many brands are interested in lower-funnel
          marketing goals like conversions, but the real key to building a brand
          is a full-funnel approach across the entire customer journey, while
          simultaneously now know where your advertising budget will be most
          effective without over-saturating your audience. At Foolist, we
          understand how to help your brand appear first in the minds of
          potential customers every time they start considering purchasing
          decisions.
        </p>
        <ImageNext
          alt='Branding'
          src={imageDV3.src}
          blurDataURL={imageDV3.blurDataURL}
          height={imageDV3.height}
          width={imageDV3.width}
        />

        <h2>Brand Positioning</h2>
        <p>
          Foolist will use its unique creative identity to create for customers
          and partners a unique brand image compared to other brands using the
          following strategies:
          <ul>
            <li>Positioning based on problems and solutions</li>
            <li>Positioning based on features</li>
            <li>Positioning by quality</li>
            <li>Positioning based on competitors</li>
            <li>Positioning based on value</li>
            <li>Positioning based on use</li>
            <li>Positioning is based on relationships</li>
            <li>Positioning based on wishes</li>
            <li>Positioning based on emotions</li>
          </ul>
        </p>
        <ImageNext
          alt='Brand Positioning'
          src={imageDV4.src}
          blurDataURL={imageDV4.blurDataURL}
          height={imageDV4.height}
          width={imageDV4.width}
        />
        <h2>Brand developping</h2>
        <p>
          Customers and partners will rely on their internal strength,
          accompanied by strong external forces from Foolist to expand their
          business, increasing the reputation, trust, and quality of the brand;
          At the same time, it also creates new dimensions or more diverse
          business fields for the brand you build. Foolist guarantees to
          accompany you on the journey to success of your business or company.
        </p>
      </>
    ),
  },
  {
    title: 'Sản xuất media',
    titleEn: 'Media production',
    description:
      'Với đội ngủ trẻ trung, sáng tạo nhưng không kém phần tỉ mỉ, Foolist sẽ tạo ra những sản phẩm có tính thẩm mỹ cao, đánh thẳng vào tâm thức của công chúng cho những khách hàng và đối tác của mình',
    descriptionEn:
      'With a young, creative but no less meticulous team, Foolist will create highly aesthetic products, directly hitting the public consciousness for its customers and partners, through various methods. consciousness like',
    slug: 'san-xuat-media',
    enSlug: 'media-production',
    image: imageDV5.src,
    content: (
      <>
        <p>
          Với đội ngủ trẻ trung, sáng tạo nhưng không kém phần tỉ mỉ, Foolist sẽ
          tạo ra những sản phẩm có tính thẩm mỹ cao, đánh thẳng vào tâm thức của
          công chúng cho những khách hàng và đối tác của mình, thông qua các
          phương thức như:
        </p>
        <ul>
          <li>
            <p>Chụp hình</p>
            <Image
              height={imageDV6.height}
              width={imageDV6.width}
              blurDataURL={imageDV6.blurDataURL}
              src={imageDV6.src}
              alt='chup-hinh'
            />
          </li>
          <li>
            <p>Quay phim</p>
            <Image
              height={imageDV7.height}
              width={imageDV7.width}
              blurDataURL={imageDV7.blurDataURL}
              src={imageDV7.src}
              alt='Quay phim'
            />
          </li>
          <li>
            <p>Dựng video</p>
          </li>
          <li>
            <p>Thiết kế hình ảnh</p>
            <Image
              src={imageDV8.src}
              height={imageDV8.height}
              width={imageDV8.width}
              blurDataURL={imageDV8.blurDataURL}
              alt='Thiết kế hình ảnh'
            />
          </li>
          <li>
            <p>Thiết kế đồ họa</p>
            <Image
              height={imageDV9.height}
              width={imageDV9.width}
              blurDataURL={imageDV9.blurDataURL}
              src={imageDV9.src}
              alt='Thiết kế đồ họa'
            />
          </li>
          <li>
            <p>3D Design</p>
            <video autoPlay controls={false}>
              <source src='/videos/DV10.webm'></source>
            </video>
          </li>
        </ul>
      </>
    ),
    contentEn: (
      <>
        <p>
          With a young, creative but no less meticulous team, Foolist will
          create highly aesthetic products, directly hitting the public
          consciousness for its customers and partners, through various methods.
          consciousness like:
        </p>
        <ul>
          <li>
            <p>Photography</p>
            <Image
              height={imageDV6.height}
              width={imageDV6.width}
              blurDataURL={imageDV6.blurDataURL}
              src={imageDV6.src}
              alt='Photography'
            />
          </li>
          <li>
            <p>Filming</p>
            <Image
              height={imageDV7.height}
              width={imageDV7.width}
              blurDataURL={imageDV7.blurDataURL}
              src={imageDV7.src}
              alt='Filming'
            />
          </li>
          <li>
            <p>Video editing</p>
          </li>
          <li>
            <p>Image design</p>
            <Image
              src={imageDV8.src}
              height={imageDV8.height}
              width={imageDV8.width}
              blurDataURL={imageDV8.blurDataURL}
              alt='Image design'
            />
          </li>
          <li>
            <p>Graphic design</p>
            <Image
              height={imageDV9.height}
              width={imageDV9.width}
              blurDataURL={imageDV9.blurDataURL}
              src={imageDV9.src}
              alt='Graphic design'
            />
          </li>
          <li>
            <p>3D Design</p>
            <video autoPlay controls={false}>
              <source src='/videos/DV10.webm'></source>
            </video>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'TRUYỀN THÔNG',
    titleEn: 'The media',
    description:
      'Foolist hiểu rõ truyền thông đóng vai trò sống còn trong quá trình xây dựng và phát triển thương hiệu của một doanh nghiệp. Vì vậy, Foolist đảm bảo sẽ thông qua hoạt động truyền thông đến các đối tượng khác nhau như công chúng, khách hàng tiềm năng, đối tác, đối thủ cạnh tranh,…',
    descriptionEn:
      'Foolist understands that communication plays a vital role in the process of building and developing the brand of a business. Therefore, Foolist ensures that through communication activities to different audiences such as the public, potential customers, partners, competitors,... ',
    slug: 'truyen-thong',
    enSlug: 'the-media',
    image: imageDV11.src,
    content: (
      <>
        <p>
          Foolist hiểu rõ truyền thông đóng vai trò sống còn trong quá trình xây
          dựng và phát triển thương hiệu của một doanh nghiệp. Vì vậy, Foolist
          đảm bảo sẽ thông qua hoạt động truyền thông đến các đối tượng khác
          nhau như công chúng, khách hàng tiềm năng, đối tác, đối thủ cạnh
          tranh,… và cả nhân viên trong doanh nghiệp đó, để khách hàng và đối
          tác của chúng tôi được nhiều người biết và tạo ra sự quan tâm, ủng hộ
          từ các đối tượng mục tiêu.
        </p>
        <p>Foolist sử dụng 4 phương tiện truyền thông chính bao gồm:</p>
        <ul>
          <li>Quảng cáo</li>
          <li>PR</li>
          <li>Marketing</li>
          <li>Social media</li>
        </ul>
        <Image
          alt='Truyền thông'
          src={imageDV12.src}
          height={imageDV12.height}
          width={imageDV12.width}
          blurDataURL={imageDV12.blurDataURL}
        />
      </>
    ),
    contentEn: (
      <>
        <p>
          Foolist understands that communication plays a vital role in the
          process of building and developing the brand of a business. Therefore,
          Foolist ensures that through communication activities to different
          audiences such as the public, potential customers, partners,
          competitors,... and even employees in that business, so that customers
          and Our partners are well known and generate interest and support from
          the target audience.
        </p>
        <p>Foolist uses 4 main media including:</p>
        <ul>
          <li>Advertisement</li>
          <li>PR</li>
          <li>Marketing</li>
          <li>Social media</li>
        </ul>
        <Image
          alt='Truyền thông'
          src={imageDV12.src}
          height={imageDV12.height}
          width={imageDV12.width}
          blurDataURL={imageDV12.blurDataURL}
        />
      </>
    ),
  },
];

export const ServicesMock = [
  {
    id: '1',
    title: 'tvc',
    imgeUrl: service1,
    bg: serviceBg1,
    presentImg: servicePresent1,
    subImg: [
      {
        id: 1,
        item: tvc1,
      },
      {
        id: 2,
        item: tvc3,
      },
      {
        id: 3,
        item: tvc2,
      },
      {
        id: 4,
        item: tvc4,
      },
    ],
    content: {
      paragraphTitle1: 'service.detail.detail1.paragraphTitle1',
      paragraphTitle2: 'service.detail.detail1.paragraphTitle2',
      paragraphTitle3: 'service.detail.detail1.paragraphTitle3',
      paragraphTitle4: 'service.detail.detail1.paragraphTitle4',
      first: 'service.detail.detail1.first',
      second: 'service.detail.detail1.second',
      third: 'service.detail.detail1.third',
      fourth: 'service.detail.detail1.fourth',
      fifth: 'service.detail.detail1.fifth',
      sixth: 'service.detail.detail1.sixth',
    },
  },
  {
    id: '2',
    title: 'service.product-design',
    imgeUrl: service2,
    bg: serviceBg2,
    presentImg: servicePresent2,
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
      paragraphTitle1: '',
      paragraphTitle2: '',
      paragraphTitle3: '',
      paragraphTitle4: '',
      first: 'service.detail.detail2.first',
      second: 'service.detail.detail2.second',
      third: 'service.detail.detail2.third',
      fourth: 'service.detail.detail2.fourth',
      fifth: 'service.detail.detail2.fifth',
      sixth: 'service.detail.detail2.sixth',
    },
  },
  {
    id: '3',
    title: 'website',
    imgeUrl: service3,
    bg: serviceBg3,
    presentImg: servicePresent3,
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
      paragraphTitle1: '',
      paragraphTitle2: '',
      paragraphTitle3: '',
      paragraphTitle4: '',
      first: 'service.detail.detail3.first',
      second: 'service.detail.detail3.second',
      third: 'service.detail.detail3.third',
      fourth: 'service.detail.detail3.fourth',
      fifth: 'service.detail.detail3.fifth',
      sixth: 'service.detail.detail3.sixth',
    },
  },
  {
    id: '4',
    title: 'erp',
    imgeUrl: service4,
    bg: serviceBg4,
    presentImg: servicePresent4,
    subImg: [
      {
        id: 1,
        item: erp1,
      },
    ],
    content: {
      paragraphTitle1: '',
      paragraphTitle2: '',
      paragraphTitle3: '',
      paragraphTitle4: '',
      first: 'service.detail.detail4.first',
      second: 'service.detail.detail4.second',
      third: 'service.detail.detail4.third',
      fourth: 'service.detail.detail4.fourth',
      fifth: 'service.detail.detail4.fifth',
    },
  },
];
