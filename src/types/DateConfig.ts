export type DateConfig = {
  date: Date;
  reduceMonth: () => void;
  increaseMonth: () => void;
  handleSetDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetDay: (date: Date) => void;
};
