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
    <div className="max-w-6xl mx-auto my-2 flex flex-col gap-6">
      <Header />
      <FilmList />
    </div>
  );
}

export default App;
