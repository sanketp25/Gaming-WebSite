
import genres from "../data/genres";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => ({data:genres, isLoading:false, error:null});
// const useGenres = () => useData<Genres>('/genres');
export default useGenres;
