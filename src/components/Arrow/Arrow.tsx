import { FC } from "react";

type Props = {
  arrow: string;
  action: () => void;
};

export const Arrow: FC<Props> = ({ 
  action,
  arrow 
}) => {
  return (
    <button onClick={action} className="arrow">{arrow}</button>
  );
};
