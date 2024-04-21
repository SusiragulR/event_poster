import "./index.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./routes/Home";
import About from "./routes/About";
import NewPost from "./routes/NewPost";
import PostPage from "./routes/PostPage";
import EditPost from "./routes/EditPost";
import Missing from "./routes/Missing";

import { DataProvider } from "./context/DataContext";

function App() {
    return (
        <div className="App">
        <DataProvider>
            <Header />

            <Nav />

            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post">
                <Route index element={<NewPost />} />
                <Route path=":id" element={<PostPage />} />
            </Route>
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="*" element={<Missing />} />
            </Routes>

            <Footer />
        </DataProvider>
        </div>
    );
}

export default App;
