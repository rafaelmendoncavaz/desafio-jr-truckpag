import { useEffect } from "react";
import { useMovieStore } from "./store/store";
import { FilmList } from "./components/film-list/film-list";
import { Header } from "./components/header/header";

function App() {
  const { getFilms, filmList } = useMovieStore();
  useEffect(() => {
    if (!filmList) getFilms();
  }, [filmList, getFilms]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-4 sm:my-6 md:my-8 flex flex-col items-center gap-6">
      <Header />
      <FilmList />
    </div>
  );
}

export default App;
