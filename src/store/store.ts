import { create } from "zustand";
import type { APIStore, FilterStore } from "../api/types/types";
import { api } from "../api/api";

export const useMovieStore = create<APIStore>((set) => ({
  isLoading: false,
  success: false,
  error: null,
  filmList: null,

  getFilms: async () => {
    set({ isLoading: true, success: false, error: null });

    try {
      const { data, status } = await api.get("/films");

      if (status === 200) set({ filmList: data, isLoading: false });

      return { success: true, error: null };
    } catch (error) {
      set({ error: "Erro ao buscar lista de filmes" });

      return { success: false, error, isLoading: false };
    }
  },
}));

export const useFilterStore = create<FilterStore>((set) => ({
  searchTitle: "",

  setSearchTitle: (title) => set({ searchTitle: title }),
}));
