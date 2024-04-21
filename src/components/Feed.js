import React, { useContext } from "react";
import Post from "./Post";
import DataContext from "../context/DataContext";

const Feed = ({ posts }) => {

    return (
        <>
        {posts.map((post) => (
            <Post key={post.id} post={post} />
        ))}
        </>
    );
};

export default Feed;
