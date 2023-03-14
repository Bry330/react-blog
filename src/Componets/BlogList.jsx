import { Link } from 'react-router-dom';

const BlogList = ({ blogs = [] }) => {
    const sortedBlogs = blogs.sort((a, b) => b.id - a.id);

    return (
        <div className="blog-list">
            {sortedBlogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;