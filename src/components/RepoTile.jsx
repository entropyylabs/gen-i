import React from "react";

function RepoTile({ name }) {
  return (
    <div className='repo-tile'>
      <div className='top-row'>
        <h4 className='repo-name'>{name}</h4>
        <i class='fab fa-github fa-2x'></i>
      </div>

      <div className='bottom-row'>
        <div>
          <b>
            <span className='commit'>Commit:</span>
          </b>
          <select>
            <option value='' disabled selected>
              Select your option
            </option>
            <option>
              Merge branch 'main' of github.com:entropyylabs/cryft-prototype
              into main
            </option>
            <option>
              Clicking on walletID and recieve shows up QR code; bugfix{" "}
            </option>
            <option>Ability to view wallet ID modal added</option>
            <option>Updated home screen wallet card</option>
            <option>Created a new Expo app</option>
          </select>
        </div>
        <button>Mint</button>
          </div>
          
    </div>
  );
}

export default RepoTile;
