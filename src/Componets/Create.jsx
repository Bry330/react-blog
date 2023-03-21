import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const Create = () => {

    const params = useParams();
    const blogId = params.id
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + blogId, !Boolean(blogId));

    const [title, setTitle] = useState("");
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [urlImage, setUrlImage] = useState('')
    const history = useHistory();
    const action = blogId ? "editado" : "creado";

    const createOrUpdateBlog = async () => {
        const blog = { title, body, author, urlImage };

        try {
            const res = await fetch(`http://localhost:8000/blogs/${blogId ? blogId : ""}`, {
                method: blogId ? 'PUT' : 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            })

            const data = await res.json()

            // transform res to data
            if (res.ok) {
                // return data
                return data
            }

            throw new Error(`Error al ${blogId ? "actualizar" : "crear"} el blog`)

        } catch (error) {
            toast.error(`Error al ${blogId ? "actualizar" : "crear"} el blog: ${error.message}`)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        toast.promise(createOrUpdateBlog(), {
            loading: 'Loading',
            success: (data) => {
                console.log(data)
                history.push("/")
                // show the title of the blog in the notification
                return `El blog ${title} ha sido ${action}`
            }, error: 'Error when fetching',
        })

    }

    useEffect(() => {
        if (blog) {
            setTitle(blog.title)
            if (blog) setUrlImage(blog.urlImage)
            setBody(blog.body)
            setAuthor(blog.author)

        }

        return () => {
            setTitle("")
            setUrlImage("   ")
            setBody("")
            setAuthor("")
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
                <input type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} />

                <div>
                    <button > {blogId ? "Edit" : "Create"} Blog </button>
                </div>
            </form>
        </div>
    );
}

export default Create;  