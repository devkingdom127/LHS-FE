import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { SET_AUTH, SET_HP_PROFILE } from '../../../constants/actionTypes';
import { callApi, setSession } from '../../../action';
import Dashboard from './Dashboard';
import MyHiring from './MyHiring';
import StaffHiring from './StaffHiring';
import Call from './Call';
import NewNavigation from '../components/newNavigation';

const mapStateToProps = state => {
  return {
      hospitalProfile: state.hospitalProfile
  }};

const mapDispatchToProps = dispatch => ({
    setHospitalProfile: (data) => dispatch({type: SET_HP_PROFILE, data}),
    setAuth: (data) => dispatch({type: SET_AUTH, data})
});
console.log("in index profile");


class HospitalProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            curPos: 'profile'
        }
    }

    componentWillMount = async () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        var token = localStorage.getItem('token');
        const _id = localStorage.getItem('_id');
        token = "Bearer " + token;
        var res = await callApi("GET", "/v1/LHS/hospital/getById/" + _id, token);
        this.props.setHospitalProfile(res.data);
        var data = {            
            name: res.data.name, 
            type: 'hospital', 
            avatar: res.data.avatar,
            badge: res.data.badge,
            hospitalName: res.data.healthCareInstitution.name,
            city: res.data.corporateAddress[0].city,
            state: res.data.corporateAddress[0].state
        }
        this.props.setAuth(data);
    }

    setCurPos = (pos) => {
        this.setState({curPos: pos});
    }

    updateDB = async (data) => {
        var token = "Bearer " + localStorage.getItem('token');
        var res = await callApi("POST", "/v1/LHS/hospital/update/" + this.props.hospitalProfile._id, token, data);
        setSession( res.token, res.data._id, 'hospital');
        this.props.setHospitalProfile(res.data);
        return res.Message;
    }
   
   render() {
    return (        
        <div className="theme2">
            <NewNavigation />
            <div className="theme2_container">
                <Switch>
                    <Route path="/main/hospital/dashboard" component={Dashboard} />
                    <Route path="/main/hospital/staffhiring" component={StaffHiring} />
                    <Route path="/main/hospital/myhiring" component={MyHiring} />
                    <Route path="/main/hospital/chats" component={Call} />
                    <Route path="/main/hospital" component={Dashboard}/>
                </Switch>
            </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HospitalProfile);
