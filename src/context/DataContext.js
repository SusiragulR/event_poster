import { createContext } from "react";
import { useEffect, useState} from 'react';
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import AddToStorage from '../hooks/AddToStorage';

const DataContext = createContext({})

export const DataProvider = ({children}) => {

    const [posts,setPosts] = useState(JSON.parse(localStorage.getItem("social_media_posts")) || [])
    const [search,setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editPostTitle, setEditPostTitle] = useState('');
    const [editPostBody, setEditPostBody] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
       
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = {id, title:postTitle, datetime,body: postBody};
        const newPosts = [...posts,newPost]
        setPosts(newPosts)
        AddToStorage([...posts,newPost])
        setPostTitle('')
        setPostBody('')
        navigate('/')
    }

    useEffect(()=>{
        const filteredResults = posts.filter( (post) =>
            ((post.body).toLowerCase()).includes(search.toLowerCase()) || 
            ((post.title).toLowerCase()).includes(search.toLowerCase())
        )
        setSearchResults(filteredResults.reverse());
    }, [search,posts])

    const handleDelete = (id) => {
        const filteredResults = posts.filter((post) =>(
            post.id!==id
        ))
        setPosts(filteredResults)
        AddToStorage(filteredResults)
        navigate('/')
    }

    const handleEdit = (selectedPost) => {
        const updatedPost = {...selectedPost,title: editPostTitle, body: editPostBody };
        const newPosts = posts.map(post => (post.id===selectedPost.id) ? updatedPost : post)
        setPosts(newPosts)
        AddToStorage(newPosts)
        setEditPostTitle('')
        setEditPostBody('')
        navigate('/')
    }

    return(
        <DataContext.Provider value={{
            posts, editPostTitle, setEditPostTitle, editPostBody, setEditPostBody, handleEdit, search, setSearch, handleDelete,handleSubmit, postTitle, setPostTitle, postBody, setPostBody, searchResults
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;