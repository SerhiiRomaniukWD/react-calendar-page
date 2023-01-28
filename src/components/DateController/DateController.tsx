import { FC } from "react";
import { Arrow } from "../Arrow";

type Props = {
  date: Date;
  reduceMonth: () => void;
  increaseMonth: () => void;
};

export const DateController: FC<Props> = ({
  date,
  reduceMonth,
  increaseMonth
}) => {
  const monthToString = date.toLocaleString('default', { month: 'long' });
  const getYear = date.getUTCFullYear();

  return (
    <div className="date-controller">
      <Arrow action={reduceMonth} arrow={'←'}/>

      <div className="date-controller_text">
        <span>{`${monthToString} ${getYear}`}</span>
      </div>

      <Arrow action={increaseMonth} arrow={'→'}/>
    </div>
  );
};
