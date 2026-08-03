import { createSlice } from "@reduxjs/toolkit";

const startupSlice = createSlice({
  name: "startup",
  initialState: {
    startup: JSON.parse(localStorage.getItem("startupAll")) || [],
    loading: false,
    error: null,
  },
  reducers: {
    addStartup: (state, action) => {
      state.startup.push(action.payload);
      localStorage.setItem("startupAll", JSON.stringify(state.startup));
    },
    deleteStartup: (state, action) => {
      state.startup = state.startup.filter((i) => i.id !== action.payload);
      localStorage.setItem("startupAll", JSON.stringify(state.startup));
    },
    updateStartup: (state, action) => {
      const index = state.startup.findIndex((i) => i.id == action.payload.id);
      if (index !== -1) {
        state.startup[index] = action.payload;
      }
      localStorage.setItem("startupAll", JSON.stringify(state.startup));
    },
    likeStartup: (state, action) => {
      const statup = state.startup.find((i) => i.id == action.payload);
      if (statup) {
        statup.likes += 1;
      }
      localStorage.setItem("startupAll", JSON.stringify(state.startup));
    },
    unlikeStartup: (state, action) => {
      const startup = state.startup.find((i) => i.id == action.payload);
      if (startup && startup.likes > 0) {
        startup.likes -= 1;
      }
      clearStartup: (state) => {
        state.startup = [];
      };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    toggleLike: (state, action) => {
      const startup = state.startup.find((item) => item.id == action.payload);

      if (startup) {
        startup.liked = !startup.liked;

        if (startup.liked) {
          startup.likes += 1;
        } else {
          startup.likes -= 1;
        }

        localStorage.setItem("startupAll", JSON.stringify(state.startup));
      }
    },
    setError: (state, action) => {
      state.error = action.payload;
    },

    clearStartup: (state, action) => {
      state.startup = [];
    },
    bookmarkStartup: (state, action) => {
      const startup = state.startup.find((i) => i.id == action.payload);

      if (startup) {
        startup.bookmarked = !startup.bookmarked;
      }

      localStorage.setItem("startupAll", JSON.stringify(state.startup));
    },
  },
});

export const {
  addStartup,
  deleteStartup,
  updateStartup,
  clearStartup,
  setError,
  setLoading,
  likeStartup,
  unlikeStartip,
  bookmarkStartup,
  toggleLike
} = startupSlice.actions;
export default startupSlice.reducer;
