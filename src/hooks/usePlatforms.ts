import apiClient from "@/services/api-client";
// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import platforms from "@/data/platforms";

interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {
    const fetchPlatforms = () => 
        apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
    .then(res => res.data)

    return useQuery({
        queryKey: ['platforms'],
        queryFn: fetchPlatforms,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: {count: platforms.length, results: platforms}
    })
}

export default usePlatforms;