import { FC, useState } from 'react';
import { Calendar } from './components/Calendar';
import { DateNavigator } from './components/DateNavigator';

const App: FC = () => {
  const [date, setDate] = useState(new Date());

  const handleSetDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(event.target.value));
  };

  const increaseMonth = () => {
    const newDate = new Date(date.setMonth(date.getMonth()+1));

    setDate(newDate);
  }; 

  const reduceMonth = () => {
    const newDate = new Date(date.setMonth(date.getMonth()-1));

    setDate(newDate);
  };

  return (
    <div className="main">
      <div className="container">
        <DateNavigator 
          date={date}
          increaseMonth={increaseMonth}
          reduceMonth={reduceMonth}
          handleSetDate={handleSetDate}
        />

        <Calendar date={date}/>
      </div>
    </div>
  );
};

export default App;
