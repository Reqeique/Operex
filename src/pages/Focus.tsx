import { FunctionComponent } from "react";
import styles from "./Focus.module.css";

import React, { useState, useEffect } from 'react';

const FocusTimer = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false); // Track whether the timer is running

    const handleButtonClick = () => {
        if (isRunning) {
            // Stop the timer
            clearInterval(interval);
            setIsRunning(false);
        } else {
            // Start the timer
            setIsRunning(true);
        }
    };

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    // Timer ended, handle completion
                    clearInterval(interval);
                    setIsRunning(false);
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [minutes, seconds, isRunning]);

    return (
        <div className={styles.FocusTimer}>
            <h3>Focus Timer </h3>
            <span className={styles.TimeDigits}>
                {minutes < 10 ? '0' + minutes : minutes}:
                {seconds < 10 ? '0' + seconds : seconds}
            </span>
            <button
                className={styles.FocusTimerButton}
                onClick={handleButtonClick}
            >
                {isRunning ? 'Stop' : 'Start'}
            </button>
        </div>
    );
};

const DailyProgress = () => { return (<>
      <h3>Daily Progress </h3>
    <div className={styles.DailyProgress}>
       

        <div>
            <span>Yesterday</span>
            <h2>1.5</h2>
            <span>Hours</span>
        </div>
        <div>
        
           <div className={styles.DailyGoalWrapper}>
            <span>Daily Goal</span>
            <h2>1.5</h2>
            <span>Hours</span>
           </div>
            
        </div>
        <div>
        <span>Streak</span>
            <h2>2</h2>
            <span>Days</span>
        </div>
    </div> </> )
}
const Focus = () => {
    return (
        <div className={styles.focus}>


            <div className={styles.column1}>


                <div className={styles.timer}>
                    <FocusTimer />
                </div>
                <div className={styles.goal}>
                    <DailyProgress/>
                </div>

            </div>
            <div className={styles.column2}>
                <StudyProgressChart/>

            </div>


        </div>
    );
};
// src/StudyProgressChart.js

import { Line ,} from 'react-chartjs-2';
import {Chart,   CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend} from 'chart.js';
 
const studyHours = [1,2,1,4,5,1,1,1];
Chart.register( CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend)
const StudyProgressChart = () => {
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
        datasets: [
            {
                label: 'Study Hours',
                data: studyHours,
                borderColor: 'blue',
                fill: false,
                tension: 0.4, 
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false, // Disable X-axis grid lines
                },
            },
            y: {
                type: 'linear',
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Hours',
                },
         
                grid: {
                    display: false, // Disable X-axis grid lines
                },
            },
        },
    };

    return (
        <div className={styles.StudyProgressChart}>
            <Line data={data} options={options} />
        </div>
    );
};



export default Focus;
