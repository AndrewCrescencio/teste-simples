import { Toaster } from 'react-hot-toast';

import Navbar from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Body } from './Body';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Tasks } from './Tasks';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Toaster />
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />
    <Body />
    <Tasks />
    <Footer />
  </div>
);

export { Base };
