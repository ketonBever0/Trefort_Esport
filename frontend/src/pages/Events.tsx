
function Events() {
    return (
        <div className='m-20 p-50'>
            <h3 className="nk-decorated-h">
                <span>
                    <span className="text-main-6">Esemény adatai</span>
                </span>
            </h3>
            <div className="row vertical-gap text-white">
                <div className="col-lg-6">
                    <div className="nk-box-2 bg-dark-2">
                        <h4>5600 Békéscsaba, Gyulai út 32.</h4>
                        Az épületen belüli helyszínek az eseményen lesznek elmondva.
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="nk-box-2 bg-dark-2">
                        <h4>2023. 02. 12-15.</h4>

                    </div>
                </div>
            </div>
            <h3 className="nk-decorated-h m-20">
                <span>
                    <span className="text-main-6">Induló játékok</span>
                </span>
            </h3>
            <div className="nk-info-box text-danger">
                <div className="nk-info-box-icon">

                </div>
                <h3>Valorant</h3>
                <em>Játék leírása</em>
                <div className='d-flex justify-content-end'>
                    <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-main-1">
                        Jelentkezem!
                    </a>
                </div>



            </div>
            <div className="nk-info-box text-warning">
                <div className="nk-info-box-icon">

                </div>
                <h3>Rocket League</h3>
                <em>
                    Játék leírása
                </em>
            </div>
            <div className="nk-info-box text-light">
                <div className="nk-info-box-icon">

                </div>
                <h3>League Of Legends</h3>
                <em>
                    Játék leírása
                </em>
            </div>
        </div>
    )
}

export default Events