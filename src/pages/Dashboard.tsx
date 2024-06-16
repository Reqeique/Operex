import React, { useState, useEffect } from 'react';
import MainContent from "../components/MainContent";
import styles from "./Dashboard.module.css";

// Assuming your actual API endpoint URL (replace with your own)
const API_URL = 'https://ae914234-ac7d-4c56-94b5-17c360554f3d-00-1aaw2r00r13pk.riker.replit.dev/';

async function fetchStudentData(apiUrl = API_URL) { // Use the defined API_URL
  try {
    const response = await fetch(apiUrl, {headers: { 
      method: "GET",
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Header': 'Content-Type, Authorization, X-Requested-With'
    }})
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('API response data:', data); // Log the response data for debugging
    return data;
  } catch (error) {
    console.error('Error fetching student data:', error);
    return null;
  }
}

const getStudentName = studentData => studentData?.name || 'Student Name'; // Assuming "name" is the property

const Dashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchStudentData(API_URL); // Use API_URL from constant
        setStudentData(data[0]);
      } catch (error) {
        console.error('Error fetching student data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.helloDanielWelcomeContainer}>
        <span className={styles.helloDanielWelcomeContainer1}>
          {isLoading ? (
            <p className={styles.helloDaniel}>Loading...</p>
          ) : studentData ? (
            <p className={styles.helloDaniel}>Hello, {getStudentName(studentData)}</p>
          ) : (
            <p className={styles.helloDaniel}>Error fetching data</p>
          )}
          <p className={styles.welcomeBack}>Welcome Back</p>
        </span>
      </h1>
      <MainContent />
    </div>
  );
};

export default Dashboard;