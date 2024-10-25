import { useState } from 'react';

import { Button } from '../Button';
import { InputSelect } from '../InputSelect';
import { InputText } from '../InputText';

export const FormControlled = () => {
  const formInitialState = {
    text: '',
    select1: '',
    select2: '',
    select3: '',
  };
  const [form, setForm] = useState(formInitialState);

  function handleFormChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  }

  const resetForm = () => {
    setForm(formInitialState);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    resetForm();
  }

  return (
    <form
      className="flex flex-wrap items-end justify-center gap-5"
      onSubmit={handleSubmit}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          resetForm();
        }}
      >
        resetForm
      </button>
      <InputText
        name="text"
        label="texto"
        onChange={handleFormChange}
        value={form.text}
      />
      <InputSelect
        name="select1"
        label="select 1"
        options={[
          { label: 'valor 1', value: '1' },
          { label: 'valor 2', value: '2' },
          { label: 'valor 3', value: '3' },
        ]}
        onChange={handleFormChange}
        value={form.select1}
      />
      <InputSelect
        name="select2"
        label="select 2"
        options={[
          { label: 'valor 1', value: '1' },
          { label: 'valor 2', value: '2' },
          { label: 'valor 3', value: '3' },
        ]}
        onChange={handleFormChange}
        value={form.select2}
      />
      <InputSelect
        name="select3"
        label="select 3"
        options={[
          { label: 'valor 1', value: '1' },
          { label: 'valor 2', value: '2' },
          { label: 'valor 3', value: '3' },
        ]}
        onChange={handleFormChange}
        value={form.select3}
      />
      <Button style={{ height: '50px' }} disabled={!form.text}>
        Ver resultados
      </Button>
    </form>
  );
};
