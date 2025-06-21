import { fetchRequest } from './fetchRequest';

export const serverCall = async <T = any>(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    url: string,
    body: unknown = null,
    success?: string,
    fail?: string
): Promise<T> => {
    const data = await fetchRequest<T>({
        method,
        endpoint: url,
        body,
        errorMessage: fail,
        successMessage: success,
    });

    return data;
};
