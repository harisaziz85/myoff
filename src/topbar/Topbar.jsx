import React from 'react';
import './topbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCompass, faQuestionCircle, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const Topbar = ({ toggleSidebar }) => {
  return (
    <div>
      <div className="d-flex">
        <div className='topbarhead intersemibold d-flex align-items-center'>
          <div className="d-flex align-items-center">
            <button className="toggle-button d-md-none me-1" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} className="text-white text-xl" />
            </button>
            <FontAwesomeIcon icon={faCompass} className="text-custom-teal text-xl" />
            <span className='intersemibold ms-2'>MyOffice</span>
          </div>
          <div className="search-icon-container d-md-none">
            <FontAwesomeIcon icon={faSearch} className="search-icon-mobile text-custom-teal text-xl" />
          </div>
        </div>
        <div className='topsec d-flex align-items-center'>
          <div className='sech d-flex justify-content-center'>
            <div className='input1'>
              <FontAwesomeIcon icon={faSearch} className="text-custom-teal text-xl me-2" />
              <input type="text" className='searchfield' placeholder='Search files....' name="" id="" />
            </div>
          </div>
          <div className='ico1 d-flex justify-content-between'>
            <FontAwesomeIcon icon={faBell} className="text-xl icon11" />
            <FontAwesomeIcon icon={faQuestionCircle} className="text-xl icon11" />
            <div className='name1'>
              HA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;