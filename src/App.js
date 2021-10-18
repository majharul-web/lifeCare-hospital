import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login/Login';
import NotFound from './components/Pages/NotFound/NotFound';
import Footer from './components/Pages/Shared/Footer/Footer';
import TopMenu from './components/Pages/Shared/TopMenu/TopMenu';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <TopMenu/>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home/>
            </Route>
            <Route exact path='/login'>
              <Login/>
            </Route>
            <Route exact path='*'>
              <NotFound/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </AuthProvider>
    </div>

  );
}

export default App;
