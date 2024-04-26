import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type {} from "@redux-devtools/extension";
import { Businesses } from "@/types";

interface ResultsShowStore {
  setDetails: (item: Businesses) => void;
  currentDetails: Businesses | null;
}

export const useResultsShow = create<ResultsShowStore>()(
  devtools(
    immer((set) => ({
      currentDetails: null,
      setDetails: (item: Businesses) => set(() => ({ currentDetails: item })),
    })),
    {
      name: "results-show",
      // enabled: process.env.NODE_ENV !== "production",
    }
  )
);
