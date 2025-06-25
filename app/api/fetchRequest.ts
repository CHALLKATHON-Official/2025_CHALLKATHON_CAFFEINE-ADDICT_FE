type FetchMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface FetchRequestParams {
    method: FetchMethod;
    endpoint: string;
    body?: unknown;
    errorMessage?: string;
    successMessage?: string;
}

export const fetchRequest = async <T = any>({
    method,
    endpoint,
    body,
    errorMessage,
    successMessage,
}: FetchRequestParams): Promise<T> => {
    try {
        console.log('디버깅 용도 body 출력:', body);
        const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
        console.log('디버깅용 token 출력:', token);

        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const options: RequestInit = {
            method,
            headers,
        };

        if (['POST', 'PUT', 'PATCH'].includes(method) && body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}${endpoint}`, options);
        console.log('디버깅용 response 출력:', response);

        if (!response.ok) {
            let errorData: { message?: string } | null = null;
            try {
                errorData = await response.json();
            } catch (e) {
                errorData = null;
            }

            // if (errorMessage) alert(errorMessage);
            throw new Error(errorData?.message || errorMessage || 'API 요청 실패');
        }

        // if (successMessage) alert(successMessage);

        const data: T = await response.json();
        console.log('여기는 fetchRequest, data는:', data);
        return data;
    } catch (err: any) {
        throw new Error(err.message || errorMessage || 'API 요청 중 알 수 없는 오류');
    }
};
