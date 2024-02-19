import { useState } from 'react';

import { Button } from '@/components/Button';
import { TaskAdder } from '@/components/TaskAdder';
import { TodosList } from '@/components/TodosList';
import { Container } from '@/layout/Container';

const Tasks = () => {
  const [fetchTasks, setFetchTasks] = useState(false);

  const handleLoadTasks = () => {
    setFetchTasks(true);
  };

  return (
    <section>
      <Container title="Lista de tarefas">
        <TaskAdder />
        <div className="text-center">
          <p className="my-10 text-center text-4xl">Tarefas</p>
          {fetchTasks ? (
            <TodosList />
          ) : (
            <Button onClick={handleLoadTasks}>Carregar tarefas</Button>
          )}
        </div>
      </Container>
    </section>
  );
};

export { Tasks };
