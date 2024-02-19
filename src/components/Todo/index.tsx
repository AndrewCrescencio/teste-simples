import { TodoStatus } from '../TodoStatus';
import type { TodoProps } from './types';

export const Todo = (props: TodoProps) => {
  return (
    <div className="flex items-center justify-between gap-x-4 border-b py-4 text-primary-950">
      <p className="text-left text-lg">{props.todo}</p>
      <TodoStatus completed={props.completed} />
    </div>
  );
};
