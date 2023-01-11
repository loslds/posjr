import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import { Theme } from '~/components/Theme';
import { Titles } from '~/components/Titles';
// import { AccesActions, AccesUseForm } from '~/contexts/AccesContext';

import * as C from './stylesreception';

export const Reception = () => {
  // const navigate = useNavigate();
  // const goto = (path: string) => {
  //   return () => {
  //     navigate(path);
  //   };
  // };

  return (
    <C.ContainerPageR>
      <Titles>
        <h1>MODULO Recepão. :</h1>
      </Titles>
      <p>Atenção aos dados requisitados...</p>
      <hr />
      <p>Preencha os Campo abaixo:</p>

      <label>
        Declaração do seu Nome.
        {/* <input
          type="text"
          autoFocus={true}
          onChange={() => {}}
          value={''}
          placeholder={'...'}
        /> */}
      </label>

      <button onClick={() => {}} title={'...'}>
        sem ação0.
      </button>

      <button onClick={() => {}} title={'...'}>
        sem ação1.
      </button>
    </C.ContainerPageR>
  );
};
