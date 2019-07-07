import React from 'react';
import { Container} from 'semantic-ui-react'
import Header from './Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import './App.css'

function App() {
  return (
    <Router>
      <Container>
      <Header />
      <Route path="/" exact component={Home} />
    </Container>
    </Router>
    
  );
}

export default App;
