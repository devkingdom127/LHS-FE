import React from 'react';
import { connect } from 'react-redux';
import search from '../../assets/images/search.svg';
import avatar from '../../assets/images/avatar.png';
import badge from '../../assets/images/badge.png';
import { history } from '../../../store';
import { removeSession } from '../../../action';

const mapStateToProps = state => {
  return {
    auth: state.auth
  }};

const mapDispatchToProps = dispatch => ({
});

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          type: '',
          name: '',
          title: '',
          avatar: '',
          badge: true,
          search: '',
          page: this.props.page,
          profileClick: false,
          openAccount: false,
        }
    }
    componentWillMount() {
      this.initState(this.props);
    }
    componentWillReceiveProps = (newProps) => {
      this.initState(newProps);
    }
    initState = (props) => {
      console.log(props.auth);
      this.setState({
        type: props.auth.type,
        name: props.auth.name,
        avatar: props.auth.avatar!==''?props.auth.avatar:avatar,
        title : props.auth.title,
        badge: props.badge
      })
    }

    search = (e) => {
      this.setState({search: e.target.value});
    }
    profileClick=(val)=>{
      if(val=="profile"){
        this.setState({profileClick:true});
      }
      else{
        removeSession();
        history.push('/home');
      }
    }
    openAccount=()=>{
      this.setState({openAccount:!this.state.openAccount});
    }
   
   render() {
    return (
        <div className="theme2_header">
            {this.state.page}
            <div className="theme2_header_item">
              <div className="theme2_header_avatar_container" onClick={this.openAccount}>
                <div className="theme2_header_avatar_img">
                  <img width="100%" src={this.state.avatar} alt="avatar.png" style={{borderRadius: '50%'}}/>
                  <img src={badge} alt="badge.png" className="theme2_header_badge"/>
                  <div className={this.state.openAccount?"rectangle":"rectangle openAccount"}></div>
                  <div className={this.state.openAccount?"account":"account openAccount"} >
                    <p className={this.state.profileClick?"profile accountClick":"profile"} onClick={()=>this.profileClick("profile")} >Profile</p>
                    <p className="logout" onClick={()=>this.profileClick("logout")}>Logout</p>
                  </div>
                </div>
                <b className="theme2_header_avatar_name"> {this.state.name} </b>
              </div>
              <div className="theme2_header_search_container searchBigImg">
                <img className="theme2_header_search_img" alt="search.svg" src={search}/>
                <input className="theme2_header_search" placeholder="Search" type="text" value={this.state.search} onChange={this.search}/>
              </div>
              <div className="searchImag">
                <img className="theme2_header_search_img" alt="search.svg" src={search}/>
              </div>
            </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
