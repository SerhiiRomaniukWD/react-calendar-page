import { FC, memo } from "react";

type Props = {
  arrow: string;
  action: () => void;
};

export const Arrow: FC<Props> = memo(({ action, arrow }) => {
  return (
    <button onClick={action} className="arrow">{arrow}</button>
  );
});
