import Link from "next/link";

const AboutFive = () => {
  return (
    <>
      <section className="tp-minimal__area position-relative">
        <div
          className="tp-minimal__design-thumb tp-minimal__design-thumb-2"
          style={{
            backgroundImage: `url(assets/img/about/5/ab-img-5.jpg)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        ></div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tp-minimal__design tp-minimal__design-2">
                <div className="tp-minimal__design-wrapper tp-minimal__design-wrapper-2">
                  <h3 className="tpds-title mb-50">
                    Outsourcing
                    <br /> Development <span> team</span>
                  </h3>
                  {/* <p className="tpds-text-2 mb-50">
                    There are many variations of passages of Lorem Ipsum
                    available, but <br /> the majority have suffered alteration.
                  </p> */}
                  <p>
                    We’re international software development team that helps
                    develop ideas from napkin sketches to full-fledged products.
                    Combining our creativity, domain expertise, and product
                    development approach, we deliver products that matter to
                    users and businesses.
                  </p>

                  <div className="tp-minimal__button mt-55">
                    <Link href="/about-us">
                      <a className="tp-solid-btn">About us</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFive;
