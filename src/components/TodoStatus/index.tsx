import { PiCheck } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';

import type { TodoStatusProps } from './types';

export const TodoStatus = (props: TodoStatusProps) => {
  return (
    <p className="flex items-center gap-1">
      {props.completed ? 'completa' : 'incompleta'}{' '}
      {props.completed ? (
        <PiCheck className="text-green-500" />
      ) : (
        <RxCross2 className="text-red-500" />
      )}
    </p>
  );
};
