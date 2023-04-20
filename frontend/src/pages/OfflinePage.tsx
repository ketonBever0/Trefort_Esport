
import Button2 from "../ui/Button2";



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
              <div className="">
                <h1 className="h2 m-30">Jelenleg <span className="text-main-1">offline</span> vagy.</h1>
                <div className="text-white m-40">Az oldal csak a hálózathoz való csatlakozás után tölthető be.</div>
                <div className='h4'>Próbáld a következőket:</div>
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
                <h4>VAGY</h4>
                <div className="text-white">Várj, amíg a kapcsolatod helyreáll.</div>
                <div className="nk-gap-2" />
                <form>
                  <div className='d-flex justify-content-center'>
                    <div className="form-floating border3">
                      <input type="email" className="form-control required bg-transparent" id="nev" placeholder="name@example.com" />
                      <label htmlFor="nev" className='opacity-50'>E-mail cím</label>
                    </div>
                  </div>
                  <Button2 content="Feliratkozom!"/>
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