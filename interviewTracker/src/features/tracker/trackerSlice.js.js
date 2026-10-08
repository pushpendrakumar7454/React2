import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: [
    {
      id: "dsa",
      title: "DSA",
      tasks: [
        {
          id: 1,
          title: "Two Sum",
          completed: false,
        },
        {
          id: 2,
          title: "Remove Duplicates from Sorted Array",
          completed: false,
        },
        {
          id: 3,
          title: "Move Zeroes",
          completed: false,
        },
        {
          id: 4,
          title: "Rotate Array",
          completed: false,
        },
        {
          id: 5,
          title: "3Sum",
          completed: false,
        },
      ],
    },

    {
      id: "git",
      title: "Git & GitHub",
      tasks: [
        {
          id: 1,
          title: "Wrong Branch, Correct Work",
          completed: false,
        },
        {
          id: 2,
          title: "Merge Conflict During PR",
          completed: false,
        },
        {
          id: 3,
          title: "Secret Accidentally Committed",
          completed: false,
        },
        {
          id: 4,
          title: "PR Review With New Changes",
          completed: false,
        },
        {
          id: 5,
          title: "Recovering Lost Local Work",
          completed: false,
        },
      ],
    },

    {
      id: "fullstack",
      title: "Full-Stack Technical",
      tasks: [
        {
          id: 1,
          title: "JavaScript Async Flow",
          completed: false,
        },
        {
          id: 2,
          title: "React Unnecessary Re-render",
          completed: false,
        },
        {
          id: 3,
          title: "REST API + Express Request Flow",
          completed: false,
        },
        {
          id: 4,
          title: "MongoDB + Mongoose Duplicate Data",
          completed: false,
        },
        {
          id: 5,
          title: "Authentication + Authorization + ImageKit",
          completed: false,
        },
      ],
    },

    {
      id: "machine",
      title: "Machine Coding",
      tasks: [
        {
          id: 1,
          title: "Understand the problem statement",
          completed: false,
        },
        {
          id: 2,
          title: "Build responsive dashboard",
          completed: false,
        },
        {
          id: 3,
          title: "Push project to GitHub",
          completed: false,
        },
        {
          id: 4,
          title: "Deploy and record demo",
          completed: false,
        },
      ],
    },
  ],
};

const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {},
});

export default trackerSlice.reducer;