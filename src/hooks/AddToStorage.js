const AddToStorage = (posts) => {
    localStorage.setItem("social_media_posts",JSON.stringify(posts))
}

export default AddToStorage