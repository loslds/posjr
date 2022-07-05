import React, { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
  currentStep: number;
  name: string;
  idname: string;
  level: 0 | 1;
  email: string;
  fone: string;
  password: string;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  currentStep: 0,
  name: '',
  idname: '',
  level: 0,
  email: '',
  fone: '',
  password: ''
};

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setIdname,
  setLevel,
  setEmail,
  setFone,
  setPassword
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setIdname:
      return { ...state, idname: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setFone:
      return { ...state, fone: action.payload };
    case FormActions.setPassword:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

// Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Context Hook
export const UseForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('"Useform" precisa ser usado dentro do Provider!');
  }
  return context;
};
