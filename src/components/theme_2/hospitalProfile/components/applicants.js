import React from 'react';
import "./applicants.css";
import search from '../../../assets/images/search.svg';
import { callApi } from '../../../../action';

class Applicants extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dropShow: false,
            sortingkey: false,
            filter: false,
            searchKind: "Name",
            sorting: "Sorting",
            filterKey: "Filter",
            applicant: false,
            jobs: []
        }
    }
    componentWillMount= async()=> {
        console.log(localStorage.getItem('token'));
        var Authorization = 'Bearer '.concat(window.localStorage.getItem('token'));
        var res = await callApi("GET", "/v1/LHS/job/getList?sort=desc&skip=0", Authorization);
        
        if(res.status===404){
            this.setState({jobs:[]});
        }
        else{
            this.setState({jobs:res});
        }
        console.log(res);
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
    handleApplicant=(jobTitle)=>{
        this.props.applicant(jobTitle);
    }
    render() {
        return (
            <div>
                <div className="top_NSF">
                    <div className="col-md-6 col-sm-12 col-12 top_NSearch">
                        <div className="col-md-3 col-sm-3 col-3 name">
                            <select className="form-select selectname" arial-label="Default select example">
                                <option value="Name" selected>Name</option>
                                <option value="Education">Education</option>
                                <option value="Certification">Certification</option>
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
                            <option value="availability">Availability</option>
                            <option value="desc">Name(A - Z)</option>
                            <option value="desc">Title(A - Z)</option>
                            <option value="rating">Rating(A - Z)</option>
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
                                    <option value="1">Medical setting</option>
                                    <option value="2">Nursing license</option>
                                    <option value="3">Liability Insurance</option>
                                    <option value="4">Weekend Availability</option>
                                    <option value="4">Part TIme/Full time/both</option>
                                    <option value="4">permanent/temp position</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overFlowX">
                    <div className="applicants_main">
                        <div className="applicants_header">
                            <div className="row headText">
                                <div className="col-md-4 col-sm-4 col-4">Job Title</div>
                                <div className="col-md-2 col-sm-2 col-2">Job Type</div>
                                <div className="col-md-1 col-sm-1 col-1">Positions</div>
                                <div className="col-md-4 col-sm-4 col-4">Healthcare Instututuin Location</div>
                                <div className="col-md-1 col-sm-1 col-1">Applicants</div>
                            </div>
                            <div className="applicantsContent" style={{marginTop:"15px"}}>
                                <div className="applicantsEach">
                                    <div className="row applicantsEachContent">
                                        <div className="col-md-4 col-sm-4 col-4 applicantClick" onClick={()=>this.handleApplicant("Registered Nurse (RN)")}>Registered Nurse (RN)</div>
                                        <div className="col-md-2 col-sm-2 col-2">Full Time</div>
                                        <div className="col-md-1 col-sm-1 col-1">2</div>
                                        <div className="col-md-4 col-sm-4 col-4">Roseville,  CA</div>
                                        <div className="col-md-1 col-sm-1 col-1"><p className="applicantBadge">2</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="applicantsContent" style={{marginTop:"15px"}}>
                                <div className="applicantsEach">
                                    <div className="row applicantsEachContent">
                                        <div className="col-md-4 col-sm-4 col-4 applicantClick" onClick={()=>this.handleApplicant("Registered Nurse (RN)")}>Registered Nurse (RN)</div>
                                        <div className="col-md-2 col-sm-2 col-2">Full Time</div>
                                        <div className="col-md-1 col-sm-1 col-1">2</div>
                                        <div className="col-md-4 col-sm-4 col-4">Roseville,  CA</div>
                                        <div className="col-md-1 col-sm-1 col-1"><p className="applicantBadge">2</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="applicantsContent" style={{marginTop:"15px"}}>
                                <div className="applicantsEach">
                                    <div className="row applicantsEachContent">
                                        <div className="col-md-4 col-sm-4 col-4 applicantClick" onClick={()=>this.handleApplicant("Registered Nurse (RN)")}>Registered Nurse (RN)</div>
                                        <div className="col-md-2 col-sm-2 col-2">Full Time</div>
                                        <div className="col-md-1 col-sm-1 col-1">2</div>
                                        <div className="col-md-4 col-sm-4 col-4">Roseville,  CA</div>
                                        <div className="col-md-1 col-sm-1 col-1"><p className="applicantBadge">2</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="applicantsContent" style={{marginTop:"15px"}}>
                                <div className="applicantsEach">
                                    <div className="row applicantsEachContent">
                                        <div className="col-md-4 col-sm-4 col-4 applicantClick" onClick={()=>this.handleApplicant("Registered Nurse (RN)")}>Registered Nurse (RN)</div>
                                        <div className="col-md-2 col-sm-2 col-2">Full Time</div>
                                        <div className="col-md-1 col-sm-1 col-1">2</div>
                                        <div className="col-md-4 col-sm-4 col-4">Roseville,  CA</div>
                                        <div className="col-md-1 col-sm-1 col-1"><p className="applicantBadge">2</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Applicants
