import { FolderData, FolderCreateData, FolderUpdateData, FolderPaginationResponse } from '@/types/folder';
import { ErrorData } from '@/types/error';
import { apiRequest } from './apiHelper';

const _prefix = '/folders';

export const getFolders = async (
    fingerprint: string
): Promise<FolderPaginationResponse | ErrorData> => {
    const response = await apiRequest<FolderPaginationResponse>('get', _prefix, '/', fingerprint);
    return response.data;
};

export const getFolderById = async (
    fingerprint: string, id: number
): Promise<FolderData | ErrorData> => {
    const response = await apiRequest<FolderData>('get', _prefix, `/${id}`, fingerprint);
    return response.data;
};

export const createFolder = async (
    fingerprint: string, data: FolderCreateData
): Promise<FolderData | ErrorData> => {
    const response = await apiRequest<FolderData>('post', _prefix, '/', fingerprint, data);
    return response.data;
};

export const updateFolder = async (
    fingerprint: string, id: number, data: FolderUpdateData
): Promise<FolderData | ErrorData> => {
    const response = await apiRequest<FolderData>('put', _prefix, `/${id}`, fingerprint, data);
    return response.data;
};

export const deleteFolder = async (
    fingerprint: string, id: number
): Promise<null | ErrorData> => {
    const response = await apiRequest<null>('delete', _prefix, `/${id}`, fingerprint);
    return response.data;
};
