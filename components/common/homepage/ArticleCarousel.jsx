import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsiveArticle, articleData } from './DataArticleCarousel';
import Article from './Article';
import { ArticleCustomDots } from './ArticleCustomDots';
import { HomeCustomLeftArrow, HomeCustomRightArrow } from './CustomArrows';

export default function ArticleCarousel() {
  const article = articleData.map((item) => (
    <Article
      key={item.id}
      url={item.imageUrl}
      title={item.title}
      description={item.description}
      button={item.button}
    ></Article>
  ));

  return (
    <Carousel
      responsive={responsiveArticle}
      showDots={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      customDot={<ArticleCustomDots></ArticleCustomDots>}
      customRightArrow={<HomeCustomRightArrow></HomeCustomRightArrow>}
      customLeftArrow={<HomeCustomLeftArrow></HomeCustomLeftArrow>}
      renderDotsOutside={true}
      infinite={true}
      dotListClass="custom-dot-list-style-article"
      itemClass="carousel-item-padding-5-px"
      containerClass="carousel-container"
    >
      {article}
    </Carousel>
  );
}
