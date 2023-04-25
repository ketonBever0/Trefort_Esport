import { useEffect, useState } from 'react';
import './input.css';
import Button2 from '../ui/Button2';
import './_css/myProfile.css'

function MyProfile() {

  const [editData, setEditData] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  useEffect(() => {
    // var bg:any = document.querySelectorAll('.full-page');
    //   bg.setAttribute("backgroundImage":)
  }, []);




  return (
    <div>
      <section className='bg-dark-1'>
        <div className="container py-5">
          <div className="row">
            <div className="col">
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4 bg-dark-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />
                  <h5 className="my-3 h4">John Smith</h5>
                  <p className='myProfileData'>Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door...</p>
                  <a
                    href="blog-article.html"
                    className="nk-btn nk-btn-rounded nk-btn-color-dark-1 nk-btn-hover-color-main-1"
                  >
                    Szerkesztés
                  </a>
                </div>
                <div className='p-20'>
                  <div className='m-20 h3'>#TAGEK</div>
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
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3 lead">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-10">
                      <i
                        className="fab fa-github fa-2xl"
                        style={{ color: "#333333" }}
                      />
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-10">
                      <i
                        className="fab fa-discord fa-2xl"
                        style={{ color: "#5865F2" }}
                      />
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-10">
                      <i
                        className="fab fa-instagram fa-2xl"
                        style={{ color: 'linear-gradient(to top right, #F58529,#FEDA77, #DD2A7B, #8134AF, #515BD4)' }}
                      />
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-10">
                      <i
                        className="fab fa-facebook-f fa-2xl"
                        style={{ color: "#3b5998" }}
                      />
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className='nk-decorated-h-2 h3 p-15 mt-40'><span> </span>Profil adataim<span> </span></div>
              <div className="card mb-4 bg-dark-4">
                <div className="card-body">

                  {
                    editData
                      ?
                      <>
                        {/* INPUTOK */}
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel">Név</div>
                          <div className="col-sm-8 row gap-4 gap-md-0">
                            <div className="col-md-6">
                              <div className="form-group myform-group">
                                <input type="text" id="vezeteknev" className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group myform-group">
                                <input type="text" id="keresztnev" className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel">Lakcím</div>
                          <div className="col-sm-8 row">
                            <div className="col-md-6">
                              <div className="form-group myform-group">
                                <input type="text" id="lakcim" className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel">Oktatási azonosító</div>
                          <div className="col-sm-8 row">
                            <div className="col-md-6">
                              <div className="form-group myform-group">
                                <input type="text" id="omazonosito" className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel">E-mail cím</div>
                          <div className="col-sm-8 row">
                            <div className="col-md-6">
                              <div className="form-group myform-group">
                                <input type="email" id="email" className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel">Felhasználónév</div>
                          <div className="col-sm-8 row">
                            <div className="col-md-6">
                              <div className="form-group myform-group">
                                <input type="text" id="felhasznalonev" className="myform-control form-control required bg-dark p-10" required />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='d-flex justify-content-end row gap-5 p-20'>
                          <button className='col-sm-3 nk-btn nk-btn-rounded nk-btn-color-main-1'>Mentés</button>
                          <button className='col-sm-3 nk-btn nk-btn-rounded text-dark'>Alaphelyzet</button>
                          <button onClick={() => { setEditData(false) }} className='col-sm-3 nk-btn nk-btn-rounded nk-btn-color-main-1'>Kilépés</button>
                        </div>
                        {/* INPUT VÉGE */}
                      </>
                      :
                      <>
                      {/* DINAMIKUS ADATOK */}
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel">Név</div>
                          <div className="col-sm-8 row">
                            <div className="sm-col-6 myProfileData">
                              Példa Név
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel">Lakcím</div>
                          <div className="col-sm-8 row">
                            <div className="sm-sm-col-6 myProfileData">
                              Példa lakcím
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel">Oktatási azonosító</div>
                          <div className="col-sm-8 row">
                            <div className="sm-col-6 myProfileData">
                              71608965663
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel">E-mail cím</div>
                          <div className="col-sm-8 row">
                            <div className="sm-col-6 myProfileData">
                              email@gmail.com
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row m-5">
                          <div className="col-sm-4 m-auto myProfileLabel">Felhasználónév</div>
                          <div className="col-sm-8 row">
                            <div className="sm-col-6 myProfileData">
                              pelda123
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className='d-flex row justify-content-end gap-5 p-20'>
                          {
                            editPassword ?
                              <></>
                              :
                              <button onClick={() => { setEditPassword(true) }} className="col-sm-3 nk-btn nk-btn-sm nk-btn-rounded nk-btn-color-white">Jelszó módosítása</button>
                          }

                          <button onClick={() => { setEditData(true) }} className='col-sm-3 nk-btn nk-btn-rounded nk-btn-color-main-1'>Adatok módosítása</button>
                        </div>

                        {
                          editPassword ?
                            <>
                              <hr />
                              <div className="row m-5">
                                <div className="col-sm-4 m-auto myProfileLabel">Régi jelszó</div>
                                <div className="col-sm-8 row">
                                  <div className="col-md-6">
                                    <div className="form-group myform-group">
                                      <input type="password" id="regijelszo" className="myform-control form-control required bg-dark p-10" required />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr />
                              <div className="row m-5">
                                <div className="col-sm-4 m-auto myProfileLabel">Új jelszó</div>
                                <div className="col-sm-8 row">
                                  <div className="col-md-6">
                                    <div className="form-group myform-group">
                                      <input type="password" id="ujjelszo" className="myform-control form-control required bg-dark p-10" required />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='d-flex justify-content-end gap-5 p-20'>
                                <button className='nk-btn nk-btn-rounded nk-btn-color-main-1'>Jelszó módosítása</button>
                                <button onClick={() => { setEditPassword(false) }} className='nk-btn nk-btn-sm nk-btn-rounded nk-btn-color-white'>Mégsem</button>
                              </div>
                            </>
                            :

                            <></>
                        }
                      </>
                  }
                </div>
              </div>
              <div className='nk-decorated-h-2 h3 p-15 mt-40'><span> </span>Saját bejegyzéseim<span> </span></div>
              <div className="nk-blog-grid p-20 row d-flex gap-20">

                <div className="nk-blog-post col-6">
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
                <div className="nk-blog-post col-6">
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
                <div className="nk-blog-post col-6">
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
                <div className="nk-blog-post col-6">
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
      </section>

    </div>
  )
}

export default MyProfile