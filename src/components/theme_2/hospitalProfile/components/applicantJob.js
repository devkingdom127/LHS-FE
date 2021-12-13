import React from 'react';
import { connect } from 'react-redux';
import "./findStaff.css";
import "./applicantJob.css";
import search from '../../../assets/images/search.svg';
import avatar from '../../../assets/images/avatar.png';
import badge from '../../../assets/images/badge.png';
import ApplicantMember from './applicantMember';
import { callApi, setSession, removeSession } from '../../../../action';
import { Avatar } from '@material-ui/core';

const mapStateToProps = state => {
    return {
      auth: state.auth
    }};
  
  const mapDispatchToProps = dispatch => ({
  });
class ApplicantJob extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dropShow: false,
            sortingkey: false,
            filter: false,
            searchKind: "Name",
            sorting: "Sorting",
            filterKey: "Filter",
            avatar:"",
            showView:"none",
            member: false,
            memberName: "",
        }
    }
    componentWillMount= async()=> {
        console.log(localStorage.getItem('token'));
        var token = "Bearer " + localStorage.getItem('token');
        var res = await callApi("GET", "/v1/LHS/hospital/generalJobList/?skip=10&sort=asc", token);
        console.log(res);
        this.initState(this.props);
    }
    componentWillReceiveProps = (newProps) => {
        this.initState(newProps);
    }
    initState = (props) => {
        console.log(props.auth);
        this.setState({
            avatar: props.auth.avatar!==''?props.auth.avatar:avatar,
        })
    }
    handleSymbole=()=>{
        this.setState({dropShow:!this.state.dropShow})
    }
    handleSearchKind=(searchKind)=>{
        this.setState({searchKind:searchKind});
        this.setState({dropShow:false})
    }
    handleSymboleSort=()=>{
        this.setState({sortingkey:!this.state.sortingkey})
    }
    handleSorting=(sort)=>{
        this.setState({sorting:sort});
        this.setState({sortingkey:false})
    }
    handleSymboleFilter=()=>{
        this.setState({filter:!this.state.filter})
    }
    handleFilter=(filter)=>{
        this.setState({filterKey:filter});
        this.setState({filter:false})
    }
    openReview=()=>{
        this.setState({showView: "block"});
    }
    closeReview=()=>{
        this.setState({showView: "none"});
    }
    goToMember=(name)=>{
        this.setState({member:true, memberName:name});
        this.props.titleChange(name);
    }

    render() {
        return (
            <div>
                {!this.state.member?
                <div>
                    <div className="top_NSF">
                        <div className="col-md-6 col-sm-12 col-12 top_NSearch">
                            <div className="col-md-3 col-sm-3 col-3 name">
                                <select className="form-select selectname" arial-label="Default select example">
                                    <option selected>Name</option>
                                    <option value="1">Name1</option>
                                    <option value="2">Name2</option>
                                    <option value="3">Name3</option>
                                    <option value="4">Name4</option>
                                </select>
                            </div>
                            <div className="col-md-9 col-sm-9 col-9 search">
                                <img className="theme2_header_search_img searchMark" alt="search.svg" src={search}/>
                                <input className="theme2_header_search searchText" placeholder="Search" type="text" value={this.state.search} onChange={this.search}/>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-12 col-12 top_S">
                            <select className="form-select selectsorting selectSortAfter" arial-label="Default select example">
                                <option selected>Sorting</option>
                                <option value="1">Sorting1</option>
                                <option value="2">Sorting2</option>
                                <option value="3">Sorting3</option>
                                <option value="4">Sorting4</option>
                            </select>
                        </div>
                        <div className="col-md-3 col-sm-12 col-12 top_F">
                            <div className="row">
                                <div className="col-md-1 col-sm-1 col-1">
                                    <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1L1 6L11 11L21 6L11 1Z" stroke="#333333" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1 16L11 21L21 16" stroke="#333333" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1 10.9999L11 15.9999L21 10.9999" stroke="#333333" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className="col-md-10 col-sm-10 col-10">
                                    <select className="form-select selectsorting" arial-label="Default select example">
                                        <option selected>Filter</option>
                                        <option value="1">Filter1</option>
                                        <option value="2">Filter2</option>
                                        <option value="3">Filter3</option>
                                        <option value="4">Filter4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="applicantDetail">
                        <p className="applicantApp">Applicants</p>
                        <p className="applicantNum">10 of 20</p>
                    </div>
                    <div className="staffAll">
                        <div className="staffOne row">
                            <div className="col-md-7 col-sm-7 col-7 staffOneData">
                                <div className="row">
                                    <div className="avatar_img col-md-3 col-sm-3 col-4">
                                        <img width="100%" src={this.state.avatar} alt="avatar.png" style={{borderRadius: '50%'}}/>
                                        <img src={badge} alt="badge.png" className="avatar_badge"/>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-4 marginLeft">
                                        <p className="username" onClick={()=>this.goToMember("Olivia Rodrigo")}>Olivia Rodrigo</p>
                                        <p className="nurse">Registered Nurse (RN)</p>
                                        <p className="available">Availability: Immediately</p>
                                        <div className="position">
                                            <svg width="13" height="16" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 9.892 15.598 11.13 14.5 12.5L8 20L1.5 12.5C0.402 11.13 0 9.892 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#333333" fill-opacity="0.7"/>
                                            </svg>
                                            <p className="position_text">Los Angeles, CA</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-4 available_BTNs marginLeft">
                                        <div className="available_BTN">
                                            <p className="BTN_text">Weekend availability</p>
                                            <svg className="available_svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7H0ZM6.60053 9.996L10.6307 4.95787L9.90267 4.37547L6.46613 8.66973L4.032 6.6416L3.43467 7.3584L6.60053 9.99693V9.996Z" fill="#6FCF97"/>
                                            </svg>

                                        </div>
                                        <div className="available_BTN BTN">
                                            <p className="BTN_text">Nursing License</p>
                                            <svg className="available_svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7H0ZM6.60053 9.996L10.6307 4.95787L9.90267 4.37547L6.46613 8.66973L4.032 6.6416L3.43467 7.3584L6.60053 9.99693V9.996Z" fill="#6FCF97"/>
                                            </svg>
                                        </div>
                                        <div className="available_BTN BTN">
                                            <p className="BTN_text">Liability Insurance</p>
                                            <svg className="available_svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7H0ZM6.60053 9.996L10.6307 4.95787L9.90267 4.37547L6.46613 8.66973L4.032 6.6416L3.43467 7.3584L6.60053 9.99693V9.996Z" fill="#6FCF97"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 staffOneData">
                                <div className="review_info">
                                    <div className="middle_line"></div>
                                    <svg width="33" height="31.6" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40.0185 13.9063L27.621 12.1045L22.079 0.869159C21.9277 0.561542 21.6786 0.312518 21.371 0.161151C20.5995 -0.219709 19.662 0.0976744 19.2763 0.869159L13.7343 12.1045L1.33684 13.9063C0.995041 13.9551 0.682541 14.1162 0.443283 14.3604C0.154034 14.6577 -0.005356 15.0576 0.000137431 15.4724C0.00563086 15.8871 0.175558 16.2828 0.47258 16.5723L9.44231 25.3174L7.32317 37.666C7.27347 37.9533 7.30526 38.2487 7.41492 38.5188C7.52459 38.7889 7.70774 39.0229 7.94362 39.1942C8.17949 39.3656 8.45865 39.4674 8.74943 39.4881C9.04022 39.5088 9.331 39.4477 9.58879 39.3115L20.6777 33.4815L31.7665 39.3115C32.0693 39.4727 32.4208 39.5264 32.7577 39.4678C33.6073 39.3213 34.1786 38.5156 34.0322 37.666L31.913 25.3174L40.8827 16.5723C41.1269 16.333 41.288 16.0205 41.3368 15.6787C41.4687 14.8242 40.873 14.0332 40.0185 13.9063Z" fill="#009CDE"/>
                                    </svg>
                                    <p className="marks">4.5</p>
                                    <p className="review">320 Review</p>
                                </div>

                            </div>
                            <div className="col-md-2 col-sm-2 staffOneData">
                                <div className="review_info">
                                    <div className="middle_line"></div>
                                    <div className="reviewBTN" onClick={this.openReview}>REVIEW</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w3-modal viewModal" id="modal3" style={{display: this.state.showView}}>
                        <div  className="w3-modal-content ssu2_modal2">
                            <div className="w3-container">
                                <div className="ssu2_modal1_text1">
                                    <p className="reviewStaff">Raju</p>
                                    <p className="reviewEach">20 Review</p>
                                    <p className="reviewMark reviewMarkhidden">5</p>
                                    <svg className='reviewSvg reviewSvghidden' width="33" height="31.6" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40.0185 13.9063L27.621 12.1045L22.079 0.869159C21.9277 0.561542 21.6786 0.312518 21.371 0.161151C20.5995 -0.219709 19.662 0.0976744 19.2763 0.869159L13.7343 12.1045L1.33684 13.9063C0.995041 13.9551 0.682541 14.1162 0.443283 14.3604C0.154034 14.6577 -0.005356 15.0576 0.000137431 15.4724C0.00563086 15.8871 0.175558 16.2828 0.47258 16.5723L9.44231 25.3174L7.32317 37.666C7.27347 37.9533 7.30526 38.2487 7.41492 38.5188C7.52459 38.7889 7.70774 39.0229 7.94362 39.1942C8.17949 39.3656 8.45865 39.4674 8.74943 39.4881C9.04022 39.5088 9.331 39.4477 9.58879 39.3115L20.6777 33.4815L31.7665 39.3115C32.0693 39.4727 32.4208 39.5264 32.7577 39.4678C33.6073 39.3213 34.1786 38.5156 34.0322 37.666L31.913 25.3174L40.8827 16.5723C41.1269 16.333 41.288 16.0205 41.3368 15.6787C41.4687 14.8242 40.873 14.0332 40.0185 13.9063Z" fill="#009CDE"/>
                                    </svg>
                                </div>
                                <div className="mainView">
                                    <div className="ViewOne">
                                        <div className="HospitalData">
                                            <img width="72px" src={avatar} alt="avatar" style={{borderRadius: '50%'}}/>
                                            <div className="HospitalInfo">
                                                <p className="hospitalName">Rady Children's Hospital</p>
                                                <p className="hospitalCity">San Francisco, California</p>
                                            </div>
                                            <div className="HospitalMark">
                                                <svg className='reviewSvg' width="33" height="31.6" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M40.0185 13.9063L27.621 12.1045L22.079 0.869159C21.9277 0.561542 21.6786 0.312518 21.371 0.161151C20.5995 -0.219709 19.662 0.0976744 19.2763 0.869159L13.7343 12.1045L1.33684 13.9063C0.995041 13.9551 0.682541 14.1162 0.443283 14.3604C0.154034 14.6577 -0.005356 15.0576 0.000137431 15.4724C0.00563086 15.8871 0.175558 16.2828 0.47258 16.5723L9.44231 25.3174L7.32317 37.666C7.27347 37.9533 7.30526 38.2487 7.41492 38.5188C7.52459 38.7889 7.70774 39.0229 7.94362 39.1942C8.17949 39.3656 8.45865 39.4674 8.74943 39.4881C9.04022 39.5088 9.331 39.4477 9.58879 39.3115L20.6777 33.4815L31.7665 39.3115C32.0693 39.4727 32.4208 39.5264 32.7577 39.4678C33.6073 39.3213 34.1786 38.5156 34.0322 37.666L31.913 25.3174L40.8827 16.5723C41.1269 16.333 41.288 16.0205 41.3368 15.6787C41.4687 14.8242 40.873 14.0332 40.0185 13.9063Z" fill="#009CDE"/>
                                                </svg>
                                                <p className="reviewMark">4.5</p>
                                            </div>
                                        </div>
                                        <div className="reviewContent">
                                            <p>They treated me very professionally and were very courteous. The entire job experience was worthwhile. Looking forward to work for them again.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ssu_bottom">
                                    <button className="ssu2_modal1_button2 closeReview" onClick={this.closeReview}> CANCEL </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <ApplicantMember memberName={this.state.memberName}  />
                }
                
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantJob);
