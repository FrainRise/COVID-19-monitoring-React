import React from 'react';


import { MainPage, ContactPage, AboutPage, Navbar, Footer} from './components/index';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  render(){
    return (
        <React.Fragment>
          <Navbar />
            <Switch>
              <Route path='/' component={MainPage} exact/>
              <Route path='/contact-us' component={ContactPage} />
              <Route path='/about-project' component={AboutPage} />
            </Switch>
          <Footer />
        </React.Fragment>
    );
  }
}

export default App;
