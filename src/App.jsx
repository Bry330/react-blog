import Home from './Componets/Home';
import Navbar from './Componets/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Componets/Create';
import BlogDetails from './Componets/BlogDetails';
import NotFound from './Componets/NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
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
    </Router>
  );
}

export default App
