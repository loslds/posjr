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

//export async function getLvInmPinlUsers(
//  { level, idname, pin }: UserFilter = {},
//  { order = 'asc', orderBy = 'level' }: UserOrder = {}
//  ): Promise<IResponseUserList> {
//    if (level !== 0 && idname !== '' && pin !== '') {
//    const found = userData.users.find(
//      f => f.level === level && f.idname === idname && f.pin === pin
//    );
//
//    await wait(800);
//    return userData;
//  }
//}

/** Adquiri um usuário pelo : id,level,idname,pin */

export async function getLevelUsers(
  { level }: UserFilter = {},
  { order = 'asc', orderBy = 'level' }: UserOrder = {}
): Promise<IResponseUserList> {
  if (level) {
    userData.users = userData?.users?.filter(f => f.level === level);
  }

  userData.users = userData?.users?.sort(compareValues(orderBy, order));

  await wait(200);

  console.log('level : ', level);
  console.log('userData : ', userData.users);

  return userData;
}

export async function getIdnamelUsers(
  { idname }: UserFilter = {},
  { order = 'asc', orderBy = 'idname' }: UserOrder = {}
): Promise<IResponseUserList> {
  if (idname) {
    userData.users = userData?.users?.filter(f => f.idname === idname);
  }

  userData.users = userData?.users?.sort(compareValues(orderBy, order));

  await wait(200);

  console.log('level : ', idname);
  console.log('userData : ', userData.users);

  return userData;
}
