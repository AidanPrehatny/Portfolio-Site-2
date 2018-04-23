import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'

import Home from './home/home'
import Projects from './projects/projects'
import About from './about/about'
import Blog from './blog/blog'
import Contact from './contact/contact'


import AuthContainer from './auth/authContainer'
import ServeContainer from './auth/serveContainer'

import ArticlesContainer from './articles/articlesContainer'
import ArticleDetails from './articles/details/articleDetails'

// import Login from './auth/login'
// import Register from './auth/register'

class App extends Component {
  render() {
    return (
			<div>
        <Switch>
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact}/>
          <Route render={()=>
            <AuthContainer key="authcontainer">
              <ServeContainer>
                <Switch >
                  <Route exact path="/articles/new" component={ArticlesContainer} />
                  <Route exact path="/articles/:id" component={ArticleDetails} />
                  <Route path="/articles" component={ArticlesContainer} />
                  <Route render={()=><div><b>404</b></div>} />
                </Switch>
              </ServeContainer>
            </AuthContainer>
          }>
          </Route>
        </Switch>

      </div>
    );
  }
}

export default App;
