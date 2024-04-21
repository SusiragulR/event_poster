import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const PostPage = () => {
    const { posts, handleDelete } = useContext(DataContext);
    const { id } = useParams();
    const selectedPost = posts.filter((post) => post.id.toString() === id);
    
    return (
        <main className="PostPage">
        <article className="post">
            {selectedPost[0] && (
            <>
                <h2>{selectedPost[0].title}</h2>
                <p>{selectedPost[0].datetime}</p>
                <p>{selectedPost[0].body}</p>

                <Link to={`/edit/${selectedPost[0].id}`}>
                <button className="editButton">Edit</button>
                </Link>

                <button
                className="deleteButton"
                onClick={() => handleDelete(selectedPost[0].id)}
                >
                Delete
                </button>
            </>
            )}
            {!selectedPost[0] && (
            <>
                <h2>Post not found</h2>
                <p>Well that's disappointing</p>
                <p>
                Return to <Link to="/">home</Link>
                </p>
            </>
            )}
        </article>
        </main>
    );
};

export default PostPage;
