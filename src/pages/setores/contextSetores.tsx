import React from 'react';

type StateSetores = {
  currentStep: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  logado: boolean;
  title: string;
  idpage: number;
  strpage: string;
  ispage: boolean;
};

export const initialData: StateSetores = {
  currentStep: 0,
  logado: false,
  title: '',
  idpage: 0,
  strpage: '',
  ispage: false
};

type SetoresAction = {
  type: SetoresActions;
  payload: any;
};

type SetoresContextType = {
  state: StateSetores;
  dispatch: (action: SetoresAction) => void;
};

type SetoresProviderProps = {
  children: React.ReactNode;
};

export enum SetoresActions {
  setCurrentStep,
  setLogado,
  setTitle,
  setIdpage,
  setStrpage,
  setIspage
}

const SetoresReducer = (state: StateSetores, action: SetoresAction) => {
  switch (action.type) {
    case SetoresActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case SetoresActions.setLogado:
      return { ...state, logado: action.payload };
    case SetoresActions.setTitle:
      return { ...state, title: action.payload };
    case SetoresActions.setIdpage:
      return { ...state, idpagel: action.payload };
    case SetoresActions.setStrpage:
      return { ...state, strpage: action.payload };
    case SetoresActions.setIspage:
      return { ...state, ispage: action.payload };
    default:
      return state;
  }
};

const SetoresContext = React.createContext<SetoresContextType | undefined>(
  undefined
);

export const SetoresProvider = ({ children }: SetoresProviderProps) => {
  const [state, dispatch] = React.useReducer(SetoresReducer, initialData);
  const value = { state, dispatch };
  return (
    <SetoresContext.Provider value={value}>{children}</SetoresContext.Provider>
  );
};

export const SetoresUseForm = () => {
  const context = React.useContext(SetoresContext);
  if (context === undefined) {
    throw new Error('"Useform" precisa ser usado dentro do Provider!');
  }
  return context;
};

export default SetoresContext;
