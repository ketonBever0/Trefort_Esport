import React from 'react'
import { IoMdClose } from 'react-icons/io';

function JoinClanApprovalModal() {
  return (
    <div>
                <div>
            <div
                className="nk-modal"
                id="modalLogin"
                tabIndex={-1}
                role="dialog"
                onClick={(e) => {
                    e.stopPropagation();
                    // closeModal();
                }}
            // aria-hidden="true"
            >
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button
                                type="button"
                                className="nostyle-button closebutton"
                            // onClick={() => {
                            //     closeModal();
                            // }}
                            >
                                {/* <span className="ion-android-close" /> */}
                                <IoMdClose size={25} />
                            </button>
                            <h4 className="mb-0">
                                <span className="text-main-1">Csatlakozás a klánhoz</span>
                                <hr></hr>
                            </h4>
                            <div className='text-white'>Már tagja vagy egy klánnak. A csatlakozáshoz előbb ki kell lépned a jelenlegiből.</div>
                            <div className="nk-gap-2" />
                            <div className='d-flex justify-content-end gap-5'>
                                <button className='button2' id='approvalApproveBtn'>Kilépés</button>
                                <button className='button2' id='approvalDeclineBtn'>Mégse</button>
                            </div>
                            
                        </div>
                    </div>
                </div >
            </div >
        </div>
    </div>
  )
}

export default JoinClanApprovalModal