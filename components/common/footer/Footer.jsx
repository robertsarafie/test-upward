export default function Footer() {
  return (
    <>
      <div className="footer-inner">
        <div className="footer-promo">
          <picture>
            <img src="/images/promo.png" alt="Promo" />
          </picture>
        </div>

        <div className="footer-address">
          <div className="footer-address-inner">
            <picture>
              <img src="/images/map.png" alt="Map" />
            </picture>

            <section>
              <form>
                <button type="submit" title="Search">
                  <i className="fa-solid fa-search"></i>
                </button>

                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
              </form>

              <div>
                <h1 className="footer-title">Address</h1>

                <ul className="footer-address-inner-details">
                  <li>100 W. Main Street</li>
                  <li>Springfield, Ohio 45502</li>
                  <li>877.708.9753</li>
                  <li>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      Directions <i className="fa-solid fa-angles-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div className="footer-help">
          <div className="footer-help-inner">
            <h1 className="footer-title">Help is Here</h1>

            <ul className="footer-help-inner-details">
              <li>Surgical Care</li>
              <li>Finding A Surgeon</li>
              <li>Getting To Ohio Valley</li>
              <li>Admission Information</li>
              <li>Common Forms</li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <div className="footer-social-inner">
            <h1 className="footer-title">Connect With Care</h1>

            <ul className="footer-social-inner-details">
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-wifi"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-rights">
        <div className="footer-rights-inner">
          <div className="footer-rights-inner-details">
            <p>© 2013 Ohio Valley Surgical Hospital All Rights Reserved</p>

            <ul>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Site Map
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-rights-inner-logo">
            <picture>
              <img src="/images/axiem-logo.png" alt="Axiem Logo" />
            </picture>
            <p>Web design</p>
          </div>
        </div>
      </div>
    </>
  );
}
