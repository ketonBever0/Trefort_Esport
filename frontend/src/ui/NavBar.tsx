import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../_css_all/custom.css';
import './_css/navbar.css';
import LoginModal from '../components/LoginModal';
import UserContext from '../_context/UserContext';
import { AiOutlineDown } from 'react-icons/ai';
import Dashboard from './Dashboard';

function NavBar() {

    useEffect(() => {
        var navbar: any = document.getElementById("myNav");
        var header: any = document.getElementById("myHeader");
        var contacts_left: any = document.getElementById("contacts-left");

        function scrollFunction() {
            if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
                header.setAttribute("style", "transition: .5s; position: fixed; top: 0");
                navbar.classList.add("p-10");
                contacts_left.style.display = "none";
            } else {
                navbar.classList.remove("p-10");
                navbar.setAttribute("style", "transition: .3s;");
                header.removeAttribute("style", "position: fixed; top: 0");
                contacts_left.style.display = "block";
            }
        }

        if (header && navbar) window.onscroll = function () { scrollFunction() };

    }, [])




    const {
        isLoginModalOpen, setIsLoginModalOpen,
        isUserBoxOpen, setIsUserBoxOpen,
        userToken,
        userData,
        logout
    } = useContext(UserContext);



    const { pathname } = useLocation();

    useEffect(() => {
        setIsLoginModalOpen(false);
        setIsUserBoxOpen(false);
        // console.log(pathname)
    }, [pathname])


    return (
        <div>
            <div className={`${isLoginModalOpen ? 'fixed-top' : 'visually-hidden'} overlay min-vh-100 min-vw-100`} onClick={(e) => {
                setIsLoginModalOpen(false);
                e.stopPropagation();
            }} >
                {/* <div className={`${isLoginModalOpen ? 'fixed-top' : 'visually-hidden'}`}> */}
                <LoginModal closeModal={() => setIsLoginModalOpen(false)} />
                {/* </div> */}
            </div>



            <header className="nk-header nk-header-opaque" id='myHeader'>
                <div>
                    <div id='topnav' className="nk-contacts-top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                        <div className="container">
                            <div id='contacts-left' className="nk-contacts-left">
                                <ul className="nk-social-links">
                                    {/* <li>
                                    <a className="nk-social-rss" href="#">
                                        <span className="fa fa-rss" />
                                    </a>
                                </li> */}
                                    <li>
                                        <a className="nk-social-twitch" href="#">
                                            <span className="fab fa-twitch" />
                                        </a>
                                    </li>
                                    <li>
                                        {/* <a className="nk-social-steam" href="#">
                                        <span className="fab fa-steam" />
                                    </a> */}
                                    </li>
                                    <li>
                                        <a className="nk-social-facebook" href="#">
                                            <span className="fab fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nk-social-discord" href="#">
                                            <span className="fab fa-discord">
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="nk-contacts-right">
                                <ul className="nk-contacts-icons">
                                    <li>
                                        <a href="#" data-toggle="modal" data-target="#modalSearch">
                                            <span className="fa fa-search" />
                                        </a>
                                    </li>
                                    <li>
                                        {
                                            userToken ?
                                                <div>
                                                    <button className='nostyle-button' onClick={() => setIsUserBoxOpen((prev: boolean) => !prev)}>
                                                        {userData?.user?.username}
                                                        <span className={`mx-2 ${isUserBoxOpen && 'rotate-180'}`}><AiOutlineDown /></span>
                                                    </button>
                                                    {
                                                        isUserBoxOpen &&
                                                        <div className='c-ui-userbox fixed-top rounded'>
                                                            <div className='nk-gap' />
                                                            <h4>Üdv {userData?.user?.username}!</h4>
                                                            <div className='position-absolute bottom-0 w-100'>
                                                                <Link to='/myprofile'
                                                                    className="nk-btn nk-btn-rounded nk-btn-block nk-btn-color-main-5" //nk-btn-color-white
                                                                >
                                                                    Profil
                                                                </Link>
                                                                <Link to='/stats/:id'
                                                                    className="nk-btn nk-btn-rounded nk-btn-block nk-btn-color-main-2" //nk-btn-color-white
                                                                >
                                                                    Korábbi eredményeim
                                                                </Link>
                                                                <button onClick={async () => {
                                                                    await logout();
                                                                    setIsUserBoxOpen(false);
                                                                }}
                                                                    className="nk-btn nk-btn-rounded nk-btn-block nk-btn-color-main-1" //nk-btn-color-white
                                                                >
                                                                    Kijelentkezés
                                                                </button>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                :
                                                <button className='nostyle-button' onClick={() => setIsLoginModalOpen(true)} /*  data-toggle="modal" *//*  data-target="#modalLogin" */>
                                                    <span className="fa fa-user" />
                                                </button>
                                        }
                                    </li>
                                    {/* <li>
                                    <span className="nk-cart-toggle">
                                        <span className="fa fa-shopping-cart" /> */}
                                    {/* <span className="nk-badge">27</span>
                                    </span>
                                    <div className="nk-cart-dropdown">
                                        <div className="nk-widget-post">
                                            <a href="store-product.html" className="nk-post-image">
                                                <img
                                                    src="/assets/images/product-5-xs.jpg"
                                                    alt="In all revolutions of"
                                                />
                                            </a>
                                            <div className="nk-gap-1" />
                                            <div className="nk-product-price">€ 23.00</div>
                                        </div>
                                        <div className="nk-widget-post">
                                            <a href="store-product.html" className="nk-post-image">
                                                <img
                                                    src="/assets/images/product-7-xs.jpg"
                                                    alt="With what mingled joy"
                                                />
                                            </a>
                                            <h3 className="nk-post-title">
                                                <a href="#" className="nk-cart-remove-item">
                                                    <span className="ion-android-close" />
                                                </a>
                                                <a href="store-product.html">With what mingled joy</a>
                                            </h3>
                                            <div className="nk-gap-1" />
                                            <div className="nk-product-price">€ 14.00</div>
                                        </div>
                                        <div className="nk-gap-2" />
                                        <div className="text-center">
                                            <a
                                                href="store-checkout.html"
                                                className="nk-btn nk-btn-rounded nk-btn-color-main-1 nk-btn-hover-color-white"
                                            >
                                                Proceed to Checkout
                                            </a>
                                        </div>
                                    </div>
                                </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <nav id='myNav' className="nk-navbar nk-navbar-top nk-navbar-sticky nk-navbar-autohide">
                            <div className="container">
                                <div className="nk-nav-table">
                                    <Link to='/' className="nk-nav-logo">
                                        {/* <img src="/assets/images/logo.svg" alt="GoodGames" width={199} /> */}
                                        <img src={"/src/assets/esport_logo.png"} width={280} />
                                    </Link>
                                    <ul
                                        className="nk-nav nk-nav-right d-none d-lg-table-cell"
                                        data-nav-mobile="#nk-nav-mobile"
                                    >
                                        <li>
                                            <Link to='/news' className='text-decoration-none'> Hírek </Link>
                                        </li>
                                        <li className="nk-drop-item">
                                            <a href="blog-list.html" className='text-decoration-none'> Versenyek </a>
                                            <ul className="dropdown">
                                                <li>
                                                    <a href="news.html" className='text-decoration-none'> Legutóbbi </a>
                                                </li>
                                                <li className=" nk-drop-item">
                                                    <a href="blog-grid.html" className='text-decoration-none'> Blog With Sidebar </a>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <a href="blog-grid.html" className='text-decoration-none'> Blog Grid </a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-list.html" className='text-decoration-none'> Blog List </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="blog-fullwidth.html" className='text-decoration-none'> Blog Fullwidth </a>
                                                </li>
                                                <li>
                                                    <a href="blog-article.html" className='text-decoration-none'> Blog Article </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="gallery.html" className='text-decoration-none'> Gallery </a>
                                        </li>
                                        <li className=" nk-drop-item">
                                            <a href="tournaments.html" className='text-decoration-none'> Tournaments </a>
                                            <ul className="dropdown">
                                                <li>
                                                    <a href="tournaments.html" className='text-decoration-none'> Tournament </a>
                                                </li>
                                                <li>
                                                    <a href="tournaments-teams.html" className='text-decoration-none'> Teams </a>
                                                </li>
                                                <li>
                                                    <a href="tournaments-teammate.html" className='text-decoration-none'> Teammate </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className=" nk-drop-item">
                                            <a href="store.html" className='text-decoration-none'> Store </a>
                                            <ul className="dropdown">
                                                <li>
                                                    <a href="store.html" className='text-decoration-none'> Store </a>
                                                </li>
                                                <li>
                                                    <a href="store-product.html" className='text-decoration-none'> Product </a>
                                                </li>
                                                <li>
                                                    <a href="store-catalog.html" className='text-decoration-none'> Catalog </a>
                                                </li>
                                                <li>
                                                    <a href="store-catalog-alt.html" className='text-decoration-none'> Catalog Alt </a>
                                                </li>
                                                <li>
                                                    <a href="store-checkout.html" className='text-decoration-none'> Checkout </a>
                                                </li>
                                                <li>
                                                    <a href="store-cart.html" className='text-decoration-none'> Cart </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="nk-nav nk-nav-right nk-nav-icons">
                                        <li className="single-icon d-lg-none">
                                            <a
                                                href="#"
                                                className="no-link-effect"
                                                data-nav-toggle="#nk-nav-mobile"
                                            >
                                                <span className="nk-icon-burger">
                                                    <span className="nk-t-1" />
                                                    <span className="nk-t-2" />
                                                    <span className="nk-t-3" />
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* END: Navbar */}
            </header >


            <>
                {/* START: Navbar Mobile Additional Classes: .nk-navbar-left-side
                .nk-navbar-right-side .nk-navbar-lg .nk-navbar-overlay-content --&gt; */}
                <div
                    id="nk-nav-mobile"
                    className="nk-navbar nk-navbar-side nk-navbar-right-side nk-navbar-overlay-content d-lg-none"
                >
                    <div className="nano">
                        <div className="nano-content">
                            <a href="index.html" className="nk-nav-logo">
                                <img src="/assets/images/logo.svg" alt="" width={120} />
                            </a>
                            <div className="nk-navbar-mobile-content">
                                <ul className="nk-nav">
                                    {/* Here will be inserted menu from [data-mobile-menu="#nk-nav-mobile"] */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END: Navbar Mobile */}
                <div className="nk-main"></div>
            </>






        </div >
    )
}

export default NavBar