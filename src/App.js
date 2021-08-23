import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Prihod from './components/pages/Furnitura/Prihod';


import Furnitura from './components/pages/Furnitura/Furnitura';
import PrihodPage from './components/pages/Furnitura/PrihodPage';
import DeletePage from './components/pages/Furnitura/DeletePage';
import Article from './components/pages/Furnitura/Article';
import ArticlePage from './components/pages/Furnitura/ArticlePage';
import Video from './components/pages/Video';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/video' component={Video} />
          <Route path='/Prihod' component={Prihod} /> 
         
          <Route path='/Article' component={Article} /> 
          <Route path='/Furnitura' component={Furnitura} /> 
        
          <Route path='/PrihodPage' component={PrihodPage} /> 
          <Route path='/DeletePage' component={DeletePage} /> 
          <Route path='/ArticlePage' component={ArticlePage} /> 
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
