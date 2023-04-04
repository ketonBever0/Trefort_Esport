import React from 'react'

function LatestMatches() {
    return (
        <div>
            {/* START: Latest Matches */}
            <h3 className="nk-decorated-h-2">
                <span><span className="text-main-1">Latest</span> Matches</span>
            </h3>
            <div className="nk-gap" />
            <div className="nk-match">
                <div className="nk-match-team-left">
                    <a href="#">
                        <span className="nk-match-team-logo">
                            <img src="assets/images/team-1.jpg" alt="" />
                        </span>
                        <span className="nk-match-team-name"> SK Telecom T1 </span>
                    </a>
                </div>
                <div className="nk-match-status">
                    <a href="#">
                        <span className="nk-match-status-vs">VS</span>
                        <span className="nk-match-status-date">Apr 28, 2018 8:00 pm</span>
                        <span className="nk-match-score bg-danger"> 2 : 17 </span>
                    </a>
                </div>
                <div className="nk-match-team-right">
                    <a href="#">
                        <span className="nk-match-team-name"> Cloud 9 </span>
                        <span className="nk-match-team-logo">
                            <img src="assets/images/team-2.jpg" alt="" />
                        </span>
                    </a>
                </div>
            </div>
            <div className="nk-match">
                <div className="nk-match-team-left">
                    <a href="#">
                        <span className="nk-match-team-logo">
                            <img src="assets/images/team-3.jpg" alt="" />
                        </span>
                        <span className="nk-match-team-name"> Counted logic gaming </span>
                    </a>
                </div>
                <div className="nk-match-status">
                    <a href="#">
                        <span className="nk-match-status-vs">VS</span>
                        <span className="nk-match-status-date">Apr 15, 2018 9:00 pm</span>
                        <span className="nk-match-score bg-success"> 28 : 19 </span>
                    </a>
                </div>
                <div className="nk-match-team-right">
                    <a href="#">
                        <span className="nk-match-team-name"> SK Telecom T1 </span>
                        <span className="nk-match-team-logo">
                            <img src="assets/images/team-1.jpg" alt="" />
                        </span>
                    </a>
                </div>
            </div>
            <div className="nk-match">
                <div className="nk-match-team-left">
                    <a href="#">
                        <span className="nk-match-team-logo">
                            <img src="assets/images/team-4.jpg" alt="" />
                        </span>
                        <span className="nk-match-team-name"> Team SoloMid </span>
                    </a>
                </div>
                <div className="nk-match-status">
                    <a href="#">
                        <span className="nk-match-status-vs">VS</span>
                        <span className="nk-match-status-date">Apr 28, 2018 8:00 pm</span>
                        <span className="nk-match-score bg-dark-1"> 13 : 13 </span>
                    </a>
                </div>
                <div className="nk-match-team-right">
                    <a href="#">
                        <span className="nk-match-team-name"> SK Telecom T1 </span>
                        <span className="nk-match-team-logo">
                            <img src="assets/images/team-1.jpg" alt="" />
                        </span>
                    </a>
                </div>
            </div>

            <div className="nk-gap-2" />
            <a
                href="tournaments.html"
                className="nk-btn nk-btn-rounded nk-btn-color-main-1 ms-5"
            >
                Továbbiak
            </a>
            {/* END: Latest Matches */}
        </div>
    )
}

export default LatestMatches