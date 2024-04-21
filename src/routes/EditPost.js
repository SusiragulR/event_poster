import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const EditPost = () => {
    const {
        posts,
        editPostTitle,
        setEditPostTitle,
        editPostBody,
        setEditPostBody,
        handleEdit,
    } = useContext(DataContext);

    const { id } = useParams();

    const selectedPost = posts.filter((post) => post.id === Number(id));

    useEffect(() => {
        if (selectedPost[0]) {
        setEditPostTitle(selectedPost[0].title);
        setEditPostBody(selectedPost[0].body);
        }
    }, [selectedPost[0]]);

    return (
        <form className="editPost" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="postTitle">Title</label>
        <input
            id="postBody"
            type="text"
            defaultValue={editPostTitle}
            required
            onChange={(e) => setEditPostTitle(e.target.value)}
        />

        <label htmlFor="postBody">Body</label>
        <textarea
            id="postBody"
            defaultValue={editPostBody}
            required
            onChange={(e) => setEditPostBody(e.target.value)}
        />

        <button
            type="button"
            className="submitButton"
            onClick={() => handleEdit(selectedPost[0])}
        >
            Submit
        </button>
        </form>
    );
};

export default EditPost;
