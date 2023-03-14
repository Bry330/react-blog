import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const Create = () => {

    const params = useParams();
    const blogId = params.id
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + blogId, !Boolean(blogId));

    const [title, setTitle] = useState("");
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [urlImage, setUrlImage] = useState('')
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blog = { title, body, author, urlImage };

        await fetch(`http://localhost:8000/blogs/${blogId ? blogId : ""}`, {
            method: blogId ? 'PUT' : 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
        })

        history.push("/")
    }

    useEffect(() => {
        if (blog) {
            setTitle(blog.title)
            if (blog) setUrlImage(blog.urlImage)
            setBody(blog.body)

        }

        return () => {
            setTitle("")
            setUrlImage("   ")
            setBody("")
        }
    }, [blog])


    return (
        <div className="create">
            {blogId ? <h2>Edit the Blog</h2> : <h2>Add a New Blog</h2>}

            <form onSubmit={handleSubmit}>

                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Image URL:</label>
                <input type="url"
                    value={urlImage}
                    onChange={(e) => setUrlImage(e.target.value)} />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    rows={10}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                <button> {blogId ? "Edit" : "Create"} Blog </button>
            </form>
        </div>
    );
}

export default Create;  