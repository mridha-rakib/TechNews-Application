import Post from "@/components/Post";
import Link from "next/link";
import React from "react";
import { postData } from "@/data";

const Dashboard = () => {
  return (
    <div>
      <h1>My Posts</h1>

      {postData && postData.length > 0 ? (
        postData.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <div className="py-6">
          No posts created yet.{" "}
          <Link className="underline" href={"/create-post"}>
            Create New Post
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
