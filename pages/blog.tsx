import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";

//Type for blog posts
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Blog: NextPage = () => {
  const [postData, setPostData] = useState<Post>();

  const getPost = async (): Promise<Post> => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    return response.data;
  };

  useEffect(() => {
    try {
      const getData = async () => {
        const result = await getPost();
        setPostData(result);
      };
      getData();
    } catch (e) {
      console.log(e);
    }
  }, []);

    return (
        <>
            {!postData ? (
                <span>Loading....</span>
            ) : (
                    <span>
                        PostId: {postData.id}:{postData.title}
                    </span>
            )}
        </>
  );
};

export default Blog;
