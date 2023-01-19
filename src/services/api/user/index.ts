import { wait } from '~/helpers';
import { compareValues } from '~/helpers/array';

import { userData } from '../makerdata/Users';
import type {
  IResponseUser,
  IResponseUserList,
  UserFilter,
  UserOrder
} from './user.dto';

export async function getUsers(
  { id }: UserFilter = {},
  { order = 'asc', orderBy = 'id' }: UserOrder = {}
): Promise<IResponseUserList> {
  if (id) {
    userData.users = userData?.users?.filter(f => f.id === id);
  }

  userData.users = userData?.users?.sort(compareValues(orderBy, order));

  await wait(200);
  return userData;
}

/** Adquiri um usuário pelo ID */
export async function getUser(id: number): Promise<IResponseUser> {
  const found = userData.users.find(f => f.id === id);
  await wait(800);
  return { success: !!found, user: found };
}

/** Adquiri um usuário pelo : id,level,idname,pin */
export async function getLvNmPnUsers(
  { id, level, idname, pin }: UserFilter = {},
  { order = 'asc', orderBy = 'id' }: UserOrder = {}
): Promise<IResponseUserList> {
  if (id) {
    userData.users = userData?.users?.filter(f => f.id === id);
  }
  if (level) {
    userData.users = userData?.users?.filter(f => f.level === level);
  }
  if (idname) {
    userData.users = userData?.users?.filter(f => f.idname === idname);
  }
  if (pin) {
    userData.users = userData?.users?.filter(f => f.idname === pin);
  }

  userData.users = userData?.users?.sort(compareValues(orderBy, order));

  await wait(200);
  console.log('userData : ', userData.users);
  return userData;
}
