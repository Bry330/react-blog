import { Link } from "react-router-dom";

const NotFound = () => {

    return (
        <div className="not-found">
            <h2>Sorry D:</h2>
            <p>Page not NotFound</p>
            <Link to="/">Back to home page</Link>
        </div>
    );
}

export default NotFound;