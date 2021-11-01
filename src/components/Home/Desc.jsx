import React, { useContext } from "react";
import Roadmap from "assets/img/roadmap.jpg";
import Pizza from "assets/img/pizza.png";

import Fade from "react-reveal/Fade";
import { Hooks } from "providers";
function Desc() {
  const { barMobile, setBarMobile } = useContext(Hooks);
  return (
    <>
      <div className="home-desc" id="home-desc">
        <div className="container">
          <ol>
            <Fade bottom>
              <li>
                <div className="title">What is NFT Pizzeria?</div>
                <div className="flex-only">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      // flexDirection: row;
                      // width: 100%;
                      // align-items: flex-end;
                      // justify-content: end;
                    }}
                  >
                    {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/h94V2dv/pizza.png" alt="pizza" border="0"></a> */}
                    <img
                      src="https://i.ibb.co/h94V2dv/pizza.png"
                      alt=""
                      srcset=""
                      height="100px"
                      width="auto"
                      style={{
                        // position: "absolute",
                        // top: "-10px",
                        padding: "20px",
                      }}
                    />
                  </div>
                  <p>
                    NFT Pizzeria is a collection of 3174 uniquely and
                    algorithmically generated humanized Pizza Slice. Owning a
                    NFT pizzeria, is not just holding an NFT but it’s also
                    owning a piece of ownership of the first NFT Pizzeria
                    Restaurant. In Fact, our main goal is to open the first
                    Physical NFT Pizzeria in the World and be the First Project
                    to let the first members to be able to customize their own
                    NFT Pizza Slice. Once the 100 Pizza Slice will be made, NFT
                    Pizzeria will be open randomly during the week and will let
                    few lucky Discord members to order customized pizza.
                  </p>
                </div>
              </li>
            </Fade>
            <Fade bottom>
              <div className="title" style={{ textAlign: "center" }}>
                <i>"Pizza isn’t a trend, it’s a way of life"</i>
              </div>
              <li>
                <p>
                  NFT Pizza Slice = 0.99 SOL <br /> Unique Pizza Slice <br />{" "}
                  Earning will build the first NFT Physical Pizzeria in the
                  world <br /> Lucky Members will be able to customize their NFT
                  Pizza Slice
                </p>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <div className="title">
                  Focus 100% on the NFT Pizzeria Holders
                </div>
                <p>
                  We are working so hard to make NFT Pizzeria holders proud of
                  our work. Holders will have access to exclusive giveaways,
                  prizes, whitelist for future NFT project but most important
                  will help the team decided the location and the design of the
                  first Physical NFT Pizzeria restaurant. Also, they will earn
                  profit from it. <br />
                  <br /> Each Pizza Slice is different since all are uniquely
                  generated with more than 100+ attributes. The first 100 people
                  to join the server will have the possibility to customize
                  their pizza according to the NFT Pizzeria Menu. If you can’t
                  make in the first 100 don’t worries, there are going to be
                  weekly but limited giveaways where you will have the chance to
                  customize your own pizza slice. We will open the digital NFT
                  pizzeria randomly, so be active.
                </p>
              </li>
            </Fade>
            <Fade bottom>
              <div className="title" style={{ textAlign: "center" }}>
                <i>
                  "LONG TERM MIDSET: the best NFT investment you can ever make."
                </i>
              </div>
              <li>
                <div>
                  <img src={Roadmap} alt="" width="100%" height="100%" />
                </div>
              </li>
            </Fade>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Desc;
