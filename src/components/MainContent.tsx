import { FunctionComponent } from "react";
import styles from "./MainContent.module.css";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
export type MainContentType = {
  className?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override the typography of the calendar
    calander: {
      fontFamily: "--font-be-vietnam-pro",
      fontWeight: '500'
    },
  })
);
const MainContent: FunctionComponent<MainContentType> = ({
  className = "",
}) => {
  const classes = useStyles()
  
  return (
    <main className={[styles.mainContent, className].join(" ")}>
     
        <textarea className={styles.progressTop} rows={16} cols={35} />
        <div className={styles.academicProgress}>
            <div className={styles.academicProgressBase} />
            <div className={styles.progressContent1}>
              <div className={styles.termProgressLabel}>
                <b className={styles.academicProgress1}>Academic Progress</b>
              </div>
              <div className={styles.gpaStanding}>
                <img
                  className={styles.gpaStandingChild}
                  loading="lazy"
                  alt=""
                  src="/vector-13.svg"
                />
              </div>
              <div className={styles.progressName}>
                <input
                  className={styles.termProgressRow}
                  placeholder="Term Progress(weeks)"
                  type="text"
                />
                <div className={styles.progressBarContainer}>
                  <div className={styles.progressBarBase} />
                  <div className={styles.progressBar} />
                </div>
              </div>
            </div>
            <div className={styles.gradeContentWrapper}>
              <div className={styles.gradeContent}>
                <div className={styles.termBar}>
                  <div className={styles.gpaBase} />
                  <div className={styles.gradeLabel}>
                    <div className={styles.gpaSelector} />
                    <div className={styles.gradeTitle}>!</div>
                  </div>
                  <div className={styles.gPAName}>
                    <div className={styles.gpaPlaceholderParent}>
                      <b className={styles.gpaPlaceholder}>3.87</b>
                      <div className={styles.progressChart}>
                        <div className={styles.gpa}>GPA</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.standing}>
                  <div className={styles.standingRow}>
                    <div className={styles.gpaSelector1} />
                    <div className={styles.standingValue}>!</div>
                  </div>
                  <div className={styles.standingBase} />
                  <div className={styles.standingValue1}>
                    <div className={styles.standingValueRow}>
                      <b className={styles.standingPlaceholder}>10/40</b>
                      <div className={styles.standing1}>Standing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className={styles.announcement}>
          <div className={styles.announcementChild} />
          <div className={styles.announcementDetails}>
            <div className={styles.announcementContent}>
              <b className={styles.announcement1}>Announcement</b>
              <div className={styles.navigation}>
                <img
                  className={styles.iconsnavigateBefore}
                  loading="lazy"
                  alt=""
                  src="/iconsnavigate-before.svg"
                />
                <img
                  className={styles.iconsnavigateNext}
                  loading="lazy"
                  alt=""
                  src="/iconsnavigate-next.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.announcementIcon}>
            <img
              className={styles.announcementDividerIcon}
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
          </div>
          <div className={styles.taskContainer}>
            <div className={styles.taskHeader}>
              <div className={styles.announcementContent1}>
                <div className={styles.teacherAnnouncment} />
                <div className={styles.announcementDetails1}>
                  <div className={styles.teacherName}>
                    <div className={styles.announcementList}>
                      <img
                        className={styles.teacherIcon}
                        loading="lazy"
                        alt=""
                        src="/teacher-icon.svg"
                      />
                    </div>
                    <div className={styles.taskNameContainer}>
                      <b className={styles.mrBantider}>Mr. Bantider</b>
                      <div className={styles.announcementDateWrapper}>
                        <div className={styles.announcementDate}>
                          <div className={styles.dueDate} />
                          <div className={styles.tomorrow}>Tomorrow</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className={styles.justWantedTo}>
                  Just wanted to drop a quick reference for the upcoming
                  assignment. I've attached a completed example to help you
                  visualize the format, content, and expectations
                </p>
              </div>
              <div className={styles.teacherAnnouncmentParent}>
                <div className={styles.teacherAnnouncment1} />
                <div className={styles.frameWrapper}>
                  <div className={styles.teacherIconParent}>
                    <div className={styles.teacherIcon1} />
                    <div className={styles.frameContainer}>
                      <div className={styles.mrMehatebeParent}>
                        <b className={styles.mrMehatebe}>Mr. Mehatebe</b>
                        <div className={styles.taskDateContainer}>
                          <div className={styles.announcementDate1}>
                            <div className={styles.dueDate1} />
                            <div className={styles.tomorrow1}>Tomorrow</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className={styles.justWantedTo1}>
                  Just wanted to drop a quick reference for the upcoming
                  assignment. I've attached a completed example to help you
                  visualize the format, content, and expectations
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.calander}>
          <div className={styles.calanderBox} />

          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{
              calendarWeekNumberHeaderText: '#',
              calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
            }}
          >
            <DateCalendar sx={{ fontWeight: 500 }}className={classes.calander} displayWeekNumber />
          </LocalizationProvider>
          <div className={styles.calendarHeader}>

          </div>

        </div>

        <div className={styles.myTask}>
          <div className={styles.myTaskBox} />
          <div className={styles.taskContent}>
            <div className={styles.taskHeader1}>
              <b className={styles.myTask1}>My Task</b>
              <button className={styles.addTaskButton}>
                <div className={styles.addTask} />
                <img
                  className={styles.iconsadd24px}
                  loading="lazy"
                  alt=""
                  src="/iconsadd-24px.svg"
                />
                <div className={styles.addTask1}>Add Task</div>
              </button>
            </div>
          </div>
          <div className={styles.taskList}>
            <div className={styles.taskHeaderContainer}>
              <b className={styles.prepareAssessmentQuestion}>
                Prepare Assessment Question
              </b>
              <img
                className={styles.iconsmore24px}
                loading="lazy"
                alt=""
                src="/iconsmore-24px@2x.png"
              />
            </div>
            <div className={styles.setAssessmentQuestionFormFWrapper}>
              <div
                className={styles.setAssessmentQuestion}
              >{`Set Assessment Question Form For Project `}</div>
            </div>
            <div className={styles.tuesdayWrapper}>
              <div className={styles.tuesday}>Tuesday</div>
            </div>
          </div>
          <div className={styles.taskIconContainer}>
            <img
              className={styles.taskDividerIcon}
              loading="lazy"
              alt=""
              src="/vector-6.svg"
            />
          </div>
        </div>
   
    </main>
  );
};

export default MainContent;
