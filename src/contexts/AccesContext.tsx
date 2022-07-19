import React from 'react';

type StateAcces = {
  currentStep: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  name: string;
  idname: string;
  level: 0 | 1 | 2;
  descrlevel: string;
  email: string;
  fone: string;
  password: string;
  logado: boolean;
  currentStepNew: 0 | 1 | 2 | 3;
  levelNew: 0 | 1 | 2;
  descrlevelNew: string;
  nameNew: string;
  idnameNew: string;
  emailNew: string;
  foneNew: string;
};

export const initialData: StateAcces = {
  currentStep: 0,
  name: '',
  idname: '',
  level: 0,
  descrlevel: '',
  email: '',
  fone: '',
  password: '',
  logado: false,
  currentStepNew: 0,
  levelNew: 0,
  descrlevelNew: '',
  nameNew: '',
  idnameNew: '',
  emailNew: '',
  foneNew: ''
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
  setPassword,
  setLogado,

  setCurrentStepNew,
  setLevelNew,
  setDescrNew,
  setNameNew,
  setIdnameNew,
  setPasswordNew,
  setEmailNew,
  setFoneNew
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
    case AccesActions.setLogado:
      return { ...state, logado: action.payload };
    case AccesActions.setCurrentStepNew:
      return { ...state, currentStepNew: action.payload };
    case AccesActions.setLevelNew:
      return { ...state, levelNew: action.payload };
    case AccesActions.setDescrlevel:
      return { ...state, descrLevelNew: action.payload };
    case AccesActions.setCurrentStepNew:
      return { ...state, currentStepNew: action.payload };
    case AccesActions.setNameNew:
      return { ...state, nameNew: action.payload };
    case AccesActions.setPasswordNew:
      return { ...state, passwordNew: action.payload };
    case AccesActions.setIdnameNew:
      return { ...state, idnameNew: action.payload };
    case AccesActions.setEmailNew:
      return { ...state, emailNew: action.payload };
    case AccesActions.setFoneNew:
      return { ...state, foneNew: action.payload };
    default:
      return state;
  }
};

const AccesContext = React.createContext<AccesContextType | undefined>(
  undefined
);

export const AccesProvider = ({ children }: AccesProviderProps) => {
  const [state, dispatch] = React.useReducer(AccesReducer, initialData);
  const value = { state, dispatch };
  return (
    <AccesContext.Provider value={value}>{children}</AccesContext.Provider>
  );
};

export const AccesUseForm = () => {
  const context = React.useContext(AccesContext);
  if (context === undefined) {
    throw new Error('"Useform" precisa ser usado dentro do Provider!');
  }
  return context;
};

export default AccesContext;
