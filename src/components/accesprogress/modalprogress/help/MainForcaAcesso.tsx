import React from 'react';

// import divforcasnh from '../../../../assets/images/svgs/divforcasnh.svg';
import * as C from './styles';

export const MainForcaAcesso: React.FC = () => {
  return (
    <C.ContainerForcaAcesso>
      <label>
        <C.DivImgProgres />
        <h4>Síntese:</h4>

        <p> Na Barra acima, é estampada nas divisõe de quatro(4) cores: </p>
        <p>
          {' '}
          Verde &gt; Exelente, Amarelo &gt; Forte, Laranja &gt; Média e Vermelha
          &gt; Fraca.{' '}
        </p>
        <p>
          Demostrando o percentual de cada divisões em percentual sobre os
          caractéres insiridos.
        </p>
        <p>
          Quanto mais próximos de 100% se destina a dificuldade do acesso
          clandestino.
        </p>
        <p>
          Uma Senha mais complexa tem a combinações das médias percentuais para
          cada fração nas divisões.
        </p>
        <p>Exemplo: 30% 30% 20% 20%.</p>
      </label>
    </C.ContainerForcaAcesso>
  );
};
