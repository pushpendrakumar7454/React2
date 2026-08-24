import React from "react";
import {
  Grid3X3,
  Clapperboard,
  Bookmark,
  UserSquare2,
} from "lucide-react";
import { useSelector } from "react-redux";

const Posts = () => {

    const{posts}=useSelector((state)=>state.post)
  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex h-12 border-t border-gray-300">
        <div className="flex flex-1 items-center justify-center border-t border-black">
          <Grid3X3 size={22} />
        </div>

        <div className="flex flex-1 items-center justify-center text-gray-400">
          <Clapperboard size={22} />
        </div>

        <div className="flex flex-1 items-center justify-center text-gray-400">
          <Bookmark size={22} />
        </div>

        <div className="flex flex-1 items-center justify-center text-gray-400">
          <UserSquare2 size={22} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 pb-4">
      {/* Posts */}
     {posts.map((post)=>{
       return <img
          src={post.image}
          className="aspect-square w-full object-cover"
          alt="post"
        />        

       
    })}
    </div>
    </div>
  );
};

export default Posts;