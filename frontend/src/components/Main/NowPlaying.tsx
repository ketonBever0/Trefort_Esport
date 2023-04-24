import React from 'react'

function NowPlaying() {
    return (
        <div>
            {/* START: Now Playing */}
            <div className="row">
                <div className="col-md-4">
                    <div className="nk-match-score bg-dark-3"> ÉLŐ </div>
                    <div className="nk-gap-2" />
                    <div className="nk-widget-match p-0">
                        <div className="nk-widget-match-teams">
                            <div className="nk-widget-match-team-logo">
                                <img src="assets/images/team-1.jpg" alt="" />
                            </div>
                            <div className="nk-widget-match-vs">VS</div>
                            <div className="nk-widget-match-team-logo">
                                <img src="assets/images/team-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="nk-gap-2" />
                    <p>
                        Kövesd élőben a streamet!
                    </p>
                    <a
                        href="tournaments.html"
                        className="nk-btn nk-btn-rounded nk-btn-color-main-1"
                    >
                        Match Details
                    </a>
                </div>
                <div className="col-md-8">
                    <div className="responsive-embed responsive-embed-16x9">
                        <iframe
                            src="https://player.twitch.tv/?channel=wearethevr&parent=localhost&muted=true"
                            frameBorder={0}
                            allowFullScreen={true}
                            scrolling="no"
                            height={378}
                            width={620}
                        />
                    </div>
                </div>
            </div>
            {/* END: Now Playing */}
        </div>
    )
}

export default NowPlaying