import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {

    const { data: blogs, pending, error } = useFetch("http://localhost:8000/blogs")

    
    return (
        <div className="home">
            {error && <div> {error} </div>}
            {pending && <div> Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
    );
}

export default Home;