import Link from "next/link";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import FooterTwo from "../../components/common/Footers/FooterTwo";
import Header from "../../components/common/Header";
import SEO from "../../components/seo";
import portfolioData from "../../data/portfolioData";
import {useMemberFetcher} from "../../core";
import FooterFour from "../../components/common/Footers/FooterFour";
import AboutMeArea from "../../components/AboutMe/AboutMeArea";
import AboutMeTabs from "../../components/AboutMe/AboutMeTabs";

import Loader from "../../components/Loader";

const PortfolioDetails = () => {
  const {status, response, detail} = useMemberFetcher();

  const router = useRouter();
  const [portfolioItem, setPortfolioItem] = useState({});
  const id = router.query.slug;

  useEffect(() => {
    if (!id) {
    } else {
      setPortfolioItem(portfolioData.find((item) => item.id == id));
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      detail(id);
    }
  }, [id]);

  useEffect(() => {
    if (response) {
      // const brand = fetcher.response.brand;
      console.log(response);
    }
  }, [response]);

  const {data = []} = response || {};

  if (status === "pending") {
    return <Loader />;
  }

  return (
    <>
      <SEO pageTitle="Profile Details" />
      <Header />
      <AboutMeArea data={data} />
      <AboutMeTabs data={data} />
      <FooterFour />
    </>
  );
};

export default PortfolioDetails;
