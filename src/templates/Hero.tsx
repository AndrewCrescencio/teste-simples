import Link from 'next/link';

import { Background } from '../layout/Background';
import { Button } from '../components/Button';
import { HeroOneButton } from '../components/HeroOneButton';
import { Container } from '../layout/Container';

const Hero = () => (
  <Background color="bg-gray-100">
    <Container yPadding="pt-20 pb-32" className="mt-24">
      <HeroOneButton
        title={
          <>
            {'Lorem ipsum dolor sit amet.\n'}
            <span className="text-primary-500">Lorem, ipsum.</span>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, nulla repudiandae!"
        button={
          <Link href="https://github.com/AndrewCrescencio">
            <Button xl>Meu GitHub</Button>
          </Link>
        }
      />
    </Container>
  </Background>
);

export { Hero };
