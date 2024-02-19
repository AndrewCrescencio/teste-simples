import { useState } from 'react';

import { useAddTodo } from '@/hooks/useAddTodo';

import { Button } from '../Button';
import { InputSelect } from '../InputSelect';
import { InputText } from '../InputText';

interface FormData {
  todo: string;
  completed: '0' | '1';
}

const TaskAdder = () => {
  const { isLoading, addTodo } = useAddTodo();

  const [formData, setFormData] = useState<FormData>({
    todo: '',
    completed: '0',
  });

  function handleFormChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    addTodo({
      todo: formData.todo,
      completed: !!Number(formData.completed),
      userId: 5,
    });
    setFormData({ completed: '0', todo: '' });
  }
  return (
    <>
      <h3 className="mb-8 w-full text-center text-2xl">Adicione uma tarefa</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-end justify-center gap-5"
      >
        <InputText
          type="text"
          name="todo"
          value={formData.todo} // Bind input value to state
          onChange={handleFormChange}
          label="Nome da tarefa"
          placeholder="Nome para a tarefa"
        />
        <InputSelect
          name="completed"
          value={formData.completed}
          onChange={handleFormChange}
          options={[
            { value: '0', label: 'incompleta' },
            { value: '1', label: 'completa' },
          ]}
          label="Status da tarefa"
        />
        <Button
          style={{ height: '50px' }}
          type="submit"
          disabled={!formData.todo.length || isLoading}
        >
          {isLoading ? 'enviando...' : 'Adicionar tarefa'}
        </Button>
      </form>
    </>
  );
};

export { TaskAdder };
