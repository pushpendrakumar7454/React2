import { createSlice } from "@reduxjs/toolkit";

const storySlice = createSlice({
    name: "story",
    initialState: {
        story: JSON.parse(localStorage.getItem('story')) || []

    },
    reducers: {
        addStory: (state, action) => {
            const newStory = {...action.payload,
                id: Date.now(),
                createdAt: Date.now()
            }
            state.story.push(newStory)
            localStorage.setItem('story', JSON.stringify(state.story))
        },
        removeStory: (state, action) => {
            state.story = state.story.filter((id) => id !== action.payload)
            localStorage.setItem('story', JSON.stringify(state.story))
        },
        removeExpiredStories: (state, action) => {
            const twentyfourhour = 24 * 60 * 60 * 1000
            state.story = state.story.filter((story) => Date.now() - story.createdAt < twentyfourhour)
            localStorage.setItem('story', JSON.stringify(state.story))
        }
    }
})

export const { addStory, removeStory, removeExpiredStories } = storySlice.actions
export default storySlice.reducer