import React, { useState } from 'react';
import "./AddAssessmentCard.css";
import { addIcon, closeIcon } from '../../assets';

const AddAssessmentCard = () => {
    const [isBoxOpen, setBoxOpen] = useState(false);
    const [skills, setSkills] = useState(["UI/UX and Design", "Web Development", "UI/UX and Design", "No of Question", "Web Development"]);

    const toggleBox = () => {
        setBoxOpen(!isBoxOpen);
    };

    const closeBox = () => {
        setBoxOpen(false);
    };

    const handleSkillDelete = (index) => {
        const newSkills = [...skills];
        newSkills.splice(index, 1);
        setSkills(newSkills);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const skillInput = event.target.querySelector('#name-of-assessment');
        const newSkill = skillInput.value;

        if (newSkill.trim() !== '') {
            // Add the new skill to the skills state
            setSkills([...skills, newSkill]);

            // Clear the input field
            skillInput.value = '';
        }
    };
    return (
        <div className="add_assessment_card">
            <div className="card_head">
                <img src={addIcon} alt="add Icon" onClick={toggleBox} />
                New Assessment
            </div>
            <div className="card_body">
                From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!
            </div>

                <div className={`sliding_box ${isBoxOpen ? 'open' : ''}`}>
            <div className="sliding_box_container">
                    {/* Content of the sliding box */}
                    <div className="assessment_card_header">
                        Create new assessment
                        <img onClick={closeBox} src={closeIcon} alt="" />
                    </div>
                    <div className="assessment_card_content">
                        <div className="input-group">
                            <label htmlFor="name-of-assessment">Name of assessment</label>
                            <input type="text" id="name-of-assessment" placeholder='Type Here'></input>
                        </div>

                        <div className="input-group">
                            <label htmlFor="purpose">Purpose of the test is</label>
                            <select id="purpose" defaultValue="0">
                                <option value="0">Select</option>
                                <option value="1">Purpose 1</option>
                                <option value="2">Purpose 2</option>
                            </select>

                        </div>

                        <div className="input-group">
                            <label htmlFor="description">Description</label>
                            <select id="description" defaultValue="0">
                                <option value="0">Select</option>
                                <option value="1">Description 1</option>
                                <option value="2">Description 2</option>
                            </select>
                        </div>

                        <div className="input-group-skills">
                            <label htmlFor="description">Skills</label>
                            <div className='field'>

                                {
                                    skills.map((skill, i) => (
                                        <div className="skill" key={i}>
                                            <div className="">
                                                {skill}
                                            </div>
                                            <svg onClick={() => handleSkillDelete(i)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M16.2426 17.6568L12 13.4142L7.75736 17.6568L6.34315 16.2426L10.5858 12L6.34315 7.75732L7.75736 6.3431L12 10.5857L16.2426 6.3431L17.6569 7.75732L13.4142 12L17.6569 16.2426L16.2426 17.6568Z" fill="#1C4980" />
                                            </svg>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="skill_input ">
                                <form onSubmit={(event) => handleSubmit(event)}>
                                    <input type="text" id="name-of-assessment" placeholder='Type Here'></input>
                                </form>
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="duration-of-assessment">Duration of assessment</label>
                            <input type="text" id="duration-of-assessment" placeholder='HH:MM:SS'></input>
                        </div>
                    </div>
                    <div className="assessment_card_footer">
                        <button>Save</button>
                    </div>
                </div>
            </div>
            {isBoxOpen && <div className="overlay2 active2" onClick={closeBox} />}
        </div>
    );
};

export default AddAssessmentCard;
