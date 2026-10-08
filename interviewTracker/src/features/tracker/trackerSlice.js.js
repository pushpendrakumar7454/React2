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

  reducers: {
    toggleTask: (state, action) => {
      const { sectionId, taskId } = action.payload;

      for (let i = 0; i < state.sections.length; i++) {
        if (state.sections[i].id === sectionId) {
          for (let j = 0; j < state.sections[i].tasks.length; j++) {
            if (state.sections[i].tasks[j].id === taskId) {
              state.sections[i].tasks[j].completed =
                !state.sections[i].tasks[j].completed;

              break;
            }
          }

          break;
        }
      }
    },

    resetProgress: (state) => {
      for (let i = 0; i < state.sections.length; i++) {
        for (let j = 0; j < state.sections[i].tasks.length; j++) {
          state.sections[i].tasks[j].completed = false;
        }
      }
    },
  },
});

export const { toggleTask, resetProgress } = trackerSlice.actions;

export default trackerSlice.reducer;