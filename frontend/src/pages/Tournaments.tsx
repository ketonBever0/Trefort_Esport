import React from 'react'
import '../_css_all/custom.css'

function Tournaments() {
    return (

        <div className="nk-main">
            {/* START: Breadcrumbs */}
            <div className="nk-gap-1" />
            <div className="container">
                <ul className="nk-breadcrumbs">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <span className="fa fa-angle-right" />
                    </li>
                    <li>
                        <span>Tournaments</span>
                    </li>
                </ul>
            </div>
            <div className="nk-gap-1" />
            {/* END: Breadcrumbs */}
            <div className="container">
                <div className="row vertical-gap">
                    <div className="col-lg-8">
                        {/* START: Now Playing */}
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
                                    <span className="nk-match-score bg-dark-1">Now Playing</span>
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
                        <div className="responsive-embed responsive-embed-16x9">
                            <iframe
                                src="https://player.twitch.tv/?channel=lirik"
                                frameBorder={0}
                                allowFullScreen={false}
                                scrolling="no"
                                height={378}
                                width={620}
                            />
                        </div>
                        {/* END: Now Playing */}
                        {/* START: Match Description */}
                        <div className="nk-gap-2" />
                        <h3 className="h4">Something wrong?</h3>
                        <p>
                            He made his passenger captain of one, with four of the men; and
                            himself, his mate, and five more, went in the other; and they
                            contrived their business very well, for they came up to the ship about
                            midnight. I cannot express what a satisfaction it was to me to come
                            into my old hutch
                        </p>
                        {/* END: Match Description */}
                        {/* START: Share */}
                        <div className="nk-gap" />
                        <div className="nk-post-share">
                            <span className="h5">Share Tournament:</span>
                            <ul className="nk-social-links-2">
                                <li>
                                    <span
                                        className="nk-social-facebook"
                                        title="Share page on Facebook"
                                        data-share="facebook"
                                    >
                                        <span className="fab fa-facebook" />
                                    </span>
                                </li>
                                <li>
                                    <span
                                        className="nk-social-twitter"
                                        title="Share page on Twitter"
                                        data-share="twitter"
                                    >
                                        <span className="fab fa-twitter" />
                                    </span>
                                </li>
                                <li>
                                    <span
                                        className="nk-social-pinterest"
                                        title="Share page on Pinterest"
                                        data-share="pinterest"
                                    >
                                        <span className="fab fa-pinterest-p" />
                                    </span>
                                </li>
                                {/* Additional Share Buttons
                  <li><span class="nk-social-linkedin" title="Share page on LinkedIn" data-share="linkedin"><span class="fab fa-linkedin"></span></span></li>
                  <li><span class="nk-social-vk" title="Share page on VK" data-share="vk"><span class="fab fa-vk"></span></span></li>
              */}
                            </ul>
                        </div>
                        {/* END: Share */}
                        {/* START: Latest Matches */}
                        <div className="nk-gap-2" />
                        <h3 className="nk-decorated-h-2">
                            <span>
                                <span className="text-main-1">Latest</span> Matches
                            </span>
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
                                    <span className="nk-match-score bg-danger">2 : 17</span>
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
                        {/* END: Latest Matches */}
                    </div>
                    <div className="col-lg-4">
                        {/*
          START: Sidebar

          Additional Classes:
              .nk-sidebar-left
              .nk-sidebar-right
              .nk-sidebar-sticky
      */}
                        <aside className="nk-sidebar nk-sidebar-right nk-sidebar-sticky">
                            <div className="nk-widget">
                                <div className="nk-widget-content">
                                    <form
                                        action="#"
                                        className="nk-form nk-form-style-1"
                                        noValidate={true}
                                    >
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Type something..."
                                            />
                                            <button className="nk-btn nk-btn-color-main-1">
                                                <span className="ion-search" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="nk-widget nk-widget-highlighted">
                                <h4 className="nk-widget-title">
                                    <span>
                                        <span className="text-main-1">We</span> Are Social
                                    </span>
                                </h4>
                                <div className="nk-widget-content">
                                    {/*
      Social Links 3

      Additional Classes:
          .nk-social-links-cols-5
          .nk-social-links-cols-4
          .nk-social-links-cols-3
          .nk-social-links-cols-2
  */}
                                    <ul className="nk-social-links-3 nk-social-links-cols-4">
                                        <li>
                                            <a className="nk-social-twitch" href="#">
                                                <span className="fab fa-twitch" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nk-social-instagram" href="#">
                                                <span className="fab fa-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nk-social-facebook" href="#">
                                                <span className="fab fa-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nk-social-google-plus" href="#">
                                                <span className="fab fa-google-plus" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nk-social-youtube" href="#">
                                                <span className="fab fa-youtube" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="nk-social-twitter"
                                                href="https://twitter.com/nkdevv"
                                                target="_blank"
                                            >
                                                <span className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nk-social-pinterest" href="#">
                                                <span className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nk-social-rss" href="#">
                                                <span className="fa fa-rss" />
                                            </a>
                                        </li>
                                        {/* Additional Social Buttons
          <li><a class="nk-social-behance" href="#"><span class="fab fa-behance"></span></a></li>
          <li><a class="nk-social-bitbucket" href="#"><span class="fab fa-bitbucket"></span></a></li>
          <li><a class="nk-social-dropbox" href="#"><span class="fab fa-dropbox"></span></a></li>
          <li><a class="nk-social-dribbble" href="#"><span class="fab fa-dribbble"></span></a></li>
          <li><a class="nk-social-deviantart" href="#"><span class="fab fa-deviantart"></span></a></li>
          <li><a class="nk-social-flickr" href="#"><span class="fab fa-flickr"></span></a></li>
          <li><a class="nk-social-foursquare" href="#"><span class="fab fa-foursquare"></span></a></li>
          <li><a class="nk-social-github" href="#"><span class="fab fa-github"></span></a></li>
          <li><a class="nk-social-linkedin" href="#"><span class="fab fa-linkedin"></span></a></li>
          <li><a class="nk-social-medium" href="#"><span class="fab fa-medium"></span></a></li>
          <li><a class="nk-social-odnoklassniki" href="#"><span class="fab fa-odnoklassniki"></span></a></li>
          <li><a class="nk-social-paypal" href="#"><span class="fab fa-paypal"></span></a></li>
          <li><a class="nk-social-reddit" href="#"><span class="fab fa-reddit"></span></a></li>
          <li><a class="nk-social-skype" href="#"><span class="fab fa-skype"></span></a></li>
          <li><a class="nk-social-soundcloud" href="#"><span class="fab fa-soundcloud"></span></a></li>
          <li><a class="nk-social-steam" href="#"><span class="fab fa-steam"></span></a></li>
          <li><a class="nk-social-slack" href="#"><span class="fab fa-slack"></span></a></li>
          <li><a class="nk-social-tumblr" href="#"><span class="fab fa-tumblr"></span></a></li>
          <li><a class="nk-social-vimeo" href="#"><span class="fab fa-vimeo"></span></a></li>
          <li><a class="nk-social-vk" href="#"><span class="fab fa-vk"></span></a></li>
          <li><a class="nk-social-wordpress" href="#"><span class="fab fa-wordpress"></span></a></li>
      */}
                                    </ul>
                                </div>
                            </div>
                            <div className="nk-widget nk-widget-highlighted">
                                <h4 className="nk-widget-title">
                                    <span>
                                        <span className="text-main-1">Next</span> Matches
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
                            <div className="nk-widget nk-widget-highlighted">
                                <h4 className="nk-widget-title">
                                    <span>
                                        <span className="text-main-1">Top 3</span> Recent
                                    </span>
                                </h4>
                                <div className="nk-widget-content">
                                    <div className="nk-widget-post">
                                        <a href="blog-article.html" className="nk-post-image">
                                            <img src="assets/images/post-1-sm.jpg" alt="" />
                                        </a>
                                        <h3 className="nk-post-title">
                                            <a href="blog-article.html">
                                                Smell magic in the air. Or maybe barbecue
                                            </a>
                                        </h3>
                                        <div className="nk-post-date">
                                            <span className="fa fa-calendar" /> Sep 18, 2018
                                        </div>
                                    </div>
                                    <div className="nk-widget-post">
                                        <a href="blog-article.html" className="nk-post-image">
                                            <img src="assets/images/post-2-sm.jpg" alt="" />
                                        </a>
                                        <h3 className="nk-post-title">
                                            <a href="blog-article.html">
                                                Grab your sword and fight the Horde
                                            </a>
                                        </h3>
                                        <div className="nk-post-date">
                                            <span className="fa fa-calendar" /> Sep 5, 2018
                                        </div>
                                    </div>
                                    <div className="nk-widget-post">
                                        <a href="blog-article.html" className="nk-post-image">
                                            <img src="assets/images/post-3-sm.jpg" alt="" />
                                        </a>
                                        <h3 className="nk-post-title">
                                            <a href="blog-article.html">
                                                We found a witch! May we burn her?
                                            </a>
                                        </h3>
                                        <div className="nk-post-date">
                                            <span className="fa fa-calendar" /> Aug 27, 2018
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nk-widget nk-widget-highlighted">
                                <h4 className="nk-widget-title">
                                    <span>
                                        <span className="text-main-1">Latest</span> Screenshots
                                    </span>
                                </h4>
                                <div className="nk-widget-content">
                                    <div className="nk-popup-gallery">
                                        <div className="row sm-gap vertical-gap">
                                            <div className="col-sm-6">
                                                <div className="nk-gallery-item-box">
                                                    <a
                                                        href="assets/images/gallery-1.jpg"
                                                        className="nk-gallery-item"
                                                        data-size="1016x572"
                                                    >
                                                        <div className="nk-gallery-item-overlay">
                                                            <span className="ion-eye" />
                                                        </div>
                                                        <img src="assets/images/gallery-1-thumb.jpg" alt="" />
                                                    </a>
                                                    <div className="nk-gallery-item-description">
                                                        <h4>Called Let</h4> Divided thing, land it evening earth
                                                        winged whose great after. Were grass night. To Air
                                                        itself saw bring fly fowl. Fly years behold spirit day
                                                        greater of wherein winged and form. Seed open don't
                                                        thing midst created dry every greater divided of, be man
                                                        is. Second Bring stars fourth gathering he hath face
                                                        morning fill. Living so second darkness. Moveth were
                                                        male. May creepeth. Be tree fourth.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="nk-gallery-item-box">
                                                    <a
                                                        href="assets/images/gallery-2.jpg"
                                                        className="nk-gallery-item"
                                                        data-size="1188x594"
                                                    >
                                                        <div className="nk-gallery-item-overlay">
                                                            <span className="ion-eye" />
                                                        </div>
                                                        <img src="assets/images/gallery-2-thumb.jpg" alt="" />
                                                    </a>
                                                    <div className="nk-gallery-item-description">
                                                        {" "}
                                                        Seed open don't thing midst created dry every greater
                                                        divided of, be man is. Second Bring stars fourth
                                                        gathering he hath face morning fill. Living so second
                                                        darkness. Moveth were male. May creepeth. Be tree
                                                        fourth.{" "}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="nk-gallery-item-box">
                                                    <a
                                                        href="assets/images/gallery-3.jpg"
                                                        className="nk-gallery-item"
                                                        data-size="625x350"
                                                    >
                                                        <div className="nk-gallery-item-overlay">
                                                            <span className="ion-eye" />
                                                        </div>
                                                        <img src="assets/images/gallery-3-thumb.jpg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="nk-gallery-item-box">
                                                    <a
                                                        href="assets/images/gallery-4.jpg"
                                                        className="nk-gallery-item"
                                                        data-size="873x567"
                                                    >
                                                        <div className="nk-gallery-item-overlay">
                                                            <span className="ion-eye" />
                                                        </div>
                                                        <img src="assets/images/gallery-4-thumb.jpg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="nk-gallery-item-box">
                                                    <a
                                                        href="assets/images/gallery-5.jpg"
                                                        className="nk-gallery-item"
                                                        data-size="471x269"
                                                    >
                                                        <div className="nk-gallery-item-overlay">
                                                            <span className="ion-eye" />
                                                        </div>
                                                        <img src="assets/images/gallery-5-thumb.jpg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="nk-gallery-item-box">
                                                    <a
                                                        href="assets/images/gallery-6.jpg"
                                                        className="nk-gallery-item"
                                                        data-size="472x438"
                                                    >
                                                        <div className="nk-gallery-item-overlay">
                                                            <span className="ion-eye" />
                                                        </div>
                                                        <img src="assets/images/gallery-6-thumb.jpg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nk-widget nk-widget-highlighted">
                                <h4 className="nk-widget-title">
                                    <span>Facebook</span>
                                </h4>
                                <div className="nk-widget-content">
                                    <div
                                        className="fb-page"
                                        data-href="http://www.facebook.com/kinfolkmag"
                                        data-width={700}
                                        data-height={350}
                                        data-small-header="false"
                                        data-adapt-container-width="true"
                                        data-hide-cover="false"
                                        data-show-facepile="true"
                                        data-show-posts="true"
                                    />
                                </div>
                            </div>
                        </aside>
                        {/* END: Sidebar */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tournaments