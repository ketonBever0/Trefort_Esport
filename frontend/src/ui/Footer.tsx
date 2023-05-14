import { useEffect } from 'react';
import './_css/footer.css'

function Footer() {

    function counter(id: any, start: any, end: any, duration: any) {
        let obj: any = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }

    useEffect(() => {
        counter("count1", 0, 400, 2000);
        counter("count2", 0, 70, 2000);
        counter("count3", 0, 200, 2000);
    }, [])

    return (
        <div>
            <div className="row vertical-gap">
                <div className="col-lg-4 bg-black">
                    <div className="nk-feature-2 h-100 bg-black">
                        <div className="nk-feature-icon">
                            <div id='count1' className="nk-count h2 mb-0"></div>
                        </div>
                        <div className="nk-feature-cont text-center">
                            <h3 className="nk-feature-title">Regisztrált felhasználó</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg bg-black">
                    <div className="nk-feature-2 h-100 bg-black border-right-main-1 border-left-main-1">
                        <div className="nk-feature-icon">
                            <div id='count2' className="nk-count h2 mb-0"></div>
                        </div>
                        <div className="nk-feature-cont text-center">
                            <h3 className="nk-feature-title">Eddig meghirdetett esemény</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 bg-black responsiveBorder">
                    <div className="nk-feature-2 h-100 bg-black">
                        <div className="nk-feature-icon">
                            <div id='count3' className="nk-count h2 mb-0"></div>
                        </div>
                        <div className="nk-feature-cont text-center">
                            <h3 className="nk-feature-title">Regisztrált szervezet</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' p-10 justify-content-center bg-black border-top-main-1 border-btm-main-1'>
                <div className='text-center m-10'>
                    <a className='footerLink text-center' href="https://taszi.hu/" target="_blank">
                        <span><img className='logoImg' style={{ width: "100px" }} src="https://taszi.hu/img/trefort_logo.png" /></span> <br />
                        <span className='mb-10 fw-bold w-100'>Trefort Ágoston Technikum, Szakképző Iskola és Kollégium</span>
                    </a> <br />
                    <div className="nk-gap" />
                    <a className='text-decoration-none' href="https://www.google.com/maps?q=B%C3%A9k%C3%A9scsaba,+Gyulai+%C3%BAt+32,+5600&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj_s53k7O_-AhUP7aQKHYzDC94Q_AUoAXoECAEQAw" target='_blank'><span className='footerLink'><i className="fa-solid fa-location-dot"></i> Békéscsaba, Gyulai út 32, 5600</span></a> <br />
                    <div className="nk-gap" />
                    <a className='text-decoration-none' href="tel:06664445110"><span className='footerLink'><i className="fa-solid fa-phone"></i> (06 66) 444 5110</span></a>
                </div>
            </div>
            <div className="nk-copyright pb-20 pt-20 bg-black m-auto">
                <div className="container justify-content-center">
                    <div className='d-flex align-items-center ml-30 bszc'>
                        <a className='footerLink text-center' href="https://bekescsabai.szc.edir.hu/" target='_blank'>
                            <img style={{ width: "50px" }} src="https://www.nemesgszi.hu/tanuljnalunk/images/homeslider/img-thumb_bszc.png" />
                            <span className='ml-10'><b>BSZC</b> • Békéscsabai Szakképzési Centrum</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer