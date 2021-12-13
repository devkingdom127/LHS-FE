import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../../store';
import mini_logo from '../../assets/images/mini-logo.svg';
import letter_logo from '../../assets/images/letter-logo.svg';

const mapStateToProps = state => {
  return {
    type: state.auth.type
  }};

const mapDispatchToProps = dispatch => ({
});

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          color: [ true, false, false, false, false, false, false ]
        }
    }

    componentWillMount = () => {
      this.initState(this.props);
    }

    componentWillReceiveProps = (props) => {
      this.initState(props);
    }

    initState = (props) => {      
      switch (props.curPos) {
        case '':
          this.setState({color: [true, false, false, false, false, false, false]});
          break;
        case 'manageAdmin':
          this.setState({color: [false, true, false, false, false, false, false]});
          break;
        case 'manageStaff':
          this.setState({color: [false, false, true, false, false, false, false]});
          break;
        case 'manageHospital':
          this.setState({color: [false, false, false, true, false, false, false]});
          break;
      }
    }

    navTo = (num) => {
      var color = this.state.color;
      for (var i = 0; i < color.length; i++)        
          color[i] = false;
      color[num] = true;
      console.log(color);
      this.setState({color: color});
      const links = ['', '/manageAdmin', '/manageStaff', '/manageHospital', '', '', ''];
      console.log('/main/admin' + links[num]);
      history.push('/main/admin' + links[num]);
    }
   
   render() {
    return (
        <div className="theme2_side_nav">
            <div className="theme2_logo_container">
              <img src={mini_logo} alt="mini-logo.png" width="40px"/>
              <img src={letter_logo} alt="letter-logo.png" className="theme2_letter_logo"/>
            </div>
            <div className="theme2_nav_item" onClick={() => this.navTo(0)} style={{color: this.state.color[0]?"#009CDE":"#333333"}}>
              <svg width="24" height="24" viewBox="0 0 32 32" fill={this.state.color[0]?"#009CDE":"#333333"} xmlns="http://www.w3.org/2000/svg">
                  <path stroke="white" strokeWidth="0.8" d="M27.6667 1H4.33333C2.5 1 1 2.5 1 4.33333V27.6667C1 29.5 2.5 31 4.33333 31H27.6667C29.5 31 31 29.5 31 27.6667V4.33333C31 2.5 29.5 1 27.6667 1ZM4.33333 27.6667V4.33333H14.3333V27.6667H4.33333ZM27.6667 27.6667H17.6667V16H27.6667V27.6667ZM27.6667 12.6667H17.6667V4.33333H27.6667V12.6667Z"/>
              </svg>
              <b className="theme2_nav_text" > Dashboard </b>
            </div>
            <div className="theme2_nav_item" onClick={() => this.navTo(1)} style={{color: this.state.color[1]?"#009CDE":"#333333"}}>
              <svg width="22" height="30" viewBox="0 0 22 30" fill={this.state.color[1]?"#009CDE":"#333333"} xmlns="http://www.w3.org/2000/svg">
                <path d="M21 29H19V24C18.9984 22.6744 18.4711 21.4036 17.5338 20.4662C16.5964 19.5289 15.3256 19.0016 14 19H8C6.6744 19.0016 5.40356 19.5289 4.46622 20.4662C3.52888 21.4036 3.00159 22.6744 3 24V29H1V24C1.00212 22.1441 1.7403 20.3649 3.05259 19.0526C4.36489 17.7403 6.14413 17.0021 8 17H14C15.8559 17.0021 17.6351 17.7403 18.9474 19.0526C20.2597 20.3649 20.9979 22.1441 21 24V29Z" strokeWidth="0.4"/>
                <path d="M11 3C11.9889 3 12.9556 3.29324 13.7779 3.84265C14.6001 4.39206 15.241 5.17295 15.6194 6.08658C15.9978 7.00021 16.0969 8.00555 15.9039 8.97545C15.711 9.94536 15.2348 10.8363 14.5355 11.5355C13.8363 12.2348 12.9454 12.711 11.9755 12.9039C11.0055 13.0969 10.0002 12.9978 9.08659 12.6194C8.17296 12.241 7.39206 11.6001 6.84266 10.7779C6.29325 9.95561 6 8.98891 6 8C6 6.67392 6.52679 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3V3ZM11 1C9.61553 1 8.26216 1.41054 7.11101 2.17971C5.95987 2.94888 5.06266 4.04213 4.53285 5.32122C4.00303 6.6003 3.86441 8.00777 4.13451 9.36563C4.4046 10.7235 5.07129 11.9708 6.05026 12.9497C7.02922 13.9287 8.2765 14.5954 9.63437 14.8655C10.9922 15.1356 12.3997 14.997 13.6788 14.4672C14.9579 13.9373 16.0511 13.0401 16.8203 11.889C17.5895 10.7378 18 9.38447 18 8C18 6.14348 17.2625 4.36301 15.9497 3.05025C14.637 1.7375 12.8565 1 11 1V1Z" stroke="white" strokeWidth="0.4"/>
              </svg>
              <b className="theme2_nav_text"> Manage Administrator </b>
            </div>
            <div className="theme2_nav_item" onClick={() => this.navTo(2)} style={{color: this.state.color[2]?"#009CDE":"#333333"}}>
              <svg width="24" height="29" viewBox="0 0 32 38"  fill={this.state.color[2]?"#009CDE":"#333333"} xmlns="http://www.w3.org/2000/svg">
                <path stroke="white" strokeWidth="0.8" d="M7.234 1.28571L7 2.50521L5.5 10.9427V16.2857H5.641C5.84873 17.7356 6.35614 19.1263 7.1309 20.3692C7.90566 21.6122 8.93079 22.6802 10.141 23.5052C4.7905 25.8002 1 31.1102 1 37.2857H4C3.99757 35.4854 4.40088 33.7076 5.17994 32.0846C5.959 30.4615 7.0938 29.0349 8.5 27.9107V28.8947L8.9215 29.3642L14.9215 35.3642L16 36.3947L17.0785 35.3642L23.0785 29.3642L23.5 28.8947V27.9107C24.9062 29.0349 26.041 30.4615 26.8201 32.0846C27.5991 33.7076 28.0024 35.4854 28 37.2857H31C31 31.1102 27.2095 25.8017 21.859 23.5037C23.069 22.6789 24.0941 21.6111 24.8688 20.3684C25.6436 19.1257 26.1511 17.7353 26.359 16.2857H26.5V10.9412L25 2.50521L24.766 1.28571H7.234ZM9.766 4.28571H22.234L23.5 11.4572V13.2857H8.5V11.4572L9.766 4.28571ZM14.5 5.78571V7.28571H13V10.2857H14.5V11.7857H17.5V10.2857H19V7.28571H17.5V5.78571H14.5ZM8.641 16.2857H23.359C23.0126 17.9811 22.0908 19.5047 20.7496 20.5982C19.4084 21.6917 17.7304 22.2879 16 22.2857C14.2696 22.2879 12.5916 21.6917 11.2504 20.5982C9.90924 19.5047 8.98737 17.9811 8.641 16.2857ZM16 25.2857C17.5401 25.2776 19.0676 25.5643 20.5 26.1302V27.6302L16 32.1302L11.5 27.6302V26.1302C12.9324 25.5643 14.4599 25.2776 16 25.2857Z"/>
              </svg>
              <b className="theme2_nav_text"> Manage Staff </b>
            </div>
            <div className="theme2_nav_item" onClick={() => this.navTo(3)} style={{color: this.state.color[3]?"#009CDE":"#333333"}}>
              <svg width="24" height="28" viewBox="0 0 32 36" fill={this.state.color[3]?"#009CDE":"#333333"} xmlns="http://www.w3.org/2000/svg">
                <path stroke="white" strokeWidth="0.8" d="M9.57143 17.3393V14.6607C9.57143 14.2169 9.93123 13.8571 10.375 13.8571H13.0536C13.4973 13.8571 13.8571 14.2169 13.8571 14.6607V17.3393C13.8571 17.7831 13.4973 18.1429 13.0536 18.1429H10.375C9.93123 18.1429 9.57143 17.7831 9.57143 17.3393ZM18.9464 18.1429H21.625C22.0688 18.1429 22.4286 17.7831 22.4286 17.3393V14.6607C22.4286 14.2169 22.0688 13.8571 21.625 13.8571H18.9464C18.5027 13.8571 18.1429 14.2169 18.1429 14.6607V17.3393C18.1429 17.7831 18.5027 18.1429 18.9464 18.1429ZM13.8571 23.7679V21.0893C13.8571 20.6455 13.4973 20.2857 13.0536 20.2857H10.375C9.93123 20.2857 9.57143 20.6455 9.57143 21.0893V23.7679C9.57143 24.2116 9.93123 24.5714 10.375 24.5714H13.0536C13.4973 24.5714 13.8571 24.2116 13.8571 23.7679ZM18.9464 24.5714H21.625C22.0688 24.5714 22.4286 24.2116 22.4286 23.7679V21.0893C22.4286 20.6455 22.0688 20.2857 21.625 20.2857H18.9464C18.5027 20.2857 18.1429 20.6455 18.1429 21.0893V23.7679C18.1429 24.2116 18.5027 24.5714 18.9464 24.5714ZM31 32.875V35.2857H1V32.875C1 32.4312 1.3598 32.0714 1.80357 32.0714H3.10938V6.69431C3.10938 5.91638 3.82891 5.28571 4.71652 5.28571H10.6429V2.60714C10.6429 1.71953 11.3624 1 12.25 1H19.75C20.6376 1 21.3571 1.71953 21.3571 2.60714V5.28571H27.2835C28.1711 5.28571 28.8906 5.91638 28.8906 6.69431V32.0714H30.1964C30.6402 32.0714 31 32.4312 31 32.875ZM6.32366 32.0045H13.8571V27.5179C13.8571 27.0741 14.2169 26.7143 14.6607 26.7143H17.3393C17.7831 26.7143 18.1429 27.0741 18.1429 27.5179V32.0045H25.6763V8.5H21.3571V10.1071C21.3571 10.9948 20.6376 11.7143 19.75 11.7143H12.25C11.3624 11.7143 10.6429 10.9948 10.6429 10.1071V8.5H6.32366V32.0045ZM18.8125 5.28571H17.0714V3.54464C17.0714 3.43808 17.0291 3.33589 16.9537 3.26054C16.8784 3.18519 16.7762 3.14286 16.6696 3.14286H15.3304C15.2238 3.14286 15.1216 3.18519 15.0463 3.26054C14.9709 3.33589 14.9286 3.43808 14.9286 3.54464V5.28571H13.1875C13.0809 5.28571 12.9787 5.32805 12.9034 5.4034C12.828 5.47874 12.7857 5.58094 12.7857 5.6875V7.02679C12.7857 7.13335 12.828 7.23554 12.9034 7.31089C12.9787 7.38624 13.0809 7.42857 13.1875 7.42857H14.9286V9.16964C14.9286 9.2762 14.9709 9.3784 15.0463 9.45375C15.1216 9.5291 15.2238 9.57143 15.3304 9.57143H16.6696C16.7762 9.57143 16.8784 9.5291 16.9537 9.45375C17.0291 9.3784 17.0714 9.2762 17.0714 9.16964V7.42857H18.8125C18.9191 7.42857 19.0213 7.38624 19.0966 7.31089C19.172 7.23554 19.2143 7.13335 19.2143 7.02679V5.6875C19.2143 5.58094 19.172 5.47874 19.0966 5.4034C19.0213 5.32805 18.9191 5.28571 18.8125 5.28571Z"/>
              </svg>
              <b className="theme2_nav_text"> Manage Hospital </b>
            </div>
            <div className="theme2_nav_item" onClick={() => this.navTo(4)} style={{color: this.state.color[4]?"#009CDE":"#333333"}}>
              <svg width="20" height="22" viewBox="0 0 20 22" fill={this.state.color[4]?"#009CDE":"#333333"} xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V20H12.3077V18.4615H1.53846V1.53846H9.23077V6.15385H13.8462V7.69231H15.3846V5.07692L15.1538 4.84615L10.5385 0.230769L10.3077 0H0ZM10.7692 2.61538L12.7692 4.61538H10.7692V2.61538ZM3.07692 7.69231V9.23077H12.3077V7.69231H3.07692ZM16.1538 9.23077V10.7692C14.8462 11 13.8462 12.0769 13.8462 13.4615C13.8462 15 15 16.1538 16.5385 16.1538H17.3077C17.9231 16.1538 18.4615 16.6923 18.4615 17.3077C18.4615 17.9231 17.9231 18.4615 17.3077 18.4615H14.6154V20H16.1538V21.5385H17.6923V20C19 19.7692 20 18.6923 20 17.3077C20 15.7692 18.8462 14.6154 17.3077 14.6154H16.5385C15.9231 14.6154 15.3846 14.0769 15.3846 13.4615C15.3846 12.8462 15.9231 12.3077 16.5385 12.3077H19.2308V10.7692H17.6923V9.23077H16.1538ZM3.07692 11.5385V13.0769H8.46154V11.5385H3.07692ZM10 11.5385V13.0769H12.3077V11.5385H10ZM3.07692 14.6154V16.1538H8.46154V14.6154H3.07692ZM10 14.6154V16.1538H12.3077V14.6154H10Z"/>
              </svg>
              <b className="theme2_nav_text"> {'Invoices & Payments'} </b>
            </div>
            <div className="theme2_nav_item" onClick={() => this.navTo(5)} style={{color: this.state.color[5]?"#009CDE":"#333333"}}>
              <svg width="22" height="23" viewBox="0 0 22 23" fill={this.state.color[5]?"#009CDE":"#333333"} xmlns="http://www.w3.org/2000/svg">
                <path d="M4.33333 22.4445C3.44928 22.4445 2.60143 22.0933 1.97631 21.4681C1.35119 20.843 1 19.9952 1 19.1111V3.55556C1 2.67151 1.35119 1.82366 1.97631 1.19854C2.60143 0.573419 3.44928 0.222229 4.33333 0.222229H13.4133C14.2969 0.222712 15.1442 0.574003 15.7689 1.1989L20.0244 5.45223C20.6492 6.07739 21.0001 6.92507 21 7.8089V19.1111C21 19.9952 20.6488 20.843 20.0237 21.4681C19.3986 22.0933 18.5507 22.4445 17.6667 22.4445H4.33333ZM3.22222 19.1111C3.22222 19.4058 3.33929 19.6884 3.54766 19.8968C3.75603 20.1052 4.03865 20.2222 4.33333 20.2222H17.6667C17.9614 20.2222 18.244 20.1052 18.4523 19.8968C18.6607 19.6884 18.7778 19.4058 18.7778 19.1111V9.11112H15.4444C14.5604 9.11112 13.7125 8.75993 13.0874 8.13481C12.4623 7.50969 12.1111 6.66184 12.1111 5.77778V2.44445H4.33333C4.03865 2.44445 3.75603 2.56151 3.54766 2.76989C3.33929 2.97826 3.22222 3.26088 3.22222 3.55556V19.1111ZM15.4444 6.8889H18.3178L14.3333 2.90445V5.77778C14.3333 6.07247 14.4504 6.35508 14.6588 6.56346C14.8671 6.77183 15.1498 6.8889 15.4444 6.8889ZM15.4444 12.4445C15.4444 12.1498 15.3274 11.8672 15.119 11.6588C14.9106 11.4504 14.628 11.3333 14.3333 11.3333C14.0386 11.3333 13.756 11.4504 13.5477 11.6588C13.3393 11.8672 13.2222 12.1498 13.2222 12.4445V16.8889C13.2222 17.1836 13.3393 17.4662 13.5477 17.6746C13.756 17.8829 14.0386 18 14.3333 18C14.628 18 14.9106 17.8829 15.119 17.6746C15.3274 17.4662 15.4444 17.1836 15.4444 16.8889V12.4445ZM12.1111 14.6667C12.1111 14.372 11.994 14.0894 11.7857 13.881C11.5773 13.6726 11.2947 13.5556 11 13.5556C10.7053 13.5556 10.4227 13.6726 10.2143 13.881C10.006 14.0894 9.88889 14.372 9.88889 14.6667V16.8889C9.88889 17.1836 10.006 17.4662 10.2143 17.6746C10.4227 17.8829 10.7053 18 11 18C11.2947 18 11.5773 17.8829 11.7857 17.6746C11.994 17.4662 12.1111 17.1836 12.1111 16.8889V14.6667ZM7.66667 15.7778C7.37198 15.7778 7.08937 15.8948 6.88099 16.1032C6.67262 16.3116 6.55556 16.5942 6.55556 16.8889C6.55556 17.1836 6.67262 17.4662 6.88099 17.6746C7.08937 17.8829 7.37198 18 7.66667 18H7.67778C7.97246 18 8.25508 17.8829 8.46345 17.6746C8.67183 17.4662 8.78889 17.1836 8.78889 16.8889C8.78889 16.5942 8.67183 16.3116 8.46345 16.1032C8.25508 15.8948 7.97246 15.7778 7.67778 15.7778H7.66667Z" stroke="white" strokeWidth="0.4"/>
              </svg>
              <b className="theme2_nav_text"> Reports </b>
            </div>
            <div className="theme2_nav_item" onClick={() => this.navTo(6)} style={{color: this.state.color[6]?"#009CDE":"#333333"}}>
              <svg width="24" height="24" viewBox="0 0 32 32" fill={this.state.color[6]?"#009CDE":"#333333"} xmlns="http://www.w3.org/2000/svg">
                  <path stroke="white" strokeWidth="0.8" d="M27.6667 1H4.33333C2.5 1 1 2.5 1 4.33333V27.6667C1 29.5 2.5 31 4.33333 31H27.6667C29.5 31 31 29.5 31 27.6667V4.33333C31 2.5 29.5 1 27.6667 1ZM4.33333 27.6667V4.33333H14.3333V27.6667H4.33333ZM27.6667 27.6667H17.6667V16H27.6667V27.6667ZM27.6667 12.6667H17.6667V4.33333H27.6667V12.6667Z"/>
              </svg>
              <b className="theme2_nav_text" > CMS </b>
            </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);