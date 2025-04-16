import { Eye, EyeOff, NotebookPen, Star } from "lucide-react";
import type { GhibliAPIFilms } from "../../../api/types/types";
import { useState } from "react";

interface FilmCardProps {
  film: GhibliAPIFilms;
}

export function FilmCard({ film }: FilmCardProps) {
  const [isWatched, setIsWatched] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleWatched = () => {
    setIsWatched((prev) => !prev);
  };

  const toggleFavorited = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <li className="flex flex-col justify-center gap-2 rounded-md bg-zinc-200 text-zinc-900 transform transition-transform duration-200 hover:scale-[1.02]">
      <div className="relative">
        <img src={film.image} alt={`poster of ${film.title}`} />
        {isWatched || isFavorite ? (
          <div className="absolute top-1 left-1 flex items-center gap-1">
            {isWatched && (
              <div className=" bg-lime-700 p-1 rounded-md">
                <Eye size={16} color="white" />
              </div>
            )}
            {isFavorite && (
              <div className=" bg-yellow-500 p-1 rounded-md">
                <Star size={16} color="black" />
              </div>
            )}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col p-2">
        <h1 className="text-lg font-semibold">{film.title}</h1>
        <span className="text-xs text-zinc-700">{`${film.release_date} - ${film.running_time} min`}</span>
        <span className="font-semibold text-sm">
          Directed by:{" "}
          <span className="italic font-normal">{film.director}</span>
        </span>
        <span className="font-semibold text-sm">
          Produced by:{" "}
          <span className="italic font-normal">{film.producer}</span>
        </span>
        <span
          className="flex items-center gap-1 font-semibold"
          title="Rotten Tomatoes Score"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rotten Tomatoes Score</title>
            <circle cx="32" cy="36" r="24" fill="#E03030" />
            <path
              d="M32 12c-2 4-6 6-10 6 2-4 6-8 10-8s8 4 10 8c-4 0-8-2-10-6z"
              fill="#3FA34D"
            />
            <path
              d="M24 16c-2 2-4 4-6 6 4-2 8-2 12 0-2-4-4-6-6-6z"
              fill="#3FA34D"
            />
            <path
              d="M40 16c2 2 4 4 6 6-4-2-8-2-12 0 2-4 4-6 6-6z"
              fill="#3FA34D"
            />
          </svg>
          {film.rt_score}%
        </span>

        <div className="w-full h-px bg-zinc-900/40" />

        <div className="flex flex-col gap-2">
          <span
            className="italic text-justify line-clamp-3"
            title={film.description}
          >
            {film.description}
          </span>

          <div className="flex items-center justify-center gap-2 font-semibold">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-lime-700 text-zinc-100 rounded-md p-1 cursor-pointer"
              onClick={toggleWatched}
            >
              {isWatched ? <EyeOff size={20} /> : <Eye size={20} />}
              Watched
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-zinc-100 rounded-md p-1 cursor-pointer"
              onClick={toggleFavorited}
            >
              <Star
                size={20}
                color="yellow"
                fill={isFavorite ? "yellow" : "transparent"}
              />
              Favorite
            </button>
          </div>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-zinc-900 rounded-md p-1 cursor-pointer font-semibold hover:bg-zinc-900 hover:text-zinc-100 transition-colors"
          >
            <NotebookPen size={18} />
            Edit Notes
          </button>
        </div>
      </div>
    </li>
  );
}
