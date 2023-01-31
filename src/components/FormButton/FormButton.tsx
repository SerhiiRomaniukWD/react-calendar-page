import { FC, memo } from 'react';
import { ButtonType } from '../../types/ButtonType';

type Props = {
  value: string;
  type: ButtonType;
  action?: () => void;
};

export const FormButton: FC<Props> = memo(({ 
  type, 
  value,
  action 
}) => {
  return (
    <button 
      className="form-button" 
      type={type}
      onClick={action}
    >
      {value}
    </button>
  );
});
