import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="header-inner">
        <div className="header-inner-container">
          <div className="button-box">
            <button>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          <Link href="/" title="Ohio Valley Logo" className="logo">
            <picture>
              <img src="/images/logo.png" alt="Logo" />
            </picture>
          </Link>

          <div className="header-inner-container-nav">
            <ul className="connect">
              <li>
                <a href="tel:+9375213910" title="Call us">
                  <i className="fa-solid fa-phone"></i> 937.521.3910
                </a>
              </li>

              <li>
                <Link href="/" title="Maps & Directions">
                  Maps & Directions
                </Link>
              </li>

              <li>
                <Link href="/" title="For Patients">
                  For Patients
                </Link>
              </li>

              <li>
                <Link href="/" title="Physician Office Login">
                  Physician Office Login
                </Link>
              </li>
            </ul>

            <ul className="navigation">
              <li>
                <Link href="/" title="About OHIO Valley">
                  About
                  <br />
                  OHIO Valley
                </Link>
              </li>

              <li>
                <Link href="/" title="Surgical Hospital">
                  Surgical
                  <br />
                  Hospital
                </Link>
              </li>

              <li>
                <Link href="/" title="Programs & services">
                  Programs
                  <br />& services
                </Link>
              </li>

              <li>
                <Link href="/" title="Our PHYSICIANS">
                  Our
                  <br />
                  PHYSICIANS
                </Link>
              </li>

              <li>
                <Link href="/" title="Patient & Visitor Info">
                  Patient &<br />
                  Visitor Info
                </Link>
              </li>

              <li>
                <Link href="/" title="Patient Education">
                  Patient
                  <br />
                  Education
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
