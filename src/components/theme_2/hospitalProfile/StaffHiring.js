import React from 'react';
import "./staffHiring.css";
import FindStaff from './components/findStaff';
import Applicants from './components/applicants';
import ApplicantJob from './components/applicantJob';
import JobPosting from './components/jobPosting';
import JobPost from "./components/jobPost";
import Header from "../components/header";

class StaffHiring extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeClass:"find",
            applicant: false,
            jobPost: false,
            applicantjobTile: "",
            cometChat: localStorage.getItem('token')
        }
    }
    handleMenu=(val)=>{
        this.setState({activeClass:val});
    }
    handleApplicant=(jobTitle)=>{
        if( jobTitle === "Post New Job" )
            this.setState({applicant:true, jobPost:true, applicantjobTile:jobTitle});
        else
            this.setState({applicant:true, jobPost:false, applicantjobTile:jobTitle});
    }
    handleTitle=(userName)=>{
        this.setState({applicantjobTile:userName});
    }
    goBackStaff=()=>{
        this.setState({applicant:false, applicantjobTile:""});
    }
    render() {
        return (
            <div> 
                <Header page="Staff Hiring" />
                {this.state.applicant?
                    <div className="applicantJobTitle">
                        <svg width="20" height="12" style={{marginTop:5+"px"}} viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1L0.999999 11L11 21" stroke="#009CDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p style={{color:"#009CDE", cursor:"pointer"}} onClick={this.goBackStaff}>Staff Hiring</p> &nbsp; / &nbsp;  {this.state.applicantjobTile}</div>
                    :""
                }
                <div className="theme2_main_container">
                    <div className="theme2">
                        <div className="staff_main">
                            {!this.state.applicant?
                                <div>
                                    <div className="staff_menu">
                                        <div className={this.state.activeClass=="find"?"col-md-4 col-sm-4 col-4 RSBtn activeMenu":"col-md-4 col-sm-4 col-4 RSBtn"} onClick={()=>this.handleMenu('find')}>Find Staff</div>
                                        <div className={this.state.activeClass=="applicants"?"col-md-4 col-sm-4 RSBtn col-4 activeMenu":"col-md-4 col-sm-4 col-4 RSBtn"} onClick={()=>this.handleMenu('applicants')}>APPLICANTS</div>
                                        <div className={this.state.activeClass=="job"?"col-md-4 col-sm-4 col-4 RSBtn activeMenu":"col-md-4 col-sm-4 col-4 RSBtn"} onClick={()=>this.handleMenu('job')}>JOB POSTING</div>
                                    </div>
                                    <div className="line"></div>
                                    {
                                        this.state.activeClass=="find"?<FindStaff />:
                                        this.state.activeClass=="applicants"?<Applicants applicant={this.handleApplicant} />:
                                        <JobPosting applicant={this.handleApplicant} />
                                    }
                                </div>
                            :this.state.jobPost?
                                <JobPost />
                                :
                                <ApplicantJob titleChange={this.handleTitle} />
                            }                    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StaffHiring
