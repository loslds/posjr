import React from 'react';

import './sector.css';
import { SetoresProvider } from './contextSetores';
import { SectorRoutes } from './routes';

export const Sector: React.FC = () => {
  return (
    <>
      <SetoresProvider>
        <SectorRoutes />
      </SetoresProvider>
    </>
  );
};

export default Sector;
