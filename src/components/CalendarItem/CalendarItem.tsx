import classNames from 'classnames';
import { FC, useContext } from 'react';
import { dateNormalString, getDayAbbreviation, getMonthDaysTemplate } from '../../utils/date/dateFuncs';
import { DateContext } from '../DateContext/Context';

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
  const { handleSetFormVisible } = useContext(DateContext);
  const monthDaysTemplate = getMonthDaysTemplate(currentDay);
  const event = localStorage.getItem(dateNormalString(day));
  const title = event ? JSON.parse(event).title : '';

  return (
    <div 
      className={classNames('calendar-item', {
        'calendar-item--active': day.toDateString() === currentDay.toDateString(),
        'calendar-item--alien' : !monthDaysTemplate.includes(dateNormalString(day))
      })}
      onClick={(e) => {
        if (e.detail === 1) {
          handleSetDay(day);
        } else if (e.detail === 2) {
          handleSetFormVisible(true);
        }
      }}
    >
      <div className="calendar-item_header">
        <span className="calendar-item_text">{day.getDate()}</span>

        <span className="calendar-item_text">{getDayAbbreviation(day)}</span>
      </div>

      <p className="calendar-item_title">{title}</p>
    </div>
  );
};