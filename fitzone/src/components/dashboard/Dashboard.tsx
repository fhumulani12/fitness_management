import { GiGymBag } from "react-icons/gi";
import { RiDashboardFill } from "react-icons/ri";
import { SiFitbit } from "react-icons/si";
import { FaMoneyCheck } from "react-icons/fa";
import { MdSportsGymnastics } from "react-icons/md";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiFolderSettingsFill } from "react-icons/ri";
import { GrLogout } from "react-icons/gr";








import './Dashboard.css'


function Dashboard() {
  return (
    <div className="dashboard__container">
        <div className="logo ">
        <GiGymBag size={25} className="icon" />
        <span className="text font-Anton text--spacing">Fitzone <span className="logo__second__color">Management</span></span>
        </div>
      
        <div className="dashboard__list__container">
        <div>
            <h1 className="heading font-Anton text--spacing">Dashboard</h1>
         </div>
            <ul className="dashboard__list">
                <li className="list--text">
                    <a className="link--text font-Roboto">
                    <RiDashboardFill size={25} className="icon" />

                    <span className="text">Overview</span>
                    </a>
                </li>

                <li className="list--text">
                    <a className="link--text font-Roboto">
                    <SiFitbit size={25} className="icon" />

                        <span className="text">Members Management</span>
                    </a>
                </li>

                <li className="list--text">
                    <a className="link--text font-Roboto">
                    <FaMoneyCheck size={25} className="icon"/>
                      <span className="text">                        Membership Plans
                      </span>
                    </a>
                </li>

                <li className="list--text">
                    <a className="link--text font-Roboto">
                    <MdSportsGymnastics size={25} className="icon"/>

                        <span className="text">Trainer Management</span>
                    </a>
                </li>

                <li className="list--text">
                    <a className="link--text font-Roboto">
                    <PiContactlessPaymentFill size={25} className="icon" />
                     <span className="text"> Billing and Payments  </span>
                    </a>
                </li>

                <li className="list--text">
                    <a className="link--text font-Roboto">
                    <IoNotificationsSharp size={25} className="icon" />

                       <span className="text">Notification</span> 
                    </a>
                </li>

                <li className="list--text">
                    <a className="link--text font-Roboto">
                    <RiFolderSettingsFill size={25} className="icon"/>

                        <span className="text font-Roboto font-Roboto" >Settings</span>
                    </a>
                </li>

                <li className="list--text" font-Roboto>
                    <a className="link--text logout">
                    <GrLogout size={25} className="icon" />
                     <span className="text">                        Logout
                     </span>
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Dashboard