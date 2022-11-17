import React from "react";
import Link from "next/link";

const FooterFour = () => {
  return (
    <>
      <footer>
        <div className="footer__area">
          <div className="footer__top">
            <div className="container">
              <div className="footer__top-inner">
                <div className="row ">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="footer__info d-flex align-items-center">
                      <div className="footer__info-icon mr-20">
                        <span>
                          <i className="fa-solid fa-location-dot"></i>
                        </span>
                      </div>
                      <div className="footer__info-content">
                        <p>
                          <a href="#">
                            MPM Complex - 30, Unesco Street, 14220 Ulaanbaatar,
                            Mongolia
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 d-flex justify-content-md-center">
                    <div className="footer__info d-flex align-items-center">
                      <div className="footer__info-icon mr-20">
                        <span>
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                      </div>
                      <div className="footer__info-content">
                        <p>
                          <a href="odd@mobicom.mn">odd@mobicom.mn</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="footer__widget">
                    <ul id="footer-link-inline">
                      <li>
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about-us">
                          <a>About us</a>
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="/services">
                          <a>Services</a>
                        </Link>
                      </li> */}
                      <li>
                        <Link href="/contact">
                          <a>Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="footer__copyright">
                    <p>
                      © 2022 <a href="#">Mobicom</a> - Outsourcing Development
                      team . All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;
