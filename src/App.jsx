import Home from './Componets/Home';
import Navbar from './Componets/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Componets/Create';
import BlogDetails from './Componets/BlogDetails';
import NotFound from './Componets/NotFound';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("");
  const filteredData = data.filter((blogs) => blogs.title.includes(search))

  useEffect(() => {
    const fetchblogs = async () => {
      const response = await fetch(`http://localhost:8000/blogs`);
      const data = await response.json();
      return data
    }

    fetchblogs().then((res) => setData(res))

  }, [])


  return (
    <Router>
      <div className="App">
        <Navbar setSearch={setSearch} />
        <div className='content'>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/create">
              <Create />
            </Route>

            <Route path="/create/:id">
              <Create />
            </Route>

            <Route exatc path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route exatc path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>
      </div>
      <Toaster />

    </Router>
  );
}

export default App
