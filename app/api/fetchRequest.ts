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
        const options: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (['POST', 'PUT', 'PATCH'].includes(method) && body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_URL}${endpoint}`, options);

        if (!response.ok) {
            let errorData: { message?: string } | null = null;
            try {
                errorData = await response.json();
            } catch (e) {
                errorData = null;
            }

            if (errorMessage) alert(errorMessage);
            throw new Error(errorData?.message || errorMessage || 'API 요청 실패');
        }

        if (successMessage) alert(successMessage);

        const data: T = await response.json();
        console.log('여기는 fetchRequest, data는:', data);
        return data;
    } catch (err: any) {
        throw new Error(err.message || errorMessage || 'API 요청 중 알 수 없는 오류');
    }
};
