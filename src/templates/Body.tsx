import { useState } from 'react';

import { Button } from '@/components/Button';
import { InputSelect } from '@/components/InputSelect';
import { InputText } from '@/components/InputText';
import { Container } from '@/layout/Container';

interface FormData {
  text: string;
  select1: number | string;
  select2: number | string;
  select3: number | string;
}

const Body = () => {
  const [formData, setFormData] = useState<FormData>({
    text: '',
    select1: '1',
    select2: '2',
    select3: '3',
  });

  // os inputs poderiam ser não controlados para não renderizar desnecessariamente, apenas coloquei para facilitar a adição de valores padrões para os selects e para desativar o botão
  function handleFormChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formValues = new FormData(form);
    console.log(formValues);
    setFormData({
      text: '',
      select1: '1',
      select2: '2',
      select3: '3',
    });
  }

  return (
    <Container
      title="resultados"
      description="os valores dos inputs serão mostrados no console"
      className="teste"
    >
      <form
        className="flex flex-wrap items-end justify-center gap-5"
        onSubmit={handleSubmit}
      >
        <InputText
          name="text"
          label="texto"
          onChange={handleFormChange}
          value={formData.text}
        />
        <InputSelect
          name="select1"
          label="select 1"
          value={formData.select1}
          options={[
            { label: 'valor 1', value: '1' },
            { label: 'valor 2', value: '2' },
            { label: 'valor 3', value: '3' },
          ]}
          onChange={handleFormChange}
        />
        <InputSelect
          name="select2"
          label="select 2"
          value={formData.select2}
          options={[
            { label: 'valor 1', value: '1' },
            { label: 'valor 2', value: '2' },
            { label: 'valor 3', value: '3' },
          ]}
          onChange={handleFormChange}
        />
        <InputSelect
          name="select3"
          label="select 3"
          value={formData.select3}
          options={[
            { label: 'valor 1', value: '1' },
            { label: 'valor 2', value: '2' },
            { label: 'valor 3', value: '3' },
          ]}
          onChange={handleFormChange}
        />
        <Button style={{ height: '50px' }} disabled={!formData.text.length}>
          Ver resultados
        </Button>
      </form>
    </Container>
  );
};

export { Body };
