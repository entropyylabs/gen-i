import React from 'react'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div class='window create'>
        <div class='title-bar'>
          <div class='title-bar-text'>Mint!</div>
          <div class='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button aria-label='Close'></button>
          </div>
        </div>
        <div class='window-body'>
          <div className='create-box'>
            <div className='image-holder'>
              {fileUrl && (
                <img className='rounded mt-4' width='350' src={fileUrl} />
              )}
              <input
                type='file'
                name='Asset'
                className='my-4 upload-btn'
                // onChange={onChange}
              />
              <p>JPEG, MP4, PNG, GIF. Max 50 MB.</p>
            </div>
            <div className='input-fields'>
              {/* <input
                placeholder='Name'
                onChange={(e) =>
                  updateFormInput({ ...formInput, name: e.target.value })
                }
              />
              <textarea
                placeholder='Description'
                onChange={(e) =>
                  updateFormInput({ ...formInput, description: e.target.value })
                }
              /> */}
              <div class='field-row-stacked'>
                <label for='text18'>Name</label>
                <input id='text18' type='text' />
              </div>
              <div class='field-row-stacked'>
                <label for='text19'>Price</label>
                <input id='text19' type='text' />
              </div>
              <div class='field-row-stacked'>
                <label for='text18'>Commit hash</label>
                <input
                  id='text18'
                  type='text'
                  value='fedff29f9a3c8b5d66ae41210641308c82f41b38'
                />
              </div>
              <div class='field-row-stacked'>
                <label for='text19'>Link</label>
                <input
                  id='text19'
                  type='text'
                  value='https://github.com/entropyylabs/cryft-prototype/commit/fedff29f9a3c8b5d66ae41210641308c82f41b38'
                />
              </div>
              {/* <input
                placeholder='Price in Matic'
                onChange={(e) =>
                  updateFormInput({ ...formInput, price: e.target.value })
                }
              /> */}
              <button className='save-btn'>Mint</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal
