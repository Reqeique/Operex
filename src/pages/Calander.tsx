import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;
import styles from "./Calander.module.css";

type Value = ValuePiece | [ValuePiece, ValuePiece];
// import { Eventcalendar } from '@mobiscroll/react';

const Calander = () => {
  const [value, onChange] = useState<Value>(new Date(2022,2,1999));

  return (
    <div>
      <Calendar className={styles.calendar} onChange={onChange} value={value} />
    </div>
  );
};

export default Calander;
