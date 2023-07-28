import useData from "./useData";

export interface Platforms{
    id: number;
    slug: string;
    name: string;
}

const usePlatform = () => useData<Platforms>('/platforms/lists/parents')

export default usePlatform;