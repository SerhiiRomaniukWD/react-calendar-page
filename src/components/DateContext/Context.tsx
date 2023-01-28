import { 
  FC, 
  useState, 
  createContext, 
  useEffect
} from "react";
import { DateConfig } from "../../types/DateConfig";

export const DateContext = createContext<DateConfig>({
  date: new Date(),
  isFormVisible: false,
  handleSetDate: () => {},
  increaseMonth: () => {},
  reduceMonth: () => {},
  handleSetDay: () => {},
  handleSetFormVisible: () => {}
});

type Props = {
  children: React.ReactNode;
};

export const Context: FC<Props> = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleSetFormVisible = (value: boolean) => {
    setIsFormVisible(value);
  };

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

  useEffect(() => {
    setIsFormVisible(false);
  }, [date]);

  const value = {
    date,
    isFormVisible,
    handleSetDate,
    increaseMonth,
    reduceMonth,
    handleSetDay,
    handleSetFormVisible
  };

  return (
    <DateContext.Provider value={value}>
      {children}
    </DateContext.Provider>
  );
};
