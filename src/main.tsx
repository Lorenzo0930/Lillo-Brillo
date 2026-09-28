import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { MotionConfig } from 'motion/react';
import ConsentProvider from './components/Privacy';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <ConsentProvider><App /></ConsentProvider>
    </MotionConfig>
  </StrictMode>,
);
