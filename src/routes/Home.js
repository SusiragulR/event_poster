import React, { useContext } from "react";
import Feed from "../components/Feed";
import DataContext from "../context/DataContext";

const Home = () => {
    const {searchResults} = useContext(DataContext)

    return (
        <main className="Home">
            {postMessage.length ? (
                <Feed posts = {searchResults}/>
            ) : (
                <p style={{ marginTop: "2rem" }}>No points to display</p>
            )}
        </main>
    );
};

export default Home;
