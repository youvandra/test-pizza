import React, { useContext, useState } from "react";
import { Hooks } from "providers";
import { Link } from "react-router-dom";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import pdf from "assets/nft-pizza.pdf";
import styled from "styled-components";
import Connect from "components/Transactions";

function Navbar() {
  const { setScroll, scroll, barMobile, setBarMobile, wallet_, setWallet_ } =
    useContext(Hooks);
  const ConnectButton = styled(WalletDialogButton);
  return (
    <>
      <div
        // className={`navbar active`}
        className={`navbar ${scroll && "active"}`}
        style={{ zIndex: "999999" }}
      >
        <div
          style={{
            opacity: 1,
          }}
        >
          <ul className="">
            <div style={{ display: "none" }}>
              {/* <Connect /> */}
            </div>

            {/* <li style={{
              display: wallet_ ? 'none' : 'display'
            }}> */}
              {/* <span
                onClick={() => (
                  <>
                    <Connect />
                  </>
                )}
              > */}
                {/* Connect Wallet */}
                {!wallet_ && (<Connect/>)}
              {/* </span> */}
            {/* </li> */}
            <li>
              <a href={pdf} target="_blank" rel="noreferrer">
                MENU
              </a>
            </li>
            <li>
              <a href="#home-desc">DESCRIPTION</a>
            </li>
            <li>
              <a href="#home-faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
