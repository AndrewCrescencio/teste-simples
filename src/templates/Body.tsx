import { FormControlled } from '@/components/FormControlled';
import { Container } from '@/layout/Container';

const Body = () => {
  return (
    <Container
      title="resultados"
      description="os valores dos inputs serão mostrados no console"
      className="teste"
    >
      <FormControlled />
    </Container>
  );
};

export { Body };
