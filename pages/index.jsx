import Footer from '@/components/common/footer/Footer';
import Header from '@/components/common/header/Header';
import ArticleCarousel from '@/components/common/homepage/ArticleCarousel';
import HomeCarousel from '@/components/common/homepage/HomeCarousel';
import HomeContent from '@/components/common/homepage/HomeContent';
import Link from 'next/link';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Robert Test Upward</title>
      </Helmet>

      <header className="header">
        <Header></Header>
      </header>

      <main className="content">
        <div className="content-inner">
          <header className="banner-main">
            <HomeCarousel></HomeCarousel>
            <div className="home-carousel-title">
              <p>Surgical Excellence is More than Skin Deep.</p>
              <Link href="/" title="Learn More">
                <button>
                  Learn More <i className="fa-solid fa-angles-right"></i>
                </button>
              </Link>
            </div>
          </header>

          <div className="banner-article">
            <div className="banner-article-container">
              <ArticleCarousel></ArticleCarousel>
            </div>
          </div>
        </div>

        <HomeContent></HomeContent>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
