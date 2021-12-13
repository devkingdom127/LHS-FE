import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history} from './store';

import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import "bootstrap/dist/css/bootstrap.min.css";
import Theme_2 from './components/theme_2';
import Theme_1 from './components/theme_1';
import { CometChat } from "@cometchat-pro/chat";

 const initComet= () =>{
  const appID = "199232b862965e7a";
  const region = "us";
  const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
  CometChat.init(appID, appSetting).then(
    () => {
      console.log("Initialization completed successfully");
      // You can now call login function.
    },
    error => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );
}

const AuthenticatedRoute = (props) =>{
  const token = localStorage.getItem('token');
  if(token){
      return <Route {...props} component={props.component}/>
  }
  initComet();
  return <Redirect to={{ pathname: '/login'}} />
}

const UnAuthenticatedRoute = (props) =>{
  const token = localStorage.getItem('token');
  if(!token){  
      return <Route {...props} component={props.component}/>
  }
  const type = localStorage.getItem('type');
  initComet();
  return <Redirect to={{ pathname: '/main/' + type}}/>
}

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <BrowserRouter>
      <Switch>
        <AuthenticatedRoute path="/main" component={Theme_2} />
        <UnAuthenticatedRoute path="/" component={Theme_1} />
      </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));