import React, { useContext, useEffect } from "react";
import Connect from "components/Transactions";
import { Hooks } from "providers";
function Index() {
  const {
    setScroll,
    scroll,
    barMobile,
    setBarMobile,
    wallet_,
    setWallet_,
    datas,
  } = useContext(Hooks);
  useEffect(() => {}, [datas, wallet_]);
  return (
    <>
      {wallet_ && (
        <div className="menu-purchase">
          <div className="menu-purchase__box">

            <p>DROP IS LIVE</p>
            <div>
              <h1>{datas?.[0] + "/" + datas?.[1]}</h1>
              <h2>DUCKS REMAINING</h2>
            </div>
            {/* <div style={{
              display : wallet_ ? 'display' : 'none'
            }}> */}
            {/* </div> */}
            {/* <div className="menu-purchase__btn connect">PURCHASE</div> */}

          <Connect/>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
