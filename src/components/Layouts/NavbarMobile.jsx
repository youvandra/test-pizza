import { useContext, useEffect } from "react";
import { Hooks } from "providers";
//tesdfs
function NavbarMobile() {
  const { barMobile, setBarMobile } = useContext(Hooks);
  useEffect(() => {}, [barMobile]);
  return (
    <>
      <div className="navbar-mobile">
        <nav role="navigation">
          <div>
            <a href="http://">
              <span className="connect">Connect Wallet</span>
            </a>
          </div>
          <div id="menuToggle" onClick={() => setBarMobile(!barMobile)}>
            <input type="checkbox" value={barMobile} checked={barMobile} />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu"></ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavbarMobile;
