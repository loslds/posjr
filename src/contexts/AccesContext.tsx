import React from 'react';
const AccesContext = React.createContext<AccesContextType | undefined>(undefined);
type StateAcces = {
  currentStep: number;
  name: string;
  idname: string;
  level: 0 | 1;
  descrlevel: string;
  email: string;
  fone: string;
  password: string;
};

const initialData: StateAcces = {
  currentStep: 0,
  name: '',
  idname: '',
  level: 0,
  descrlevel: '',
  email: '',
  fone: '',
  password: ''
};
type AccesAction = {
  type: AccesActions;
  payload: any;
};

type AccesContextType = {
  state: StateAcces;
  dispatch: (action: AccesAction) => void;
};

type AccesProviderProps = {
  children: React.ReactNode;
};

export enum AccesActions {
  setCurrentStep,
  setName,
  setIdname,
  setLevel,
  setDescrlevel,
  setEmail,
  setFone,
  setPassword
}

const AccesReducer = (state: StateAcces, action: AccesAction) => {
  switch (action.type) {
    case AccesActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case AccesActions.setName:
      return { ...state, name: action.payload };
    case AccesActions.setIdname:
      return { ...state, idname: action.payload };
    case AccesActions.setLevel:
      return { ...state, level: action.payload };
    case AccesActions.setDescrlevel:
      return { ...state, descrlevel: action.payload };
    case AccesActions.setEmail:
      return { ...state, email: action.payload };
    case AccesActions.setFone:
      return { ...state, fone: action.payload };
    case AccesActions.setPassword:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const AccesProvider = ({ children }: AccesProviderProps) => {
  const [state, dispatch] = React.useReducer(AccesReducer, initialData);
  const value = { state, dispatch };
  return <AccesContext.Provider value={value}>{children}</AccesContext.Provider>;
};

export const AccesUseForm = () => {
  const context = React.useContext(AccesContext);
  if (context === undefined) {
    throw new Error('"Useform" precisa ser usado dentro do Provider!');
  }
  return context;
};
