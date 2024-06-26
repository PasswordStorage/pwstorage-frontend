import { blake2bHex } from 'blakejs';
import { UserData, UserCreateData, UserUpdateData } from '@/types/user';
import { ErrorData } from '@/types/error';
import { apiRequest } from './apiHelper';

const _prefix = '/users';

export const getUser = async (
    fingerprint: string
): Promise<UserData | ErrorData> => {
    const response = await apiRequest<UserData>('get', _prefix, '/me', fingerprint);
    return response.data;
};

export const createUser = async (
    data: UserCreateData
): Promise<UserData | ErrorData> => {
    data.password = blake2bHex(data.password).substring(0, 64);
    const response = await apiRequest<UserData>('post', _prefix, '/', undefined, data);
    return response.data;
};

export const updateUser = async (
    fingerprint: string, data: UserUpdateData
): Promise<UserData | ErrorData> => {
    const response = await apiRequest<UserData>('put', _prefix, '/me', fingerprint, data);
    return response.data;
};

export const deleteUser = async (
    fingerprint: string
): Promise<null | ErrorData> => {
    const response = await apiRequest<null>('delete', _prefix, '/me', fingerprint);
    return response.data;
};
