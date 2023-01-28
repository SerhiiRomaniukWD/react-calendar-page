import { FC, useContext } from 'react';
import { CalendarItem } from '../CalendarItem';
import { DateContext } from '../DateContext/Context';
import { v4 as uuidv4 } from 'uuid';
import { getFullDaysTemplate } from '../../utils/date/dateFuncs';
import { CreateEventForm } from '../CreateEventForm';

export const Calendar: FC = () => {
  const {
    date,
    handleSetDay,
    isFormVisible
  } = useContext(DateContext);

  const fullDaysTemplate = getFullDaysTemplate(date);

  
  return (
    <div className="calendar">
      <div className="calendar_box">
        {isFormVisible && (
          <CreateEventForm />
        )}

        {fullDaysTemplate.map(day => (
          <CalendarItem 
            day={day} 
            currentDay={date}
            handleSetDay={handleSetDay}
            key={uuidv4()}
          />
        ))}
      </div>
    </div>
  );
};
