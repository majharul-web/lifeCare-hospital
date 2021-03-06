import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from './components/Pages/About/About';
import Career from './components/Pages/Career/Career';
import Home from './components/Pages/Home/Home/Home';
import Services from './components/Pages/Home/Services/Services';
import Login from './components/Pages/Login/Login/Login';
import PrivateRoute from './components/Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/Pages/NotFound/NotFound';
import Footer from './components/Pages/Shared/Footer/Footer';
import TopMenu from './components/Pages/Shared/TopMenu/TopMenu';
import SelectedService from './components/SelectedService/SelectedService';
import AuthProvider from './contexts/AuthProvider';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <TopMenu />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/services'>
              <Services />
            </Route>
            <PrivateRoute exact path='/service/:id'>
              <SelectedService />
            </PrivateRoute>
            <PrivateRoute exact path='/about'>
              <About />
            </PrivateRoute>
            <PrivateRoute exact path='/career'>
              <Career />
            </PrivateRoute>
            <Route exact path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>

  );
}

export default App;
