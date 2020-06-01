import React, {Fragment, Component }  from 'react';
import './App.css';
import LokuPage from './LokuPage';
import AboutPage from './AboutPage';
import SplashPage from './SplashScreen';
import LokuNav from './LokuNav';
import CardGenerator from './CardGenerator';
import LokuFooter from './LokuFooter';
import { Route, Switch, Redirect} from 'react-router-dom'; //use switch around routes so you don't need if/else statements
import * as firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";

export class App extends Component 
{
  constructor(props){
    super(props);
    this.state = {Data: undefined};
  }

  componentDidMount() {
    let firebaseRef = firebase.database().ref();
    firebaseRef.once('value', (snapshot) => {
        let database = snapshot.val();
        this.setState({SeattleData: database.Seattle, TacomaData: database.Tacoma});
    });
  }
  
  render() {
    let SeattleData = this.state.SeattleData;
    let TacomaData = this.state.TacomaData;
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