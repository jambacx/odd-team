import Link from "next/link";
import {CircularProgressbar} from "react-circular-progressbar";

import awardData from "../../data/awardsData";

const AboutMeTabs = ({data}) => {
  return (
    <>
      <div className="aboutme-tabs-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ul className="nav nav-tabs ab-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active ab-tab-item"
                    id="about-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#about"
                    type="button"
                    role="tab"
                    aria-controls="about"
                    aria-selected="true"
                  >
                    About
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link ab-tab-item"
                    id="skills-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#skills"
                    type="button"
                    role="tab"
                    aria-controls="skills"
                    aria-selected="false"
                  >
                    Projects
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content mt-30" id="myTabContent">
            <div
              className="tab-pane fade active show"
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
            >
              <h4 className="tab-pane-title mb-20">
                <b>About me</b>
              </h4>
              <p className="desc">{data?.description}</p>
            </div>
            <div
              className="tab-pane fade"
              id="skills"
              role="tabpanel"
              aria-labelledby="skills-tab"
            >
              <div className="about-award__wrap">
                {/* {Array.isArray(result?.projects) &&
                  result &&
                  result.projects.length > 0 && (
                    <Projects projects={result.projects} />
                  )} */}

                {data?.projects?.length > 0 &&
                  data?.projects?.map((item) => (
                    <div key={item.id} className="tp-award-item mb-30">
                      <div className="award-inner d-md-flex align-items-center">
                        <div className="award-content ml-60">
                          <h4 className="award-title">
                            <Link href="/about-me">
                              <a>{item?.project_name}</a>
                            </Link>
                          </h4>
                          <span className="award-meta">
                            {item?.description}
                          </span>
                        </div>
                      </div>
                      <div className="award-icon">
                        <div className="award-icon-wrap">
                          <Link href="/about-me">
                            <a>
                              <i className="flaticon-right-arrow-1"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeTabs;
