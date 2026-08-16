import React, { useState } from "react";

import Story from "../components/Story";
import Post from "../components/Post";

import FollowSuggestion from "../components/FollowSuggestion";
import PostForm from "../../../features/users/ui/components/PostForm";



const Home = () => {
  const [users, setUsers] = useState([])

const handleAddPost = (data) => {
  setUsers((prev) => [
    ...prev,
    {
      id: Date.now(),
      image: data.image,
      caption: data.caption,
    },
  ]);
};
  return (
    <div className="flex justify-center gap-10 px-3 lg:px-6">

      <div className="w-full max-w-[630px]">

        <Story />

        <div className="mt-2 space-y-7">
          <PostForm onaddPost={handleAddPost}/>
          {
          users.map((post)=>{
            return <Post key={post.id} post={post}/>
          })
          }
 
        </div>

      </div>

      <div className="pt-8">
        <FollowSuggestion />
      </div>

    </div>
  );
};

export default Home;