import './_css/dashboard.css'
import { Link } from 'react-router-dom';

function Dashboard() {

    window.onscroll = function () { myFunction() };

    var navbar:any = document.getElementById("dashboard_nav-expand");

    function myFunction() {
        if (window.pageYOffset) {
            //navbar.classList.add("dashboard_sticky");
            navbar.setAttribute("style", "position: fixed, top: 0");
        } else {
            //navbar.classList.remove("dashboard_sticky");
            navbar.setAttribute("style", "position: absolute, top: 0");
        }
    }

    return (
        <div>
            <a id='dashboard_nav-expand' className='' href="#">
                <span className="dashboard_icon dashboard_icon-menu"></span>&nbsp;
                Dashboard
            </a>
            <nav className="dashboard_nav bg-dark h4 text-center">
                <a id="dashboard_nav-collapse" href="#">
                    <span className="dashboard_icon dashboard_icon-cross"></span>
                </a>
                <h3 className='border-bottom border-warning text-warning border-2 mt-70 pb-30'>Dashboard</h3>
                <Link to="/events"> <a href="#">Események szerkesztése</a></Link>
                <Link to="/revieworg"><a href="#">Beküldött szervezetek</a></Link>
                <Link to="/users"><a href="#">Felhasználók</a></Link>
                <Link to="/"><a href="#">Klánok</a></Link>
                <Link to="/"><a href="#">Bejegyzések</a></Link>
                <Link to="/"><a href="#">Tournament ágrajzok</a></Link>

            </nav>
        </div>
    )
}

export default Dashboard