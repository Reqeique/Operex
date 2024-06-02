import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  onCalendarClick?: () => void;
  onDashboardClick?: () => void;
  onSSFClick?: () => void;

};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "", onCalendarClick, onDashboardClick, onSSFClick,
}) => {
  const handleCalendarClick = () => {
    if (onCalendarClick) {
      onCalendarClick();
    }
    };
  const handleDashboardClick = () => {
    if (onDashboardClick) {
      onDashboardClick();
    }
  };
  const handleSSFClick = () => {
    if (onSSFClick) {
      onSSFClick();
    }
  };
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.navP }>
      
      <div className={styles.dashboardWrapper}>
        <a className={styles.dashboard} onClick={handleDashboardClick}>Dashboard</a>
      </div>
      <div className={styles.resourcesWrapper}>
        <b className={styles.resources}>Resources</b>
      </div>
      <div className={styles.calendarWrapper}>
        <a className={styles.calendar} onClick={handleCalendarClick}>Calendar</a>
      </div>
      <div className={styles.reportsWrapper}>
        <b className={styles.reports}>Reports</b>
      </div>
      <div className={styles.studyWrapper} >
        <b className={styles.study}>Study</b>
      </div>
      <div className={styles.studyWrapper} onClick={handleSSFClick}>
        <b className={styles.study}>Self Service Forum</b>
      </div>
      <div className={styles.settingWrapper}>
        <b className={styles.setting}>Setting</b>
      </div>
      <div className={styles.logoutParentWrapper}>
          <img
            className={styles.logoutIcon}
            loading="lazy"
            alt=""
            src="/logout.svg"
          />
          <div className={styles.logoutWrapper}>
            <div className={styles.logout}>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
