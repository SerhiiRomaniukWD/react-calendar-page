import { FC, memo, useContext } from 'react';
import { DateContext } from '../DateContext/Context';

export const CreateButton: FC = memo(() => {
  const action = useContext(DateContext).handleSetFormVisible;

  return (
    <button onClick={action} className="create-button">
      ➕
    </button>
  );
});
