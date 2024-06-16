import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./HomePage.module.css";
import Dashboard from "./Dashboard"
import SelfServiceForum from './SelfServiceForum'
import Focus from './Focus'
import {
  Routes,
  Route,
  useNavigationType,
  useLocation, useNavigate
} from "react-router-dom";

import AdminLogin from "./AdminLogin";
import StudentLogin from "./StudentLogin";
import Calander from "./Calander";

const HomePage: FunctionComponentHomePageType = () => {
  const navigate = useNavigate();
  const handleCalendarClick = () => {
    navigate('/calander');
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleSSFClick = () => {
    navigate('/ssf')
  }
  const handleAssistantClick = () => {
    navigate('/assistant')
  }
  const handleFocusClick = () => {
    navigate('/focus')
  }
  const handleResourcesClick = () => {
    navigate('/resources')
  }
  return (
    <div className={styles.homePage}>
      <header className={styles.homePageInner}>
        <nav className={styles.frameParent}>
          <div className={styles.logoParent}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo.svg"
            />
            <div className={styles.operexWrapper}>
              <a className={styles.operex}>Operex</a>
            </div>
          </div>
          <input
            className={styles.frameChild}
            placeholder="Talk to Operexai"
            type="text"
            onClick={handleAssistantClick}
          />
          <div className={styles.amWrapper}>
            <a className={styles.am}>09:27 AM</a>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.sundayMay52023Wrapper}>
              <div className={styles.sundayMay5}>Sunday, May 5, 2023</div>
            </div>
            <div className={styles.accountIconParent}>
              <div className={styles.accountIcon} />
              <a className={styles.d}>D</a>
            </div>
          </div>
        </nav>
      </header>

      {/*  */}
    <div style={{ display: "inline-grid", left: '0', position: 'absolute', gridTemplateColumns: "auto auto"}}>
      <FrameComponent1 onCalendarClick={handleCalendarClick} onDashboardClick={handleDashboardClick} onSSFClick={handleSSFClick} onFocusClick={handleFocusClick} onResourcesClick={handleResourcesClick}/>
      {/* {window.location.pathname === "/calander" ? <Calendar /> : <Dashboard />} */}
      <Routes>
      
      <Route path="/calander" element={<Calander />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ssf" element={<SelfServiceForum />} />
      <Route path="/focus" element={<Focus />} />
      
    </Routes>
      </div>
      
      <div className={styles.homePageChild}>
       
      </div>
    </div>
  );
};

export default HomePage;
