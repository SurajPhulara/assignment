import React, { useState } from 'react'
import './Assessment.css';
import { addIcon, bar_chart, bar_chart_active, candidateIcon, desktop, equalstoIcon, filterIcon, navbarIcon, purpose, searchIcon, webIcon } from '../../assets';
import AssessmentCard from '../../components/AssignmentCard/AssessmentCard';
import AddAssessmentCard from '../../components/AddAssessmentCard/AddAssessmentCard';
// import AssessmentCard from '../../components/AssessmentCard/AssessmentCard';

const Assessment = () => {
    const [assesmentStats, setAssessmentStats] = useState(false);
    const [pageload, setPageload] = useState(false)
    return (
        <div className="assessment">

            {/* header section */}
            <div className="page_header">
                <div className="page_header_left">
                    My Assessments
                </div>
                <div className="page_header_right">
                    Unstop Assessments
                </div>
            </div>

            {/* page main body */}
            <div className="page_body">

                {/* assessment stats */}
                <div className={`assessment_stats_heading ${assesmentStats ? 'show' : 'hide'} ${pageload ? '' : 'hidden'}`}>Assessment Overview</div>
                < div className={`assessment_stats_container  ${assesmentStats ? 'show' : 'hide'} ${pageload ? '' : 'hidden'}`}>
                    <div className="stats_item total_assessment">
                        <div className="stats_name">Total Assessment</div>
                        <div className="stat_data">
                            <img src={equalstoIcon} alt="" />
                            <div className="">34</div>
                        </div>
                    </div>
                    <div className="stats_item total_purpose">
                        <div className="stats_name">Total Purpose</div>
                        <div className="stat_data">
                            <img src={purpose} alt="" />
                            <div className="">11</div>
                        </div>
                    </div>
                    <div className="stats_item candidates">
                        <div className="stats_name">Candidates</div>
                        <div className="stat_data">
                            <img src={candidateIcon} alt="" />
                            <div className="stat_data_content">
                                <div className="stat_data_content_item">
                                    <div className="stats_number">
                                        <div className="">
                                            11,145
                                        </div>
                                        <div className="stats_extra_num">
                                            +89
                                        </div>
                                    </div>
                                    <div className="stat_data_text">
                                        Total Candidates
                                    </div>
                                </div>
                                <div className="stat_data_content_item">
                                    <div className="stats_number">
                                        <div className="">
                                            11,145
                                        </div>
                                        <div className="stats_extra_num">
                                            +89
                                        </div>
                                    </div>
                                    <div className="stat_data_text">
                                        Who attemped
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stats_item candidate_scores">
                        <div className="stats_name">Candidates Sources</div>
                        <div className="stat_data">
                            <img src={webIcon} alt="" />
                            <div className="stat_data_content">
                                <div className="stat_data_content_item">
                                    <div className="stats_number">
                                        <div className="">
                                            11,145
                                        </div>
                                        <div className="stats_extra_num">
                                            +89
                                        </div>
                                    </div>
                                    <div className="stat_data_text">
                                        E-mail
                                    </div>
                                </div>
                                <div className="stat_data_content_item">
                                    <div className="stats_number">
                                        <div className="">
                                            11,145
                                        </div>
                                        <div className="stats_extra_num">
                                            +89
                                        </div>
                                    </div>
                                    <div className="stat_data_text">
                                        Social Share
                                    </div>
                                </div>
                                <div className="stat_data_content_item">
                                    <div className="stats_number">
                                        <div className="">
                                            11,145
                                        </div>
                                        <div className="stats_extra_num">
                                            +89
                                        </div>
                                    </div>
                                    <div className="stat_data_text">
                                        Unique Link
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* page body header */}
                <div className="body_header">
                    <div className="body_header_left">
                        My Assessments
                    </div>
                    <div className="body_header_right">
                        <img src={searchIcon} alt="search Icon" />
                        <img src={filterIcon} alt="filter Icon" />
                        <img src={assesmentStats ? bar_chart_active : bar_chart} alt="toggle Stats Icon" onClick={() => { setAssessmentStats(!assesmentStats); setPageload(true) }} />
                    </div>
                </div>



                {/* page body content */}

                {/* add new card */}
                <div className="assessment_card_list">
                <AddAssessmentCard></AddAssessmentCard>

                {/* assessment cards */}
                <AssessmentCard name="Math Assessment" date="20 Apr 23" duration="00" questions="00" sharecount="1"></AssessmentCard>
                <AssessmentCard name="Math Assessment" date="20 Apr 23" duration="00" questions="00" sharecount="324"></AssessmentCard>
                <AssessmentCard name="Math Assessment" date="20 Apr 23" duration="00" questions="00" sharecount="324"></AssessmentCard>
                <AssessmentCard name="Math Assessment" date="20 Apr 23" duration="00" questions="00" sharecount="324"></AssessmentCard>
                <AssessmentCard name="Math Assessment" date="20 Apr 23" duration="00" questions="00" sharecount="324"></AssessmentCard>
                <AssessmentCard name="Math Assessment" date="20 Apr 23" duration="00" questions="00" sharecount="324"></AssessmentCard>
                <AssessmentCard name="Math Assessment" date="20 Apr 23" duration="00" questions="00" sharecount="32,4090"></AssessmentCard>
                </div>
            </div>
        </div >
    )
}

export default Assessment