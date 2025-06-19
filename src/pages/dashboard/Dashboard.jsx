import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown, faFilter, faFileAlt, faTable, faShareAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Topbar from '../../topbar/Topbar';
import Quickcard from '../../quickcards/Quickcard';
import './dasboard.css';
import Sidebar from '../../sidebar/Sidebar';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const recentFiles = [
    { 
      icon: faFileAlt, 
      title: 'Project Proposal', 
      lastEdited: '2 hours ago', 
      shared: 'Shared with 2 people', 
      bgColor: 'rgba(139, 237, 235, 0.3)', 
      iconColor: '#8BEDEB' 
    },
    { 
      icon: faTable, 
      title: 'Q1 Financials', 
      lastEdited: 'yesterday', 
      shared: 'Only you', 
      bgColor: 'rgba(20, 83, 45, 0.3)', 
      iconColor: '#4ADE80' 
    },
  ];

  return (
    <div className="dash">
      <Topbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="d-flex">
        <div className={`sbar ${isSidebarOpen ? 'sbar-active' : ''}`}>
          <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </div>
        <div className="quich p-4">
          <Quickcard />
          <div className="d-flex justify-content-between my-4">
            <p className="interbold recent">Recent Files</p>
            <div>
              <button className="sort-button">
                <FontAwesomeIcon icon={faSortAmountDown} className="me-2 text-xs" /> Sort
              </button>
              <button className="sort-button">
                <FontAwesomeIcon icon={faFilter} className="me-2 text-xs" /> Filter
              </button>
            </div>
          </div>
          <div className="recent-files-grid">
            {recentFiles.map((file, index) => (
              <div key={index} className="recent-card p-3" style={{ '--card-color': file.iconColor }}>
                <div className='d-flex justify-content-between cardtop'>
                  <div className="recent-card-icon" style={{ backgroundColor: file.bgColor }}>
                    <FontAwesomeIcon icon={file.icon} style={{ color: file.iconColor }} />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faShareAlt} className='me-2' />
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </div>
                </div>
                <div className="recent-card-content">
                  <h4 className="recent-card-title intermedium">{file.title}</h4>
                  <p className="recent-card-edited">Last edited {file.lastEdited}</p>
                  <div className='d-flex align-items-center'>
                    <div className='name2 me-1'>HA</div>
                    <p className="recent-card-shared">{file.shared}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;