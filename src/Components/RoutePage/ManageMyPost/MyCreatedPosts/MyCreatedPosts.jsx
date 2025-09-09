import React, { Suspense } from "react";
import useAuth from "../../../../Hooks/Auth/useAuth";
import useCreateAPI from "../../../../API/useCreateAPI";
import MyCreatedPostList from "./MyCreatedPostList";

const MyCreatedPosts = () => {
  const { user } = useAuth();
  const { createdPost } = useCreateAPI();

  return (
    <div>
      <Suspense
        fallback={
          <div className="w-full flex items-center justify-center bg-[#1b2227] min-h-screen">
            <span className="loader"></span>
          </div>
        }
      >
        <MyCreatedPostList createdPost={createdPost(user?.email)} />
      </Suspense>
    </div>
  );
};

export default MyCreatedPosts;
