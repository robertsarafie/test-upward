import Link from 'next/link';

export default function HomeContent() {
  return (
    <>
      <div className="home-content-inner">
        <div className="home-content-nav">
          <Link href="/" title="Find A Physician">
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>Find A Physician
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </Link>

          <Link href="/" title="Surgical Specialites">
            <button>
              <i className="fa-solid fa-stethoscope"></i>Surgical Specialites
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </Link>

          <Link href="/" title="Maps and Directions">
            <button>
              <i className="fa-solid fa-map-location-dot"></i>Maps and
              Directions
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </Link>

          <Link href="/" title="Contact Us">
            <button>
              <i className="fa-solid fa-phone"></i>Contact Us
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </Link>
        </div>

        <div className="home-content-description">
          <h1 className="home-content-title">Ohio Valley Surgical Hospital</h1>
          <p className="home-content-p">
            Neque porro quisquam qui dolorem cwhare. Neque porro quisquam qui
            dolorem cwhare. Neque porro quisquam qui dolorem cwhare. Neque porro
            quisquam qui dolorem cwhare. Neque porro quisquam qui dolorem
            cwhare. Neque porro quisquam qui dolorem cwhare.
          </p>
        </div>

        <div className="home-content-news">
          <h1 className="home-content-title">News and Highlights</h1>
          <div>
            <p className="home-content-p">
              Neque porro quisquam qui dolorem cwhareporro quisquam qui dolorem
              cwhare.
            </p>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Read More <i className="fa-solid fa-angles-right"></i>
            </a>
          </div>

          <div>
            <p className="home-content-p">
              Neque porro quisquam qui dolorem cwhareporro quisquam qui dolorem
              cwhare.
            </p>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Read More <i className="fa-solid fa-angles-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
