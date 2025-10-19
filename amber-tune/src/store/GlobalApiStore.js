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

    playerData: {
      id: 0,
      title_short: "",
      link: "",
      album: { cover_medium: "" },
      artist: { name: "" },
      preview: "",
    },



    // actions
    setMusicData: (data) => set({ musicData: data }),
    // search results close button logic
    setIsVisible: (state) => set({ isVisible: state }),
    setSelectedSong: (id) => set({ selectedSong: id }),
    resetSelectedSong: () => set({ selectedSong: null }),
    // set album data with the album data from the api
    setAlbumData: (data) => set({ albumData: data }),
    setIsPlaying: (state) => set({ isPlaying: state }),
    // track Id 
    setTrackId: (id) => set({ trackId: id }),

    setCurrentSong: (song) => set({ currentSong: song }),


    // set playerData

    setPlayerData: (data) =>
      set({
        playerData: {
          id: data.id,
          link: data.link,
          title_short: data.title_short,
          album: { cover_medium: data.album.cover_medium },
          artist: {
            name: data.artist.name
          },
          preview: data.preview,
        },
      }),




  }), { name: "stored-music-data" }))





// non serialized data. don't know what that means lol
export const useAudioStore = create((set) => ({
  audioRef: new Audio(),

  setAudioRef: (audio) => set({ audioRef: audio })
}));