import React, { useContext, useEffect } from 'react'
import UserContext from '../_context/UserContext'
import Button2 from '../ui/Button2';
import './_css/myProfile.css'
import { useParams } from 'react-router';
import { BarLoader, BeatLoader, PulseLoader } from 'react-spinners';

function ProfilePage() {


    useEffect(() => {
        const pageBG: Element = document.querySelector('.full-page')!;
        pageBG.setAttribute("style", "background-image: url('/assets/images/bg-top-3.png')")
    }, [])


    const {
        userData,
        otherUser,
        getOtherUserById,
        isOtherUserDataLoading: loading
    } = useContext(UserContext);

    const { id } = useParams();

    useEffect(() => {
        if (!userData) {
            getOtherUserById(id);
        }
    }, [])

    if (otherUser) {
        var { user } = otherUser;
    }


    return (
        <div>
            <section className='bg-dark-1'>
                <div className="container pb-5">
                    <div className='row'>
                        <div className="justify-content-start d-flex pl-70 mt-40 mb-40">
                            <Button2 content="⭠ Vissza" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4 bg-dark-4">
                                <div className="card-body text-center">
                                    <img
                                        // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        src={
                                            user?.username ?
                                                `http://localhost:8000/profilepicture/${user?.username}_profile_picture.png`
                                                :
                                                '/src/assets/avatar_placeholder.png'
                                        }
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null; // prevents looping
                                            currentTarget.src = "/src/assets/avatar_placeholder.png";
                                        }}
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                        style={{ width: 150 }}
                                    />

                                    <p className="my-3 lead text-white fw-bold text-center">{user?.username}</p>
                                    <hr />

                                    <div className='mt-20 d-flex justify-content-center gap-3'>
                                        <p className='lead fw-bold'>RANG: </p> <p className='d-flex align-items-center'>felhasználó</p>
                                    </div>
                                    {/* <p className=''>ONLINE<span className='h6'>ㅤ</span><i className="mr-5 bi bi-circle-fill h6 position-absolute mt-4 m-auto text-success m-auto"></i></p>
                                    <p className=''>Legutóbb online: 26 perce<span className='h6'>ㅤ</span><i className="mr-5 bi bi-circle h6 position-absolute mt-4 m-auto text-success m-auto"></i></p>
                                    <p className=''>OFFLINE<span className='h6'>ㅤ</span><i className="mr-5 bi bi-circle-fill h6 position-absolute mt-4 m-auto text-secondary m-auto"></i></p>
                                    <p>BANNED<span className='h6'>ㅤ</span><i className="mr-5 bi bi-circle-fill h6 position-absolute mt-4 m-auto text-danger m-auto"></i></p> */}
                                    <hr />


                                    {user?.description == null || user?.description == "" ? <></> : <><p className='myProfileData p-15 mb-5'>{user?.description}</p><hr /></>}


                                    <div className='bg-dark-4'>
                                        <div className='card-body d-flex justify-content-center gap-2'>
                                            <div className=' fw-bold'>
                                                Regisztráció dátuma:
                                            </div>
                                            <div className='col-lg-5 text-start'>
                                                {
                                                    loading ?
                                                        <BarLoader color="#dd163b" className='mx-2' />
                                                        :
                                                        user?.registrationDate?.slice(0, 10).replaceAll('-', '. ') + '.'
                                                }
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='card-body  d-flex justify-content-center gap-2 gap-lg-0'>
                                            <div className='col-lg-8 fw-bold'>
                                                Legutolsó bejelentkezés:
                                            </div>
                                            <div className='col-lg-5 text-start'>
                                                {
                                                    loading ?
                                                        <BarLoader color="#dd163b" className='mx-2' />
                                                        :
                                                        user?.lastLogin?.slice(0, 10).replaceAll('-', '. ') + '.'
                                                }
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className='p-30 bg-dark-2'>
                                    <div className='h3 text-sm-h6'>#TAGEK</div>
                                    <div className='badges'>
                                        <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                                        <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                                        <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                                        <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                                        <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                                        <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                                        <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                                        <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                                        <span style={{ fontStyle: "italic" }} className='p-10 m-5 bg-main-1 lead text-light badge'>#hello</span>
                                    </div>
                                </div>

                            </div>
                            <div className="card mb-4 mb-lg-0 bg-transparent">
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush rounded-3 lead">
                                        <li className="list-group-item bg-dark-4 d-flex justify-content-between align-items-center p-10 text-white">
                                            <i
                                                className="fab fa-discord fa-2xl"
                                                style={{ color: "#5865F2" }}
                                            />
                                            <p className="mb-0">discorduser</p>
                                        </li>
                                        <li className="list-group-item bg-dark-2 d-flex justify-content-center gap-3 align-items-center p-10">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                                alt="avatar"
                                                className="rounded-circle img-fluid"
                                                style={{ width: 50 }}
                                            />
                                            <p className='mb-0 lead fw-bold  text-main-1'>clan_name</p>
                                            <div className="mb-0 text-white">klán tagja</div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <table className="nk-table mt-30">
                                <thead>
                                    <tr className='text-center'>
                                        <th colSpan={3}>Eredmények</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-bottom'>
                                        <th>Játék neve</th>
                                        <th>Dátum</th>
                                        <th className="text-center">Helyezés</th>
                                    </tr>
                                    <tr>
                                        <td>Valorant</td>
                                        <td>2023.11.01.</td>
                                        <td className="text-center"><strong>#3</strong></td>
                                    </tr>
                                    <tr>
                                        <td>LOL</td>
                                        <td>2023.03.13.</td>
                                        <td className="text-center"><strong>#7</strong></td>
                                    </tr>
                                    <tr>
                                        <td>LOL</td>
                                        <td>2022.10.04.</td>
                                        <td className="text-center"><strong>#5</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Rocket League</td>
                                        <td>2022.08.19.</td>
                                        <td className="text-center"><strong>#12</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Valorant</td>
                                        <td>2022.03.14.</td>
                                        <td className="text-center"><strong>#10</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-8">
                            <div id='myProfileData' className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span> </span>{
                                loading ?
                                    <PulseLoader color="#dd163b" />
                                    :
                                    user?.username + " adatai"
                            }<span> </span></div>
                            <div className="card mb-4 bg-dark-4">
                                <div className="card-body">


                                    <>
                                        {/* DINAMIKUS ADATOK */}
                                        <div className="row m-5">
                                            <div className="col-sm-4 m-auto myProfileLabel fw-bold">Név</div>
                                            <div className="col-sm-8 row">
                                                <div className="sm-col-6 myProfileData">
                                                    {
                                                        loading ?
                                                            <BeatLoader color="#dd163b" />
                                                            :
                                                            user?.firstName + " " + user?.lastName
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        {/* <div className="row m-5">
                                            <div className="col-sm-4 m-auto myProfileLabel fw-bold">Lakcím</div>
                                            <div className="col-sm-8 row">
                                                <div className="sm-sm-col-6 myProfileData">
                                                    {user?.address}
                                                </div>
                                            </div>
                                        </div>
                                        <hr /> */}
                                        {/* <div className="row m-5">
                                            <div className="col-sm-4 m-auto myProfileLabel fw-bold">Oktatási azonosító</div>
                                            <div className="col-sm-8 row">
                                                <div className="sm-col-6 myProfileData">
                                                    {(user?.educationNumber == null || user?.educationNumber == "") ? "Nincs megadva" : user?.educationNumber}
                                                    71608965663
                                                </div>
                                            </div>
                                        </div>
                                        <hr /> */}
                                        <div className="row m-5">
                                            <div className="col-sm-4 m-auto myProfileLabel fw-bold">E-mail cím</div>
                                            <div className="col-sm-8 row">
                                                <div className="sm-col-6 myProfileData">
                                                    {
                                                        loading ?
                                                            <BeatLoader color="#dd163b" />
                                                            :
                                                            user?.email
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row m-5">
                                            <div className="col-sm-4 m-auto myProfileLabel fw-bold">Felhasználónév</div>
                                            <div className="col-sm-8 row">
                                                <div className="sm-col-6 myProfileData">
                                                    {
                                                        loading ?
                                                            <BeatLoader color="#dd163b" />
                                                            :
                                                            user?.username
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex row justify-content-end gap-5 p-20' />

                                    </>

                                </div>
                            </div>
                            <div className='nk-decorated-h-2 h3 p-15 mt-40 text-sm-h6'><span> </span>{
                                loading ?
                                    <PulseLoader color="#dd163b" />
                                    :
                                    user?.username + " bejegyzései"
                            }<span> </span></div>
                            <div className="nk-blog-grid p-20 row d-flex justify-content-center">
                                <div className="nk-blog-post col-md-6 col-12">
                                    <a href="blog-article.html" className="nk-post-img">
                                        <img
                                            src="assets/images/post-5-mid.jpg"
                                            alt="He made his passenger captain of one"
                                        />
                                        <span className="nk-post-comments-count">13</span>
                                        <span className="nk-post-categories">
                                            <span className="bg-main-5">Indie</span>
                                        </span>
                                    </a>
                                    <div className="nk-gap" />
                                    <h2 className="nk-post-title h4">
                                        <a href="blog-article.html">He made his passenger captain of one</a>
                                    </h2>
                                    <div className="nk-post-text">
                                        <p>
                                            Just then her head struck against the roof of the hall: in fact
                                            she was now more than nine feet high, and she at once took up the
                                            little golden key and hurried off to the garden door...
                                        </p>
                                    </div>
                                    <div className="nk-gap" />
                                    <a
                                        href="blog-article.html"
                                        className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                                    >
                                        Read More
                                    </a>
                                    <div className="nk-post-date float-right">
                                        <span className="fa fa-calendar" /> Jul 23, 2018
                                    </div>
                                </div>
                                <div className="nk-blog-post col-md-6 col-12">
                                    <a href="blog-article.html" className="nk-post-img">
                                        <img
                                            src="assets/images/post-5-mid.jpg"
                                            alt="He made his passenger captain of one"
                                        />
                                        <span className="nk-post-comments-count">13</span>
                                        <span className="nk-post-categories">
                                            <span className="bg-main-5">Indie</span>
                                        </span>
                                    </a>
                                    <div className="nk-gap" />
                                    <h2 className="nk-post-title h4">
                                        <a href="blog-article.html">He made his passenger captain of one</a>
                                    </h2>
                                    <div className="nk-post-text">
                                        <p>
                                            Just then her head struck against the roof of the hall: in fact
                                            she was now more than nine feet high, and she at once took up the
                                            little golden key and hurried off to the garden door...
                                        </p>
                                    </div>
                                    <div className="nk-gap" />
                                    <a
                                        href="blog-article.html"
                                        className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                                    >
                                        Read More
                                    </a>
                                    <div className="nk-post-date float-right">
                                        <span className="fa fa-calendar" /> Jul 23, 2018
                                    </div>
                                </div>
                                <div className="nk-blog-post col-md-6 col-12">
                                    <a href="blog-article.html" className="nk-post-img">
                                        <img
                                            src="assets/images/post-5-mid.jpg"
                                            alt="He made his passenger captain of one"
                                        />
                                        <span className="nk-post-comments-count">13</span>
                                        <span className="nk-post-categories">
                                            <span className="bg-main-5">Indie</span>
                                        </span>
                                    </a>
                                    <div className="nk-gap" />
                                    <h2 className="nk-post-title h4">
                                        <a href="blog-article.html">He made his passenger captain of one</a>
                                    </h2>
                                    <div className="nk-post-text">
                                        <p>
                                            Just then her head struck against the roof of the hall: in fact
                                            she was now more than nine feet high, and she at once took up the
                                            little golden key and hurried off to the garden door...
                                        </p>
                                    </div>
                                    <div className="nk-gap" />
                                    <a
                                        href="blog-article.html"
                                        className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                                    >
                                        Read More
                                    </a>
                                    <div className="nk-post-date float-right">
                                        <span className="fa fa-calendar" /> Jul 23, 2018
                                    </div>
                                </div>
                                <div className="nk-blog-post col-md-6 col-12">
                                    <a href="blog-article.html" className="nk-post-img">
                                        <img
                                            src="assets/images/post-5-mid.jpg"
                                            alt="He made his passenger captain of one"
                                        />
                                        <span className="nk-post-comments-count">13</span>
                                        <span className="nk-post-categories">
                                            <span className="bg-main-5">Indie</span>
                                        </span>
                                    </a>
                                    <div className="nk-gap" />
                                    <h2 className="nk-post-title h4">
                                        <a href="blog-article.html">He made his passenger captain of one</a>
                                    </h2>
                                    <div className="nk-post-text">
                                        <p>
                                            Just then her head struck against the roof of the hall: in fact
                                            she was now more than nine feet high, and she at once took up the
                                            little golden key and hurried off to the garden door...
                                        </p>
                                    </div>
                                    <div className="nk-gap" />
                                    <a
                                        href="blog-article.html"
                                        className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                                    >
                                        Read More
                                    </a>
                                    <div className="nk-post-date float-right">
                                        <span className="fa fa-calendar" /> Jul 23, 2018
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default ProfilePage