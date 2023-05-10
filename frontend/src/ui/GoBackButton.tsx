import React from 'react'
import { useNavigate } from 'react-router'

function GoBackButton() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <button onClick={() => {
                    navigate(-1)
                }} className="button2">⭠ Vissza</button>
            </div>
        </div>
    )
}

export default GoBackButton