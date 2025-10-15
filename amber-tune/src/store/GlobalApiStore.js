import { create } from "zustand";


export const useApiStore = create(
  (set) => ({
      // state
      musicData: [],
      isVisible: false,

      // actions
      setMusicData: (data) => set({ musicData: data }),
      setIsVisible:  (state) => set({isVisible: state})
    }) 

)