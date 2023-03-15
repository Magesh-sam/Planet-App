import axios from "axios";
import { create } from "zustand";

export const useAllPlanetStore = create((set, get) => ({
  planets: [],
  options: {
    method: "GET",
    url: "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list",
    headers: {
      "X-RapidAPI-Key": "92eae0a88bmsh685cf79f519bb47p1e4490jsna7cb10bbee3b",
      "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
    },
  },
  PlanetsFetch: async () => {
    const response = await axios.request(get().options);
    set({ planets: response.data });
  },
}));
export const usePlanetStore = create((set) => ({
  planet: [],
  PlanetFetch: async (options) => {
    const response = await axios.request(options);
    set({ planet: response.data });
  },
}));
