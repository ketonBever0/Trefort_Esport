import './_css/dashboard.css'
import { Link } from 'react-router-dom';
import { useEffect, useContext } from "react"
import UserContext from '../_context/UserContext';
function Dashboard() {

    var navbar: any = document.getElementById("dashboard_nav-expand");

    function scrollingSticky() {
        if (window.pageYOffset) {
            //navbar.classList.add("dashboard_sticky");
            navbar.setAttribute("style", "position: fixed, top: 0");
        } else {
            //navbar.classList.remove("dashboard_sticky");
            navbar.setAttribute("style", "position: absolute, top: 0");
        }
    }
    const { setIsDashboardOpen, isDashboardOpen } = useContext(UserContext);


    return (
        <div>
            <a onFocus={()=>{setIsDashboardOpen(false);console.log(isDashboardOpen)}} onBlur={()=>{setIsDashboardOpen(true); console.log(isDashboardOpen)}} id='dashboard_nav-expand' className='' href="#">
                <span className="dashboard_icon dashboard_icon-menu"></span>&nbsp;
                Dashboard
            </a>
            <nav className="dashboard_nav bg-dark h4 text-center">
                <a id="dashboard_nav-collapse" href="#">
                    <span className="dashboard_icon dashboard_icon-cross"></span>
                </a>
                <h3 className='border-main-1 text-main-1 border-2 mt-70 pb-30'>Dashboard</h3>
                <Link to="/users"><a href="#">Felhasználók</a></Link>
                <Link to="/clans"><a href="#">Klánok</a></Link>
                <Link to="/"><a href="#">Bejegyzések</a></Link>
                <Link to="/addevent"> <a href="#">Esemény hozzáadása</a></Link>
                <Link to="/events"> <a href="#">Események szerkesztése</a></Link>
                <Link to="/revieworg"><a href="#">Beküldött szervezetek</a></Link>
                <Link to="/submitorg"><a href="#">Új szervezet</a></Link>
                <Link to="/"><a href="#">Tournament ágrajzok</a></Link>

            </nav>
        </div>
    )
}

export default Dashboard