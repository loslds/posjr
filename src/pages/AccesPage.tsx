import React from 'react';

import { FormProvider } from '~/contexts/FormContext';

import * as C from '../pages/styles';

export const AccesPage = () => {
  return (
    <div>
      <FormProvider>
        <C.Container>
          <h1>AccesPage</h1>
        </C.Container>
      </FormProvider>
    </div>
  );
};
