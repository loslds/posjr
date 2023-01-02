import React from 'react';

type StateAcces = {
  currentStep: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  level: 0 | 1 | 2;
  descrlevel: string;
  idname: string;
  password: string;
  logado: boolean;
  page: string;
  name: string;
  email: string;
  fone: string;
  descrpath: string;
  chvpin: string;
  chvsms: string;
  chvmail: string;

  currentStepNew: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  levelNew: 0 | 1 | 2;
  descrlevelNew: string;
  idnameNew: string;
  passwordNew: string;
  logadoNew: boolean;
  nameNew: string;
  emailNew: string;
  foneNew: string;
  descrpathNew: string;
};

export const initialData: StateAcces = {
  currentStep: 0,
  level: 0,
  descrlevel: '',
  idname: '',
  password: '',
  logado: false,
  page: '',
  name: '',
  email: '',
  fone: '',
  descrpath: '',
  chvpin: '',
  chvsms: '',
  chvmail: '',

  currentStepNew: 0,
  levelNew: 0,
  descrlevelNew: '',
  idnameNew: '',
  passwordNew: '',
  logadoNew: false,
  nameNew: '',
  emailNew: '',
  foneNew: '',
  descrpathNew: ''
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
  setLevel,
  setDescrlevel,
  setIdname,
  setPassword,
  setLogado,
  setPage,
  setName,
  setEmail,
  setFone,
  setDescrpath,
  setChvPin,
  setChvSms,
  setChvMail,

  setCurrentStepNew,
  setLevelNew,
  setDescrlevelNew,
  setNameNew,
  setIdnameNew,
  setPasswordNew,
  setLogadoNew,
  setEmailNew,
  setFoneNew,
  setDescrpathNew
}

const AccesReducer = (state: StateAcces, action: AccesAction) => {
  switch (action.type) {
    case AccesActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case AccesActions.setLevel:
      return { ...state, level: action.payload };
    case AccesActions.setDescrlevel:
      return { ...state, descrlevel: action.payload };
    case AccesActions.setIdname:
      return { ...state, idname: action.payload };
    case AccesActions.setPassword:
      return { ...state, password: action.payload };
    case AccesActions.setLogado:
      return { ...state, logado: action.payload };
    case AccesActions.setPage:
      return { ...state, page: action.payload };
    case AccesActions.setName:
      return { ...state, name: action.payload };
    case AccesActions.setEmail:
      return { ...state, email: action.payload };
    case AccesActions.setFone:
      return { ...state, fone: action.payload };
    case AccesActions.setDescrpath:
      return { ...state, descrpath: action.payload };
    case AccesActions.setChvPin:
      return { ...state, chvpin: action.payload };
    case AccesActions.setChvSms:
      return { ...state, chvsms: action.payload };
    case AccesActions.setChvMail:
      return { ...state, chvmail: action.payload };

    case AccesActions.setCurrentStepNew:
      return { ...state, currentStepNew: action.payload };
    case AccesActions.setLevelNew:
      return { ...state, levelNew: action.payload };
    case AccesActions.setDescrlevelNew:
      return { ...state, descrLevelNew: action.payload };
    case AccesActions.setIdnameNew:
      return { ...state, idnameNew: action.payload };
    case AccesActions.setPasswordNew:
      return { ...state, passwordNew: action.payload };
    case AccesActions.setLogadoNew:
      return { ...state, logadoNew: action.payload };
    case AccesActions.setNameNew:
      return { ...state, nameNew: action.payload };
    case AccesActions.setEmailNew:
      return { ...state, emailNew: action.payload };
    case AccesActions.setFoneNew:
      return { ...state, foneNew: action.payload };
    case AccesActions.setDescrpathNew:
      return { ...state, descrpathNew: action.payload };
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
