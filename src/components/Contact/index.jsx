import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterFour from '../common/Footers/FooterFour';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import ContactArea from './ContactArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="CONTACT US" subtitle="Contact Us" />
      <ContactArea/>
      <FooterFour/>
    </>
  );
};

export default index;