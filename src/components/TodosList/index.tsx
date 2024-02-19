import { useTodos } from '@/hooks/useTodos';

import { Todo } from '../Todo';

export const TodosList = () => {
  const { todosData, isLoading, isError } = useTodos();
  return (
    <div>
      {todosData?.todos
        ? todosData.todos.map((todo) => <Todo {...todo} key={todo.id} />)
        : null}
      {isLoading ? <p>carregando...</p> : <p>{isError?.message}</p>}
    </div>
  );
};
