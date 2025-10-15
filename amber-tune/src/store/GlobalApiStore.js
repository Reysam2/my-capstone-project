import { create } from "zustand";

import { persist } from "zustand/middleware";

export const useApiStore = create(
  persist((set) => ({
      // state
      musicData: [],

      // actions
      setMusicData: (data) => set({ musicData: data }),
    }),
    { name: 'MusicStorage' }

  ),

)