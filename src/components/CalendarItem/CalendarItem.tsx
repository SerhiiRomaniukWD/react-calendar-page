import classNames from 'classnames';
import { FC } from 'react';
import { dateNormalString, getDayAbbreviation, getMonthDaysTemplate } from '../../utils/date/dateFuncs';

type Props = {
  day: Date;
  currentDay: Date;
  handleSetDay: (date: Date) => void;
};

export const CalendarItem: FC<Props> = ({ 
  day, 
  currentDay,
  handleSetDay 
}) => {
  const monthDaysTemplate = getMonthDaysTemplate(currentDay);

  return (
    <div 
      className={classNames('calendar-item', {
        'calendar-item--active': day.toDateString() === currentDay.toDateString(),
        'calendar-item--alien' : !monthDaysTemplate.includes(dateNormalString(day))
      })}
      onClick={() => handleSetDay(day)}
    >
      <span className="calendar-item_text">{day.getDate()}</span>

      <span className="calendar-item_text">{getDayAbbreviation(day)}</span>
    </div>
  );
};