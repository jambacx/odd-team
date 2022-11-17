import React from "react";

const AboutMeArea = ({data}) => {
  return (
    <>
      <div className="aboutme-area pt-60 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div className="aboutme-image mb-40">
                <div className="main-image">
                  <img
                    // style={{height: 400, width: 400}}
                    className="rounded-circle"
                    src={`https://api.lsknow.ml/upload/${data?.photo}`}
                    alt="about-me img"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div className="aboutme-wrapper mb-40">
                <div className="aboutme-content">
                  <h3 className="tpabout-xd-title mb-30">
                    <b>{data?.first_name}</b> {data?.last_name}
                  </h3>
                  <span className="aboutme-sub-title">{data?.position}</span>
                </div>
                <div className="aboutme-feature-list mt-25">
                  <ul>
                    <li>
                      <p>
                        Experience:<a href="#"> {data?.experience} Years</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        E-mail:
                        <a> {data?.email}</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Skills:
                        <a>
                          {" "}
                          {data?.skill_tags &&
                            typeof data?.skill_tags === "string" &&
                            JSON.parse(data?.skill_tags).join(", ")}
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="aboutme-social mt-40">
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeArea;
