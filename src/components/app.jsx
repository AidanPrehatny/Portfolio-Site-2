import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'

import Home from './home/home'
import ProjectsContainer from './projects/projectsContainer'
import About from './about/about'
// import Blog from './blog/blog'
import Contact from './contact/contact'

// import AuthContainer from './auth/authContainer'
// import ServeContainer from './auth/serveContainer'
// import ArticlesContainer from './articles/articlesContainer'
// import ArticleDetails from './articles/details/articleDetails'
// import Login from './auth/login'
// import Register from './auth/register'



class App extends Component {
  render() {
    return (
			<div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={ProjectsContainer}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>

      </div>
    );
  }
}

export default App;
