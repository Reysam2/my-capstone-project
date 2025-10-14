import { create } from "zustand";

import { persist } from "zustand/middleware";

export const useApiStore = create(
  persist(
    (set) => ({
      // state
      musicData: null,

      // actions
      setMusicData: (data) => set({ musicData: data }),
    }),
    { name: 'MusicStorage' }

  )

)