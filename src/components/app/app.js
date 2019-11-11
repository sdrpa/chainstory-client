import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/header'
import Home from '../home/home';
import About from '../about/about';
import Footer from '../footer/footer';
import Drawing from '../drawing/drawing';

import './app.css';

const App = () => {
   return (
      <Router>
         <Header />
         <main>  
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/about" component={About} />
               <Route path="/drawing/:ti" component={Drawing} />
            </Switch>
         </main>
         <Footer />
      </Router>
  );
}

export default App;
