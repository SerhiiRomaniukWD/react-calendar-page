import { FC, memo } from "react";

type Props = {
  date: Date;
  handleSetDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DateInput: FC<Props> = memo(({ date, handleSetDate }) => {
  const dateToString = date.toISOString().split('T')[0];

  return (
    <label className="date-input">
      <span className="date-input_button">📅</span>
        
      <input 
        type="date" 
        value={dateToString} 
        onChange={handleSetDate}
        className="date-input_input"
      />
    </label>
  );
});
