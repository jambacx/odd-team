import Link from "next/link";
import {useEffect} from "react";
import portfolioData from "../../data/portfolioData";
import Pagination from "../common/Pagination";
import {useMemberFetcher} from "../../core";

const PortfolioTwoArea = () => {
  const {status, response, userList} = useMemberFetcher();

  console.log("response: ", response);
  useEffect(() => {
    userList({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {list = []} = response || {};

  return (
    <>
      <div className="project-list-area pt-140 pb-130">
        <div className="container">
          <div className="row">
            {list.map((item) => (
              <div
                key={item.portfolio_id}
                className="col-xl-3 col-lg-6 col-md-6"
              >
                <div className="tpproject-2 tpproject-3 mb-30">
                  <div
                    className="tpproject-2-thumbnail"
                    style={{
                      backgroundImage: `url(${`https://api.lsknow.ml/upload/${item?.photo}`})`,

                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                    }}
                  ></div>
                  <div className="tpproject-2-text">
                    <span className="catagory mb-10">{item.position}</span>
                    <h5 className="tpproject-2-title">
                      <Link href={`/portfolio-details/${item.portfolio_id}`}>
                        <a>
                          {item.first_name} {item.last_name}
                        </a>
                      </Link>
                    </h5>
                    <div className="tpproject-btn mt-25 mb-10">
                      <Link href={`/portfolio-details/${item.portfolio_id}`}>
                        <a>
                          <i className="flaticon-right-arrow-1"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioTwoArea;
