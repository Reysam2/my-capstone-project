import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useApiStore = create(persist(
  (set) => ({
    // state
    musicData: [],
    isVisible: false,
    scrollAmount: 200,
    selectedSong: 0,
    albumData: [],
    isPlaying: false,
    trackId: 0,
    currentSong: null,


    // actions
    setMusicData: (data) => set({ musicData: data }),
    // search results close button logic
    setIsVisible: (state) => set({ isVisible: state }),
    setSelectedSong: (id) => set({ selectedSong: id }),
    resetSelectedSong: () => set({ selectedSong: null }),
    // set album data with the album data from the api
    setAlbumData: (data) => set({ albumData: data }),
    setIsPlaying: (state) => set({ isPlaying: state }),
    // track Is 
    setTrackId: (id) => set({ trackId: id }),

    setCurrentSong: (preview) => set({ currentSong: preview })

  }), { name: "stored-music-data" }))

export const useAudioStore = create((set) => ({
  audioRef: new Audio(),

  setAudioRef: (audio) => set({ audioRef: audio })
}));