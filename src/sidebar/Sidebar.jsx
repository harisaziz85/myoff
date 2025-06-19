import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHome, faFolder, faFileAlt, faTable, faChartPie, faStickyNote, faUsers, faCog, faTimes, faCompass } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-header d-md-none">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faCompass} className="text-custom-teal text-xl me-2" />
          <span className="intersemibold">MyOffice</span>
        </div>
        <button className="close-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faTimes} className="text-white text-xl" />
        </button>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item active">
          <FontAwesomeIcon icon={faHome} className="mr-3 text-gray-400" />
          <span>Dashboard</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faFolder} className="mr-3 textfolder" />
          <span>Folders</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faFileAlt} className="mr-3 textfolder" />
          <span>Documents</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faTable} className="mr-3 text-green-400" />
          <span>Spreadsheets</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faChartPie} className="mr-3 text-purple-400" />
          <span>Presentations</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faStickyNote} className="mr-3 text-yellow-400" />
          <span>Whiteboards</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faUsers} className="mr-3 text-pink-400" />
          <span>Collaborators</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faCog} className="mr-3 text-gray-400" />
          <span>Settings</span>
        </li>
      </ul>
      <div className="sidebar-user">
        <div className='sb1'>
          <div className="user-avatar" style={{ backgroundColor: '#1E40AF' }}>HA</div>
          <div className="user-info">
            <span className="user-name intermedium">User Name</span>
            <span className="user-email">user@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;