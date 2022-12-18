import React from "react";

// 헤더
import Header from "../include/Header";

// 섹션
import Contents from "../layout/Contents";
import Section01 from "../include/Section01";
import Section02 from "../include/Section02";
import Section03 from "../include/Section03";
import Section04 from "../include/Section04";
import Section05 from "../include/Section05";
import Section06 from "../include/Section06";

import ImgLoader from "../include/ImgLoader";

const Main = () => {
  return (
    <>
      <Header />
      <Contents>
        <ImgLoader />
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
      </Contents>
    </>
  );
};

export default Main;
