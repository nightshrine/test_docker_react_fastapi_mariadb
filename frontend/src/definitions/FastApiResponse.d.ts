interface ApiResponse<T> {
    status: number;
    errorMsg: string;
    data: T;
}

export type FastApiResponse = ApiResponse<string>;