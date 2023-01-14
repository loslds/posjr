import type { IResponseApi, Order } from '../api.dto';

export interface IUser {
  id: number;
  nameid: string;
  name: string;
  cpf: string;
  cnpj: string;
  pin: string;
  mail: string;
  fone: string;
  local: string;
  nrlocal: string;
  cep: string;
  bairro: string;
  cidade: string;
  uf: string;
  idsector: number;
  namesetor: string;
  level: number;
  descrlevel: string;
}

export interface IResponseUserList extends IResponseApi {
  users: IUser[];
}

export interface IResponseUser extends IResponseApi {
  user?: IUser;
}

//

export type UserFields = keyof IUser;

export type UserFilter = Omit<Partial<IUser>, 'descrlevel' | 'namesetor'>;

export type UserOrder = Order<UserFields>;
