import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { store, history} from '../../store'
import StaffProfile from './staffProfile';
import HospitalProfile from './hospitalProfile';
import AdminDashboard from './admin';
import HospitalDashboard from './HospitalDashboard';
import Redirect from './redirect';
import "../assets/w3.css";
import "./theme2.css";

class Main extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Switch>
            <Route path="/main/staff/others" component={HospitalDashboard} />
            <Route path="/main/admin/" component={AdminDashboard} />
            <Route path="/main/staff" component={StaffProfile}/>
            <Route path="/main/hospital" component={HospitalProfile}/>                            
            <Route path="/main/" component={Redirect} />
          </Switch>
        </BrowserRouter>
      </ConnectedRouter>
    );
  }
}

export default Main;
