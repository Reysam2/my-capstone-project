import { create } from "zustand";


export const useApiStore = create(
  (set) => ({
      // state
      musicData: [],
      isVisible: false,
      scrollAmount: 200,
       
      // actions
      setMusicData: (data) => set({ musicData: data }),
      // search results close button logic
      setIsVisible:  (state) => set({isVisible: state}),
    }) 
  )