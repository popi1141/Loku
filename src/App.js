import React, {Fragment, Component }  from 'react';
import './App.css';
import LokuPage from './LokuPage';
import AboutPage from './AboutPage';
import SplashPage from './SplashScreen';
import LokuNav from './LokuNav';
import CardGenerator from './CardGenerator';
import LokuFooter from './LokuFooter';
import { Route, Switch, Redirect} from 'react-router-dom'; //use switch around routes so you don't need if/else statements

export class App extends Component 
{
  render() {
     //Routes to different areas
    return (
      <Fragment>
        <header>
          <LokuNav/>
        </header>
        <main>
          <Switch>
            <Route exact path ="/" component={SplashPage}/>
            <Route exact path ="/seattle/food" render={(routerProps) => (
              <CardGenerator {...routerProps} city="Seattle" category="Food"/>
            )}/>
            <Route exact path ="/seattle/produce" render={(routerProps) => (
            <CardGenerator {...routerProps} city="Seattle" category="Produce"/>
            )}/>
            <Route exact path ="/seattle/crafts" render={(routerProps) => (
              <CardGenerator {...routerProps} city="Seattle" category="Crafts"/>
            )}/>
            <Route exact path ="/tacoma/food" render={(routerProps) => (
              <CardGenerator {...routerProps} city="Tacoma" category="Food"/>
            )}/>
            <Route exact path ="/tacoma/produce" render={(routerProps) => (
              <CardGenerator {...routerProps} city="Tacoma" category="Produce"/>
            )}/>
            <Route exact path ="/tacoma/crafts" render={(routerProps) => (
              <CardGenerator {...routerProps} city="Tacoma" category="Crafts"/>
            )}/>
            <Route path ="/lokupage/:cityName/:categoryName/:businessName" component={LokuPage}/>
            <Route path ="/about" component={AboutPage}/>
            <Redirect to="/"/>
          </Switch>
        </main>
        <LokuFooter/>
      </Fragment>
    );
  }
}

export default App;