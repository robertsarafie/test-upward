import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsiveHome } from '@/components/common/homepage/DataHomeCarousel';
import { HomeCustomDots } from './HomeCustomDots';
import { HomeCustomLeftArrow, HomeCustomRightArrow } from './CustomArrows';

export default function HomeCarousel() {
  return (
    <Carousel
      responsive={responsiveHome}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      customDot={<HomeCustomDots></HomeCustomDots>}
      customRightArrow={<HomeCustomRightArrow></HomeCustomRightArrow>}
      customLeftArrow={<HomeCustomLeftArrow></HomeCustomLeftArrow>}
      dotListClass="custom-dot-list-style-main"
    >
      <div>
        <picture>
          <img src="/images/main-slide/main-slide-image1.png" alt="image1" />
        </picture>
      </div>
      <div>
        <picture>
          <img src="/images/main-slide/main-slide-image2.png" alt="image2" />
        </picture>
      </div>
      <div>
        <picture>
          <img src="/images/main-slide/main-slide-image3.png" alt="image3" />
        </picture>
      </div>
    </Carousel>
  );
}
