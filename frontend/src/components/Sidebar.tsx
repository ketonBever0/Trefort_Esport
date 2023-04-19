import React from 'react'
import { IoMdSearch } from 'react-icons/io'

function Sidebar() {
    return (
        <div>


            {/* START: Sidebar
                            Additional Classes:
                            .nk-sidebar-left
                            .nk-sidebar-right
                            .nk-sidebar-sticky*/}
            <aside className="nk-sidebar nk-sidebar-right nk-sidebar-sticky">
                <div className="nk-widget">
                    <div className="nk-widget-content">
                        <form
                            action="#"
                            className="nk-form nk-form-style-1"
                            noValidate={false}
                        >
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Keresés az oldalon..."
                                />
                                <button className="nk-btn nk-btn-color-main-1">
                                    <IoMdSearch size={20}/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="nk-widget nk-widget-highlighted">
                    <h4 className="nk-widget-title">
                        <span>
                            <span className="text-main-1">Következő</span> Meccsek
                        </span>
                    </h4>
                    <div className="nk-widget-content">
                        <div className="nk-widget-match">
                            <a href="#">
                                <span className="nk-widget-match-left">
                                    <span className="nk-widget-match-teams">
                                        <span className="nk-widget-match-team-logo">
                                            <img src="assets/images/team-1.jpg" alt="" />
                                        </span>
                                        <span className="nk-widget-match-vs">VS</span>
                                        <span className="nk-widget-match-team-logo">
                                            <img src="assets/images/team-2.jpg" alt="" />
                                        </span>
                                    </span>
                                    <span className="nk-widget-match-date">
                                        CS:GO - Apr 28, 2018 8:00 pm
                                    </span>
                                </span>
                                <span className="nk-widget-match-right">
                                    <span className="nk-match-score"> Upcoming </span>
                                </span>
                            </a>
                        </div>
                        <div className="nk-widget-match">
                            <a href="#">
                                <span className="nk-widget-match-left">
                                    <span className="nk-widget-match-teams">
                                        <span className="nk-widget-match-team-logo">
                                            <img src="assets/images/team-3.jpg" alt="" />
                                        </span>
                                        <span className="nk-widget-match-vs">VS</span>
                                        <span className="nk-widget-match-team-logo">
                                            <img src="assets/images/team-2.jpg" alt="" />
                                        </span>
                                    </span>
                                    <span className="nk-widget-match-date">
                                        LoL - Apr 24, 2018 7:20 pm
                                    </span>
                                </span>
                                <span className="nk-widget-match-right">
                                    <span className="nk-match-score"> Upcoming </span>
                                </span>
                            </a>
                        </div>
                        <div className="nk-widget-match">
                            <a href="#">
                                <span className="nk-widget-match-left">
                                    <span className="nk-widget-match-teams">
                                        <span className="nk-widget-match-team-logo">
                                            <img src="assets/images/team-1.jpg" alt="" />
                                        </span>
                                        <span className="nk-widget-match-vs">VS</span>
                                        <span className="nk-widget-match-team-logo">
                                            <img src="assets/images/team-4.jpg" alt="" />
                                        </span>
                                    </span>
                                    <span className="nk-widget-match-date">
                                        Dota 2 - Apr 12, 2018 6:40 pm
                                    </span>
                                </span>
                                <span className="nk-widget-match-right">
                                    <span className="nk-match-score bg-dark-1"> 0 : 0 </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            </aside>
            {/* END: Sidebar */}
        </div>


    )
}

export default Sidebar