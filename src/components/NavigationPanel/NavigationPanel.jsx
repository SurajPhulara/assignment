import React, { useState } from 'react'
import { admin_meds, dashboard, desktop, library, navbarIcon, note } from '../../assets'
import "./NavigationPanel.css"
import { NavLink, useLocation } from 'react-router-dom';

const NavigationPanel = () => {

    const [isPanelOpen, setPanelOpen] = useState(false);

    const togglePanel = () => {
        setPanelOpen(!isPanelOpen);
    };

    const closePanel = () => {
        setPanelOpen(false);
    };

    const location = useLocation();
    const currentPath = location.pathname.substring(1);

    return (
        <div className={`header ${isPanelOpen ? 'panel-open' : ''}`}>
            <div className="header_left">
                <img className='navbar_icon' src={navbarIcon} alt="" onClick={togglePanel} />
                <div className='header_heading'>
                    {/* {currentPath} */}
                    <div className="">
                        Assessment
                    </div>
                        <svg className="subheader" xmlns="http://www.w3.org/2000/svg" width="2" height="46" viewBox="0 0 2 46" fill="none">
                            <path d="M1 0V46" stroke="#DADCE0" />
                        </svg>
                    <div className="header_subheading subheader">
                        My Assissment
                    </div>
                </div>
            </div>
            <div className="header_right">
                <img src={desktop} alt="" />
            </div>
            <div className={`navigation_side_panel ${isPanelOpen ? 'open' : ''}`}>
                <div className="side_panel_header">
                    <div className="">Menu</div>
                    <svg onClick={closePanel} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M16.2426 17.6568L12 13.4142L7.75736 17.6568L6.34315 16.2426L10.5858 12L6.34315 7.75732L7.75736 6.3431L12 10.5857L16.2426 6.3431L17.6569 7.75732L13.4142 12L17.6569 16.2426L16.2426 17.6568Z" fill="#1C4980" />
                    </svg>
                </div>
                <NavLink to="/Dashboard" className="side_panel_item" onClick={closePanel}>
                    <img src={dashboard} alt="" />
                    Dashboard
                </NavLink>
                <NavLink to="/Assessment" className="side_panel_item" onClick={closePanel}>
                    <img src={note} alt="" />
                    Assessment
                </NavLink>
                <NavLink to="/Library" className="side_panel_item" onClick={closePanel}>
                    <img src={library} alt="" />
                    My Library
                </NavLink>

                <div className="divider">
                    <svg xmlns="http://www.w3.org/2000/svg" width="275" height="2" viewBox="0 0 275 2" fill="none">
                        <path d="M0 1H275" stroke="#BACBD5" strokeDasharray="2 2" />
                    </svg>
                </div>

                <div className="round_status">
                    <div className="round_status_data">
                        <img src={admin_meds} alt="" />
                        Round Status
                    </div>
                    <div className="admin">
                        Admin
                    </div>
                </div>
            </div>
            <div
                className={`overlay ${isPanelOpen ? 'active_panel' : ''}`}
                onClick={closePanel}
            />
        </div>
    )
}

export default NavigationPanel