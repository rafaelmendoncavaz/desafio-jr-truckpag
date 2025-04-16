import { useFilterStore, useMovieStore } from "../../store/store";
import { FilmCard } from "./film-card/film-card";

export function FilmList() {
  const { filmList, isLoading } = useMovieStore();
  const { searchTitle } = useFilterStore();

  const filteredList = filmList?.filter((film) => {
    if (!searchTitle.length) return filmList;

    return film.title.toLowerCase().includes(searchTitle.toLowerCase());
  });

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {isLoading ? (
        <p>Carregando filmes...</p>
      ) : filteredList ? (
        filteredList.map((film) => <FilmCard key={film.id} film={film} />)
      ) : (
        <p>Falha ao carregar lista de filmes</p>
      )}
      {filteredList?.length === 0 && <p>Nenhum resultado encontrado</p>}
    </ul>
  );
}
