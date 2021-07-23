import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Homepage from './pages/Homepage';
import PokemonPage from './pages/PokemonPage';


// Components
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header/>
      <Container>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
        <Route path="/pokemon/:id" component={PokemonPage}/>
      </Container>
    </Router>
    
  );
}

export default App;
