import { Search } from "lucide-react";
import { useFilterStore } from "../../store/store";

export function Header() {
  const { searchTitle, setSearchTitle } = useFilterStore();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold text-lime-500">
          Studio Ghibli Collection
        </h1>
        <p className="italic">
          Here you can find a collection of all Studio Ghibli animation movies.
          Feel free to watch/select your favorites!
        </p>
      </div>
      <div className="flex items-center w-full">
        <div className="bg-zinc-100 flex items-center rounded-l-md p-1">
          <Search className=" text-zinc-900" />
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
  );
}
