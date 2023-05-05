import React, { useContext, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router';
import UserContext from '../_context/UserContext';
import './_css/approvalModal.css'

function ApprovalModal() {
    const {
        login,
        loggingIn,
        userToken,
        isThereLoginError
    } = useContext(UserContext);




    const navigate = useNavigate();


    return (
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
                                <span className="text-main-1">Klán létrehozása</span>
                                <hr></hr>
                            </h4>
                            <div className='text-white'>A létrehozást követően automatikusan átkerülsz ebbe a klánba moderátorként. Jogkörödbe tartozik majd a felhasználók hozzáadása és eltávolítása.</div>
                            <div className="nk-gap-2" />
                            <div className='d-flex justify-content-end gap-5'>
                                <button className='button2' id='approvalApproveBtn'>Létrehozás</button>
                                <button className='button2' id='approvalDeclineBtn'>Mégse</button>
                            </div>
                            
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default ApprovalModal