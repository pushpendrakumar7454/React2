import React, { useContext, useEffect } from "react";

import Story from "../components/Story";
import Post from "../components/Post";

import FollowSuggestion from "../components/FollowSuggestion";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../../features/posts/ui/components/UserCard";
import { data } from "react-router";
import StoryBar from "../../../features/story/ui/components/StoryBar";
import Alllstory from "../../../features/story/ui/pages/Alllstory";
import { addPost } from "../../../features/posts/state/postSlice";





const Home = () => {


  const{posts}=useSelector((state)=>state.post)
  console.log(posts)
  
  

  return (
    <div className="flex justify-center gap-10 px-3 lg:px-6">

      <div className="w-full max-w-[630px]">

        <Alllstory/>

        <div className="mt-2 space-y-7">
          {posts?.map((post)=>{
            return <UserCard key={post.id} post={post}/>
          })}

        </div>

      </div>

      <div className="pt-8">
        <FollowSuggestion />
      </div>

    </div>
  );
};

export default Home;