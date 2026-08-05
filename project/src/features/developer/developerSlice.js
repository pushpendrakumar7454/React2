import { createSlice } from "@reduxjs/toolkit";
const currentUser = JSON.parse(localStorage.getItem("loggedinUser"));
const email = currentUser?.email || "guest";
const initialState = {
  bookMarks: JSON.parse(localStorage.getItem(`developerBooks_${email}`)) || [],
  applications:
    JSON.parse(localStorage.getItem(`developerApplication_${email}`)) || [],
  likeStartups:
    JSON.parse(localStorage.getItem(`developerLikes_${email}`)) || [],
  search: "",
  filter: "All",
};

const developerSlice = createSlice({
  name: "developer",

  initialState,

  reducers: {
    bookmarkStartup: (state, action) => {
      const startup = action.payload;

      const exist = state.bookMarks.find((item) => item.id === startup.id);

      if (!exist) {
        state.bookMarks.push(startup);
      }

      localStorage.setItem(
        `developerBooks_${email}`,
        JSON.stringify(state.bookMarks),
      );
    },

    removeBookmark: (state, action) => {
      state.bookMarks = state.bookMarks.filter(
        (item) => item.id !== action.payload,
      );

      localStorage.setItem(
        `developerBooks_${email}`,
        JSON.stringify(state.bookMarks),
      );
    },

    applyStartup: (state, action) => {
      const startup = {
        ...action.payload,
        status: "Pending",
      };

      const exist = state.applications.find((item) => item.id === startup.id);

      if (!exist) {
        state.applications.push(startup);
      }

      localStorage.setItem(
        `developerApplication_${email}`,
        JSON.stringify(state.applications),
      );
    },

    withdrawApplication: (state, action) => {
      state.applications = state.applications.filter(
        (item) => item.id !== action.payload,
      );

      localStorage.setItem(
        `developerApplication_${email}`,
        JSON.stringify(state.applications),
      );
    },

    likeStartup: (state, action) => {
      const startup = action.payload;

      const exist = state.likeStartups.find((item) => item.id === startup.id);

      if (!exist) {
        state.likeStartups.push(startup);
      }

      localStorage.setItem(
        `developerLikes_${email}`,
        JSON.stringify(state.likeStartups),
      );
    },

    unlikeStartup: (state, action) => {
      state.likeStartups = state.likeStartups.filter(
        (item) => item.id !== action.payload,
      );

      localStorage.setItem(
        `developerLikes_${email}`,
        JSON.stringify(state.likeStartups),
      );
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    acceptApplication: (state, action) => {
      const application = state.applications.find(
        (item) => item.id === action.payload,
      );

      if (application) {
        application.status = "Accepted";
      }

      localStorage.setItem(
        "developerApplication",
        JSON.stringify(state.applications),
      );
    },

    rejectApplication: (state, action) => {
      const application = state.applications.find(
        (item) => item.id === action.payload,
      );

      if (application) {
        application.status = "Rejected";
      }

      localStorage.setItem(
        "developerApplication",
        JSON.stringify(state.applications),
      );
    },
  },
});

export const {
  bookmarkStartup,
  removeBookmark,
  applyStartup,
  withdrawApplication,
  likeStartup,
  unlikeStartup,
  setSearch,
  setFilter,
  acceptApplication,
  rejectApplication
} = developerSlice.actions;

export default developerSlice.reducer;
