import React from 'react';
import "./jobPosting.css";
import search from '../../../assets/images/search.svg';
import { callApi } from '../../../../action';

class JobPosting extends React.Component {
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
                    <div className="col-md-5 col-sm-12 col-12 top_NSearch">
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
                    <div className="col-md-2 col-sm-12 col-12 top_F">
                        <div className="row">
                            <div className="col-md-1 col-sm-1 col-1 top_Filter_SVG">
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
                    <div className="col-md-2 col-sm-12 col-12 top_P" onClick={()=>this.handleApplicant("Post New Job")}>
                        Post New job
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
                                <div className="col-md-1 col-sm-1 col-1">Actions</div>
                            </div>
                            <div className="applicantsContent" style={{marginTop:"15px"}}>
                                <div className="applicantsEach">
                                    <div className="row applicantsEachContent">
                                        <div className="col-md-4 col-sm-4 col-4 applicantClick">Registered Nurse (RN)</div>
                                        <div className="col-md-2 col-sm-2 col-2">Full Time</div>
                                        <div className="col-md-1 col-sm-1 col-1">2</div>
                                        <div className="col-md-4 col-sm-4 col-4">Roseville,  CA</div>
                                        <div className="col-md-1 col-sm-1 col-1">
                                            <svg className="jobEdit" width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.8924 0L26.0003 4.10786L22.8687 7.24078L18.7608 3.13293L21.8924 0ZM6.84668 19.1536H10.9545L20.9325 9.17558L16.8247 5.06773L6.84668 15.0457V19.1536Z" fill="#333333"/>
                                                <path d="M21.9086 23.2614H7.06278C7.02717 23.2614 6.9902 23.2751 6.9546 23.2751C6.90942 23.2751 6.86423 23.2628 6.81767 23.2614H2.73857V4.09141H12.1141L14.8526 1.35284H2.73857C1.22825 1.35284 0 2.57972 0 4.09141V23.2614C0 24.7731 1.22825 26 2.73857 26H21.9086C22.6349 26 23.3315 25.7115 23.845 25.1979C24.3586 24.6843 24.6471 23.9877 24.6471 23.2614V11.3924L21.9086 14.131V23.2614Z" fill="#333333"/>
                                            </svg>
                                            <svg className="jobDelete" width="15" height="15" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23 4.5H19V2C19 0.896875 18.1031 0 17 0H7C5.89687 0 5 0.896875 5 2V4.5H1C0.446875 4.5 0 4.94688 0 5.5V6.5C0 6.6375 0.1125 6.75 0.25 6.75H2.1375L2.90938 23.0938C2.95938 24.1594 3.84063 25 4.90625 25H19.0938C20.1625 25 21.0406 24.1625 21.0906 23.0938L21.8625 6.75H23.75C23.8875 6.75 24 6.6375 24 6.5V5.5C24 4.94688 23.5531 4.5 23 4.5ZM16.75 4.5H7.25V2.25H16.75V4.5Z" fill="#333333"/>
                                            </svg>
                                        </div>
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

export default JobPosting
