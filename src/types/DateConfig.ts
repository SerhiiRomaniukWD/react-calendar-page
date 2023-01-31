export type DateConfig = {
  date: Date;
  isFormVisible: boolean,
  reduceMonth: () => void;
  increaseMonth: () => void;
  handleSetDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetDay: (date: Date) => void;
  handleSetFormVisible: () => void;
};
