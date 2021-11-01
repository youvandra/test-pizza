import React from "react";
import Twitter from "assets/img/icons/twitter.png";
import Discord from "assets/img/icons/discord.png";
function Banner() {
  return (
    <>
      <div className="home-banner">
        <div className="link-ext">
          <ul>
            <li>
              <img src={Twitter} alt="" srcset="" width="64px" height="64px" />
            </li>
            <li>
              <img src={Discord} alt="" srcset="" width="64px" height="64px" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Banner;
