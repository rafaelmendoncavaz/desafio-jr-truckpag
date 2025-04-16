import { Search } from "lucide-react";
import { useFilterStore } from "../../store/store";

export function Header() {
  const { searchTitle, setSearchTitle } = useFilterStore();

  return (
    <div className="w-full flex flex-col gap-6 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-lime-500">
          Studio Ghibli Collection
        </h1>
        <p className="italic text-sm sm:text-base max-w-2xl">
          Here you can find a collection of all Studio Ghibli animation movies.
          Feel free to watch/select your favorites!
        </p>
      </div>
      <div className="flex justify-center lg:justify-start w-full">
        <div className="flex w-full max-w-sm sm:max-w-full md:max-w-full lg:max-w-full">
          <div className="bg-zinc-100 flex items-center rounded-l-md p-1">
            <Search className="text-zinc-900" />
          </div>
          <input
            type="text"
            placeholder="Search for a movie..."
            className="bg-zinc-100 text-zinc-900 rounded-r-md outline-none w-full p-1"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
