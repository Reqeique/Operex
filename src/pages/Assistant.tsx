// Assistant.js

import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { ChatOpenAI } from "@langchain/openai"
import { ChatPromptTemplate } from "@langchain/core/prompts"
import { StringOutputParser } from "@langchain/core/output_parsers"
import { evaluate } from "langsmith/evaluation"
import Markdown from 'react-markdown';

import { AiOutlineSend } from 'react-icons/ai';
import styles from './Assistant.module.css'; // Import your module CSS file
const API_KEY = "AIzaSyCpfCU7Ni0RPuJxooNlCcMkXZeFalwr4n8"; // Replace with your actual API key
const MODEL_NAME = "gemini-1.5-pro"; //"tunedModels/operex-7txxjmdec8zd";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// Target task definition


import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
const callGenerativeAI = async (prompt: string) => {
  const model_ = new ChatGoogleGenerativeAI({
    apiKey: API_KEY,
    model: "gemini-pro",
    maxOutputTokens: 2048,
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
      },
    ],
  })
  const res = await model_.stream([
    ["human", "Who are you"],
    ["assistant", "Iam operex"],
    ["human", "Who are you"]
    
  ]);
  
  console.info(res);
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 819,
  };

  const r = [
    { text: "human: What are the upcoming deadlines for course registration?"},
    { text:  "chatbot: The registration deadline for Fall 2024 is September 15." },
    { text:  "human: Help me reset my password for the student portal."},
    { text:  "chatbot:  To reset your password please visit the Forgot Password link on the login page." },
    { text:  "human: Show me my current GPA."}, {text:  "chatbot: Your current GPA is 3.75." },
    { text:  "human: How do I enroll in a course?"},{text:  "chatbot: To enroll in a course, go to the Courses tab, select your desired course, and click ‘Enroll.’" },
    { text:  "human: Where can I access my grades?"},{text:  "chatbot: Access your grades by navigating to ‘Academic Records Transcripts.’" },
    { text:  "human: What’s the academic calendar for this semester?"},{text:  "chatbot:  Explore the academic calendar here." },
    { text:  "human: I’m having trouble logging in. What should I do?"},{text:  "chatbot: If you encounter login problems, clear your browser cache and try again." },
    { text:  "human: Recommend some relevant courses for my major."},{text:  "chatbot: Considering your major in Computer Science, we recommend taking ‘Advanced Algorithms’ next semester." },
    { text:  "human: Notify me about upcoming workshops."},{text:  "chatbot:  Your final project submission workshop is scheduled for tomorrow." },
    { text:  "human: Is my personal information secure?"},{text:  "chatbot: Your personal information remains encrypted and secure." },
    { text:  "human: What are the upcoming deadlines for course registration?"},{text:  "chatbot: The registration deadline for Fall semester is August 31." },
    { text:  "human: Help me reset my password for the student portal."},{text:  "chatbot: To reset your password, visit the ‘Forgot Password’ link on the login page." },
    { text:  "human: Show me my current GPA."},{text:  "chatbot: Your current GPA is 3.5." },
    { text:  "human: How do I enroll in a class?"},{text:  "chatbot: To enroll in a class, go to ‘Course Registration’ and select your desired course." },
    

  ]
  const parts = [
    { text: "human: What are the upcoming deadlines for course registration?"},
    // { text:  "chatbot: The registration deadline for Fall 2024 is September 15." },
    // { text:  "human: Help me reset my password for the student portal."},
    // { text:  "chatbot:  To reset your password please visit the Forgot Password link on the login page." },
    // { text:  "human: Show me my current GPA."}, {text:  "chatbot: Your current GPA is 3.75." },
    // { text:  "human: How do I enroll in a course?"},{text:  "chatbot: To enroll in a course, go to the Courses tab, select your desired course, and click ‘Enroll.’" },
    // { text:  "human: Where can I access my grades?"},{text:  "chatbot: Access your grades by navigating to ‘Academic Records Transcripts.’" },
    // { text:  "human: What’s the academic calendar for this semester?"},{text:  "chatbot:  Explore the academic calendar here." },
    // { text:  "human: I’m having trouble logging in. What should I do?"},{text:  "chatbot: If you encounter login problems, clear your browser cache and try again." },
    // { text:  "human: Recommend some relevant courses for my major."},{text:  "chatbot: Considering your major in Computer Science, we recommend taking ‘Advanced Algorithms’ next semester." },
    // { text:  "human: Notify me about upcoming workshops."},{text:  "chatbot:  Your final project submission workshop is scheduled for tomorrow." },
    // { text:  "human: Is my personal information secure?"},{text:  "chatbot: Your personal information remains encrypted and secure." },
    // { text:  "human: What are the upcoming deadlines for course registration?"},{text:  "chatbot: The registration deadline for Fall semester is August 31." },
    // { text:  "human: Help me reset my password for the student portal."},{text:  "chatbot: To reset your password, visit the ‘Forgot Password’ link on the login page." },
    // { text:  "human: Show me my current GPA."},{text:  "chatbot: Your current GPA is 3.5." },
    // { text:  "human: How do I enroll in a class?"},{text:  "chatbot: To enroll in a class, go to ‘Course Registration’ and select your desired course." },
    // { text:  "human: Where can I find my report card?"},{text:  "chatbot: Your report card is available under ‘Academic Records’ > ‘Transcripts.’" },
    // { text:  "human: What’s the schedule for next week?"},{text:  "chatbot: View your class schedule under ‘My Schedule’ for the upcoming week." },
    // { text:  "human: I missed a class. Can I get the lecture notes?"},{text:  "chatbot: Contact your teacher or check the ‘Class Materials’ section for lecture notes." },
    // { text:  "human: Is there a school club for coding?"},{text:  "chatbot: Explore the ‘Clubs and Activities’ page to find the Coding Club." },
    // { text:  "human: How can I apply for scholarships?"},{text:  "chatbot: Apply for scholarships through the ‘Financial Aid’ section." },
    // { text:  "human: Notify me about school events."},{text:  "chatbot: You’ll receive notifications about events via email and the portal." },
    // { text:  "human: Can I change my elective course?"},{text:  "chatbot: Submit an elective change request through the ‘Course Change’ form." },
    // { text:  "human: Is my personal information secure?"},{text:  "chatbot: Your data is encrypted and protected. We prioritize privacy." },
    // { text:  "human: Recommend some math courses for me."},{text:  "chatbot: Based on your profile, consider taking ‘Algebra II’ or ‘Statistics.’" },
    // { text:  "human: Help me with my locker combination."},{text:  "chatbot: Visit the school office—they’ll assist you with your locker." },
    // { text:  "human: Where can I find the school calendar?"},{text:  "chatbot: The school calendar is posted on the homepage." },
    // { text:  "human: What’s the lunch menu for tomorrow?"},{text:  "chatbot: Check the ‘Cafeteria’ section for the daily menu." },
    // { text:  "human: Can I see my attendance record?"},{text:  "chatbot: Your attendance history is available under ‘Attendance.’" },
    // { text:  "human: Is there a school app for announcements?"},{text:  "chatbot: Download the ‘Operex Student Connect’ app for announcements." },
    // { text:  "human: Provide details about the upcoming science fair."},{text:  "chatbot: Find science fair details in the ‘Events’ section." },
    // { text:  "human: Help me with my college applications."},{text:  "chatbot: Visit ‘College Counseling’ for application guidance." },
    // { text:  "human: who are you"},{text:  "chatbot: Iam an operexai, OperexAI is an advanced virtual assistant meticulously crafted to enhance your experience with the Operex Student Portal. Whether you’re a student, educator, or administrator, OperexAI is here to simplify your academic journey, streamline administrative tasks, and empower you with personalized assistance."}
  ];
  const safetySettings: any = [];
  const parfts = [
    { text: "human:What are the upcoming deadlines for course registration?"},
    { text: "chatbot:The registration deadline for Fall 2024 is September 15." },
    { text: "human:Help me reset my password for the student portal."},
    { text: "chatbot: To reset your password please visit the Forgot Password link on the login page." },
    { text: "human:Show me my current GPA."}, {text: "chatbot:Your current GPA is 3.75." },
    { text: "human:How do I enroll in a course?"},{text: "chatbot:To enroll in a course, go to the Courses tab, select your desired course, and click ‘Enroll.’" },
    { text: "human:Where can I access my grades?"},{text: "chatbot:Access your grades by navigating to ‘Academic Records Transcripts.’" },
    { text: "human:What’s the academic calendar for this semester?"},{text: "chatbot: Explore the academic calendar here." },
    { text: "human:I’m having trouble logging in. What should I do?"},{text: "chatbot:If you encounter login problems, clear your browser cache and try again." },
    { text: "human:Recommend some relevant courses for my major."},{text: "chatbot:Considering your major in Computer Science, we recommend taking ‘Advanced Algorithms’ next semester." },
    { text: "human:Notify me about upcoming workshops."},{text: "chatbot: Your final project submission workshop is scheduled for tomorrow." },
    { text: "human:Is my personal information secure?"},{text: "chatbot:Your personal information remains encrypted and secure." },
    // { text: "human:What are the upcoming deadlines for course registration?"},{text: "chatbot:The registration deadline for Fall semester is August 31." },
    // { text: "human:Help me reset my password for the student portal."},{text: "chatbot:To reset your password, visit the ‘Forgot Password’ link on the login page." },
    // { text: "human:Show me my current GPA."},{text: "chatbot:Your current GPA is 3.5." },
    // { text: "human:How do I enroll in a class?"},{text: "chatbot:To enroll in a class, go to ‘Course Registration’ and select your desired course." },
    // { text: "human:Where can I find my report card?"},{text: "chatbot:Your report card is available under ‘Academic Records’ > ‘Transcripts.’" },
    // { text: "human:What’s the schedule for next week?"},{text: "chatbot:View your class schedule under ‘My Schedule’ for the upcoming week." },
    // { text: "human:I missed a class. Can I get the lecture notes?"},{text: "chatbot:Contact your teacher or check the ‘Class Materials’ section for lecture notes." },
    // { text: "human:Is there a school club for coding?"},{text: "chatbot:Explore the ‘Clubs and Activities’ page to find the Coding Club." },
    // { text: "human:How can I apply for scholarships?"},{text: "chatbot:Apply for scholarships through the ‘Financial Aid’ section." },
    // { text: "human:Notify me about school events."},{text: "chatbot:You’ll receive notifications about events via email and the portal." },
    // { text: "human:Can I change my elective course?"},{text: "chatbot:Submit an elective change request through the ‘Course Change’ form." },
    // { text: "human:Is my personal information secure?"},{text: "chatbot:Your data is encrypted and protected. We prioritize privacy." },
    // { text: "human:Recommend some math courses for me."},{text: "chatbot:Based on your profile, consider taking ‘Algebra II’ or ‘Statistics.’" },
    // { text: "human:Help me with my locker combination."},{text: "chatbot:Visit the school office—they’ll assist you with your locker." },
    // { text: "human:Where can I find the school calendar?"},{text: "chatbot:The school calendar is posted on the homepage." },
    // { text: "human:What’s the lunch menu for tomorrow?"},{text: "chatbot:Check the ‘Cafeteria’ section for the daily menu." },
    // { text: "human:Can I see my attendance record?"},{text: "chatbot:Your attendance history is available under ‘Attendance.’" },
    // { text: "human:Is there a school app for announcements?"},{text: "chatbot:Download the ‘Operex Student Connect’ app for announcements." },
    // { text: "human:Provide details about the upcoming science fair."},{text: "chatbot:Find science fair details in the ‘Events’ section." },
    // { text: "human:Help me with my college applications."},{text: "chatbot:Visit ‘College Counseling’ for application guidance." }
  ];

  
  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  });

  const response = result.response;
  return response.text();
};

const callAi = async (message:string) => {
 
    const requestOptions = {
      //  mode: 'no-cors' ,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
    };

    const apiUrl = 'https://bdbe-196-188-139-57.ngrok-free.app/send_message'; // Adjust the API endpoint

    const apiResponse = await fetch(apiUrl, requestOptions);
    const data = await apiResponse.json();

    return (data.response);

}



const Assistant = () => {
  const [messages, setMessages] = useState([
    { message: 'Hello, how can I assist you today?', isUser: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = async () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { message: inputValue, isUser: true }]);
      // Call the API to get a response
      const response = await callAi(inputValue);
      // Add the response to the messages
      setMessages([...messages, { message: response, isUser: false }]);
      setInputValue('');
    }
  };



  return (
    <Flex className={styles.container} direction="column" h="100vh">
      <Box className={styles.messageBox} flex={1} overflowY="auto" p={4}>
        {messages.map((message, index) => (
          <Text
            key={index}
            align={message.isUser ? 'right' : 'left'}
            className={styles.message}
          >
            <Markdown>{message.message}</Markdown>
          </Text>
        ))}
      </Box>
      <InputGroup w="100%" h="10vh" position="fixed" bottom={0}>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className={styles.input}
        />
        <InputRightElement>
          <IconButton
            h="10vh"
            w="10vh"
            aria-label="Send message"
            icon={<AiOutlineSend />}
            onClick={sendMessage}
            className={styles.sendButton}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default Assistant;
