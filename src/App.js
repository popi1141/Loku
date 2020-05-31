import React, {Fragment, Component }  from 'react';
import './App.css';
import LokuPage from './LokuPage';
import AboutPage from './AboutPage';
import SplashPage from './SplashScreen';
import LokuNav from './LokuNav';
import CardGenerator from './CardGenerator';
import LokuFooter from './LokuFooter';
import { Route, Switch, Redirect} from 'react-router-dom'; //use switch around routes so you don't need if/else statements

export class App extends Component {
  render() {
    let SeattleData = this.props.Data.Seattle;
    let TacomaData = this.props.Data.Tacoma;
    return (
      <Fragment>
        <header>
          <LokuNav/>
        </header>
        <main>
          <Switch>
            <Route exact path ="/" component={SplashPage}/>
            <Route path ="/seattle/food" render={(routerProps) => (
              <CardGenerator {...routerProps} data={SeattleData.Food} city="Seattle" category="Food"/>
            )}/>
            <Route path ="/seattle/produce" render={(routerProps) => (
            <CardGenerator {...routerProps} data={SeattleData.Produce} city="Seattle" category="Produce"/>
            )}/>
            <Route path ="/seattle/crafts" render={(routerProps) => (
              <CardGenerator {...routerProps} data={SeattleData.Crafts} city="Seattle" category="Crafts"/>
            )}/>
            <Route path ="/tacoma/food" render={(routerProps) => (
              <CardGenerator {...routerProps} data={TacomaData.Food} city="Tacoma" category="Food"/>
            )}/>
            <Route path ="/tacoma/produce" render={(routerProps) => (
              <CardGenerator {...routerProps} data={TacomaData.Produce} city="Tacoma" category="Produce"/>
            )}/>
            <Route path ="/tacoma/crafts" render={(routerProps) => (
              <CardGenerator {...routerProps} data={TacomaData.Crafts} city="Tacoma" category="Crafts"/>
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