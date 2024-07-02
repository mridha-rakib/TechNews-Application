import CategoriesList from "@/components/CategoriesList";
import Image from "next/image";
import { postData } from "@/data";
import Post from "@/components/Post";

export default function Home() {
  return (
    <>
      <CategoriesList />
      {postData && postData.length > 0 ? (
        postData.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <div>No Posts to display</div>
      )}
    </>
  );
}
