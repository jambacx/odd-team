import dynamic from "next/dynamic";
import HomeFiveMain from "../components/Home-five";
import SEO from "../components/seo";

const index = () => {
  return (
    <>
      <SEO pageTitle="Home" />
      <HomeFiveMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), {ssr: false});
