import { useState } from 'react';
import toast from 'react-hot-toast';

interface NewTodo {
  todo: string;
  completed: boolean;
  userId: number;
}

function useAddTodo() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addTodo = async (newTodoData: NewTodo) => {
    setIsLoading(true);
    setError(null);

    async function postTodo() {
      try {
        const { body } = await fetch('https://dummyjson.com/todos/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTodoData),
        });
        console.log('foi');
        console.log(body);
        // toast.success('Tarefa adicionada!');
      } catch (e: any) {
        setError(`Error adding todo: ${e.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    toast.promise(postTodo(), {
      loading: 'Carregando',
      success: 'Tarefa adicionada!',
      error: 'Erro ao adicionar a tarefa',
    });
  };

  return { isLoading, error, addTodo };
}

export { useAddTodo };
