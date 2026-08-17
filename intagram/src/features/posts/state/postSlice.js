import { createSlice } from "@reduxjs/toolkit";

const postslice = createSlice({
    name: "posts",
    initialState: {
        posts: JSON.parse(localStorage.getItem("posts")) || []
    },
    reducers: {
        addPost: (state, action) => {
            state.posts = action.payload
            localStorage.setItem("posts", JSON.stringify(action.payload))

        },
        removePost: (state, action) => {
            state.posts = state.posts.filter((post) => {
                return post.id !== action.payload
            })
            localStorage.setItem("posts", JSON.stringify(state.posts))
        }
    }
})
export const { addPost, removePost } = postslice.actions
export default postslice.reducer