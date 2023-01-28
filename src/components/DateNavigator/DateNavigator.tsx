import { FC, useContext } from 'react';
import { CreateButton } from '../CreateButton';
import { DateContext } from '../DateContext/Context';
import { DateController } from '../DateController';
import { DateInput } from '../DateInput';


export const DateNavigator: FC = () => {
  const {
    date,
    increaseMonth,
    reduceMonth,
    handleSetDate
  } = useContext(DateContext);

  return (
    <div className="date-navigator">
      <CreateButton />

      <div className="date-container">
        <DateController 
          date={date} 
          increaseMonth={increaseMonth} 
          reduceMonth={reduceMonth} 
        />

        <DateInput date={date} handleSetDate={handleSetDate}/>
      </div>
    </div>
  );
};
