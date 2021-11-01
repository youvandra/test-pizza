import React, { useContext, useEffect, useState } from "react";
import LoadingScreen from "components/LoadingScreen";
import Banner from "components/Home/Banner";
import Desc from "components/Home/Desc";
import Menu from "components/Menu";
import Faq from "components/Home/Faq";
import Zoom from "react-reveal/Zoom";
import { Hooks } from "providers";
function Index() {
  const { timer, setTimer } = useContext(Hooks);
  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 5000);
  }, []);
  return (
    <div>
      {timer ? (
        <LoadingScreen />
      ) : (
        <>
          <Zoom top>
            <Banner />
          </Zoom>
          <Menu />
          <Desc />
          <div
            className=""
            style={{
              background: "#8A725C",
              paddingTop: "30px",
              paddingBottom: "70px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <Faq />
          </div>
        </>
      )}
    </div>
  );
}

export default Index;
