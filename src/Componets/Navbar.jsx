import { Link, useLocation, useParams } from "react-router-dom";

const Navbar = () => {

    let location = useLocation();

    const blogId = location.pathname.split("/")[2];

    return (
        <nav className="navbar">
            <h1>Welcome</h1>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                {blogId && <Link to={`/create/${blogId}`}>Update</Link>}
            </div>
        </nav>
    );
}

export default Navbar;