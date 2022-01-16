import React from "react";
import Account from "./Account";

function Landing() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: "url(https://i.postimg.cc/JzFsF2Q0/Group-6960-1.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div
        class='window'
        style={{
          width: "400px",
          position: "fixed",
          top: "180px",
          left: "300px",
        }}
      >
        <div class='title-bar'>
          <div class='title-bar-text'>GitNFT</div>
          <div class='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button aria-label='Close'></button>
          </div>
        </div>
        <div class='window-body'>
          <div>
            <h4 className='landing-welcome'>Hi, welcome to __GEN-<span style={{color:'red'}}>I</span>_</h4>
            <div className='welcome-modal'>
              <h4 className='heading-landing'>
                Lets <span style={{ color: "yellow" }}>sign</span> you up
              </h4>
              <br />
              <h4 className='heading-landing'>Github id:</h4>
              <div class='field-row'>
                <input id='githubInput' type='text' />
              </div>
              <br></br>
              <Account />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
