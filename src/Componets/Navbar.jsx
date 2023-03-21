import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useParams } from "react-router-dom";

const Navbar = ({ setSearch }) => {

    const location = useLocation();
    const blogId = location.pathname.split("/")[2];
    const [temporalValue, setTemporalValue] = useState("");

    const handleSearch = () => {
        setSearch(temporalValue);
        setTemporalValue("");
    }

    return (
        <nav className="navbar">
            <form onSubmit={(event) => event.preventDefault()} className="flex">
                <input
                    type="text"
                    value={temporalValue}
                    onChange={(event) => setTemporalValue(event.target.value)}
                    className="rounded-l-3xl border border-[#222222] bg-[#121212] px-4 py-2 text-gray-100"
                    placeholder="Search"
                />
                <button
                    onClick={handleSearch}
                    className="rounded-r-3xl bg-[#222222] px-4 py-2 text-gray-300"
                >
                    Search
                </button>
            </form>
            <Link to="/">
                <h1>Welcome</h1>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                {blogId && <Link to={`/create/${blogId}`}>Update</Link>}
            </div>
        </nav>
    );
}

export default Navbar;