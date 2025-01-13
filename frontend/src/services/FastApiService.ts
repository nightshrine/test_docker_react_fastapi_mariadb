import { FastApiResponse } from '../definitions/FastApiResponse';
import { ApiService } from './ApiService';

export class FastApiService {
    public static async getTestWord(): Promise<FastApiResponse> {
        const masters = await ApiService.callGetApi<FastApiResponse>(
            '/test-word'
        );
        return masters;
    }
}
