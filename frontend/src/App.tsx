import { useQuery } from '@tanstack/react-query';
import { FastApiService } from './services/FastApiService';

function App() {
    const fastApiQuery = useQuery({
        queryKey: ['getTestWord'],
        queryFn: FastApiService.getTestWord,
    });

    if (fastApiQuery.isLoading) {
        return <div>Loading...</div>;
    }

    if (fastApiQuery.isError) {
        return <>Error</>;
    }

    if (!fastApiQuery.data) {
        return <>No data</>;
    }

    const testWord = fastApiQuery.data.data;

    return <>Test word: {testWord}</>;
}

export default App;
