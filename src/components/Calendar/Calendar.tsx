import { FC, useContext } from 'react';
import { CalendarItem } from '../CalendarItem';
import { DateContext } from '../DateContext/Context';
import { v4 as uuidv4 } from 'uuid';
import { getFullDaysTemplate } from '../../utils/date/dateFuncs';
import { EventForm } from '../EventForm';
import classNames from 'classnames';

export const Calendar: FC = () => {
  const {
    date,
    handleSetDay,
    isFormVisible
  } = useContext(DateContext);

  const fullDaysTemplate = getFullDaysTemplate(date);

  
  return (
    <div className="calendar">
      {isFormVisible && (
        <EventForm />
      )}

      <div className={classNames('calendar_box', {
        'calendar_box--blur': isFormVisible
      })}>
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
