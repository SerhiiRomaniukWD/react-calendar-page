import { 
  FC, 
  useState, 
  createContext 
} from "react";
import { DateConfig } from "../../types/DateConfig";

export const DateContext = createContext<DateConfig>({
  date: new Date(),
  handleSetDate: () => {},
  increaseMonth: () => {},
  reduceMonth: () => {},
  handleSetDay: () => {}
});

type Props = {
  children: React.ReactNode;
};

export const Context: FC<Props> = ({ children }) => {
  const [date, setDate] = useState(new Date());

  const handleSetDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(event.target.value));
  };

  const handleSetDay = (date: Date) => {
    setDate(state => {
      return new Date(date);
    })
  };

  const increaseMonth = () => {
    const newDate = new Date(date.setMonth(date.getMonth()+1));

    setDate(newDate);
  }; 

  const reduceMonth = () => {
    const newDate = new Date(date.setMonth(date.getMonth()-1));

    setDate(newDate);
  };

  const value = {
    date,
    handleSetDate,
    increaseMonth,
    reduceMonth,
    handleSetDay
  };

  return (
    <DateContext.Provider value={value}>
      {children}
    </DateContext.Provider>
  );
};
