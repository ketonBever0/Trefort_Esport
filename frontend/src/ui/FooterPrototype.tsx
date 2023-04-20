
import { useEffect } from 'react';

function Footer() {

    // useEffect(() => {
    //             $('.nk-count').each(function () {
    //         $(this).prop('Counter',0).animate({
    //             Counter: $(this).text()
    //         }, {
    //             duration: 3000,
    //             easing: 'swing',
    //             step: function (now) {
    //                 $(this).text(Math.ceil(now));
    //             }
    //         });
    //     });
    //   },[])


    return (
        <div>
            <div className="row vertical-gap">
                <div className="col-lg-4">
                    <div className="nk-feature-2 bg-dark-1">
                        <div className="nk-feature-icon">
                            <div className="nk-count h2 mb-0">130</div>
                        </div>
                        <div className="nk-feature-cont text-center">
                            <h3 className="nk-feature-title">Regisztrált felhasználó</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="nk-feature-2 bg-dark-1">
                        <div className="nk-feature-icon">
                            <div className="nk-count h2 mb-0">640</div>
                        </div>
                        <div className="nk-feature-cont text-center">
                            <h3 className="nk-feature-title">Eddig meghirdetett esemény</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="nk-feature-2 bg-dark-1">
                        <div className="nk-feature-icon">
                            <div className="nk-count h2 mb-0">47</div>
                        </div>
                        <div className="nk-feature-cont text-center">
                            <h3 className="nk-feature-title">Féle játék</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-copyright">
                    <div className="container">
                        <div className="nk-copyright-right">
                            <ul className="nk-social-links-2">
                                <li>
                                    <a className="nk-social-twitch" href="#">
                                        <span className="fab fa-twitch" />
                                    </a>
                                </li>
                                <li>
                                    <a className="nk-social-steam" href="#">
                                        <span className="fab fa-steam" />
                                    </a>
                                </li>
                                <li>
                                    <a className="nk-social-facebook" href="#">
                                        <span className="fab fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a className="nk-social-github" href="#">
                                        <span className="fab fa-github" />
                                    </a>
                                </li>
                                <li>
                                    <a className="nk-social-discord" href="#">
                                        <span className="fab fa-discord"></span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer