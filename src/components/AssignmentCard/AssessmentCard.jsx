import React from 'react'
import "./AssessmentCard.css"
import { assessmentImg, clock, share1, share2, threedots } from '../../assets'

const AssessmentCard = (props) => {
    return (
        <div className='assessment_card'>
            <div className="card_header">
                <div className="card_header_left">
                    <img src={assessmentImg} alt="" />
                    <div className="card_header_left_body">
                        <div className="card_heading">
                            {props.name}
                        </div>
                        <div className="card_header_details">
                            Job
                            <div className="card_assessment_time">
                                <div className="stroke">|</div>
                                <img src={clock} alt="" />
                                {props.date}
                            </div>
                        </div>
                    </div>
                </div>
                <img src={threedots} alt="" />
            </div>
            <div className="card_details">
                <div className="card_details_left">

                    <div className="assessment_duration">
                        <div className="assessment_detail_number">
                            {props.duration}
                        </div>
                        <div className="assessment_detail_text">
                            Duration
                        </div>
                    </div>
                    <div className="assessment_questions">
                        <div className="assessment_detail_number">
                            {props.questions}
                        </div>
                        <div className="assessment_detail_text">
                            Questions
                        </div>
                    </div>
                </div>
                <div className="card_details_right">
                    <div className="share_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_25805_178)">
                                <path d="M8.00026 3.28492L6.11464 5.17054L7.05745 6.11335L8.94307 4.22773C9.72089 3.44991 10.9937 3.44991 11.7715 4.22773C12.5493 5.00555 12.5493 6.27834 11.7715 7.05616L9.88588 8.94177L10.8287 9.88458L12.7143 7.99897C14.0154 6.69789 14.0154 4.586 12.7143 3.28492C11.4132 1.98384 9.30134 1.98384 8.00026 3.28492ZM8.94307 9.88458L7.05745 11.7702C6.27963 12.548 5.00684 12.548 4.22902 11.7702C3.45121 10.9924 3.45121 9.71959 4.22902 8.94177L6.11464 7.05616L5.17183 6.11335L3.28621 7.99896C1.98514 9.30004 1.98514 11.4119 3.28621 12.713C4.58729 14.0141 6.69918 14.0141 8.00026 12.713L9.88588 10.8274L8.94307 9.88458ZM5.64324 9.41318L9.41447 5.64194L10.3573 6.58475L6.58605 10.356L5.64324 9.41318Z" fill="#1C4980" />
                            </g>
                            <defs>
                                <clipPath id="clip0_25805_178">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Share
                    </div>
                    {
                        (props.sharecount <= 1)?(
                            <img src={share1} alt="" />
                        ):(
                            <div className="card_share_info">
                                <img src={share2} alt="" />
                                <div className="assessment_detail_number assessment_detail_number2">
                                    +{props.sharecount}
                                </div>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default AssessmentCard