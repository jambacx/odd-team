import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import FooterFour from "../common/Footers/FooterFour";
import Header from "../common/Header";
import PortfolioTwoArea from "./PortfolioTwoArea";

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Our team" subtitle="Portfolio" />
      <PortfolioTwoArea />
      <FooterFour />
    </>
  );
};

export default index;
