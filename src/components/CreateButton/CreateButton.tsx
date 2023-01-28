import { FC, useContext } from 'react';
import { DateContext } from '../DateContext/Context';

export const CreateButton: FC = () => {
  const {
    handleSetFormVisible
  } = useContext(DateContext);

  return (
    <button onClick={() => handleSetFormVisible(true)} className="create-button">
      +
    </button>
  );
};
