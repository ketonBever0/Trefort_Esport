
import Button2 from "../ui/Button2";
import './images/network_icon.png';




function OfflinePage() {

  // const [offline, setOffline] = useState(false);
  // useEffect(() => {
  //   if(!navigator.onLine) setOffline(true);
  // }, []);
  return (
    //   <>
    //   {offline && (
    <div>
      <div className="nk-fullscreen-block">
        <div className="nk-fullscreen-block-middle">
          <div className="container text-center">
            <div className="row">
              <img src="./images/network_icon.png"></img>
              <div>
                <h1 className="h2 m-30">Jelenleg <span className="text-main-1">offline</span> vagy.</h1>
                <hr />
                <div className="text-white m-40">Az oldal csak a hálózathoz való csatlakozás után tölthető be.</div>

                <div className='h4 text-main-1'>Próbáld a következőket:</div>
                <div className='d-flex justify-content-center'>
                  <ul className="text-main-1 col-xl-3 text-start">
                    <li>
                      <strong className="text-white">Wi-Fi kapcsolat ellenőrzése</strong>
                    </li>
                    <li>
                      <strong className="text-white">Mobiladatok bekapcsolása</strong>
                    </li>
                    <li>
                      <strong className="text-white">Repülő üzemmód kikapcsolása</strong>
                    </li>
                  </ul>
                </div>
                <h4 className=" text-main-1">VAGY</h4>
                <div className="text-white">Várj, amíg a kapcsolatod helyreáll.</div>

                <div className="nk-gap-2" />
                <form>


                  <div className='container'>
                    <div className='row justify-content-center gap-5 m-20'>
                      <div className="col-md-2">
                        <div className="form-group myform-group">
                          <input type="text" name="lastName" id="keresztnev" className="myform-control form-control required bg-dark p-10" required />
                          <label className="form-control-placeholder myform-control-placeholder p-10 border" htmlFor="keresztnev">Keresztnév</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="m-20"><Button2 content="Feliratkozom!" /></div>
                  <div className="m-100"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // )}

    // {!offline && (
    //   <div className="h1">Online</div>
    // )}
    // </>
  );
}

export default OfflinePage