import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import DataContext from "../context/DataContext";

const Nav = () => {
    const { search, setSearch } = useContext(DataContext);

    return (
        <nav className="Nav">
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search Posts</label>
            <input
            id="search"
            type="text"
            placeholder="Search Posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>
        <ul>
            <Link to="/" className="links"><li>Home</li></Link>
            <Link to="/about" className="links"><li>About</li></Link>
            <Link to="/post" className="links"><li>Post</li></Link>
            <Outlet />
        </ul>
        </nav>
    );
};

export default Nav;
