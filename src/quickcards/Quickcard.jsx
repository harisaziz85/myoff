import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faTable, faChartPie, faStickyNote, faClipboardList, faUpload } from '@fortawesome/free-solid-svg-icons';
import './quickcard.css';

const Quickcard = () => {
  const cards = [
    { 
      icon: faFileAlt, 
      hoverColor: 'rgb(139 237 235 / var(--tw-text-opacity, 1))', 
      hoverShadow: '0 0 17px rgba(139, 237, 235, 0.6)', 
      text: 'Document' 
    },
    { 
      icon: faTable, 
      hoverColor: 'rgb(74 222 128 / var(--tw-text-opacity, 1))', 
      hoverShadow: '0 0 17px rgba(74, 222, 128, 0.6)', 
      text: 'Spreadsheet' 
    },
    { 
      icon: faChartPie, 
      hoverColor: 'rgb(192 132 252 / var(--tw-text-opacity, 1))', 
      hoverShadow: '0 0 17px rgba(192, 132, 252, 0.6)', 
      text: 'Presentation' 
    },
    { 
      icon: faStickyNote, 
      hoverColor: 'rgb(250 204 21 / var(--tw-text-opacity, 1))', 
      hoverShadow: '0 0 17px rgba(250, 204, 21, 0.6)', 
      text: 'Whiteboard' 
    },
    { 
      icon: faClipboardList, 
      hoverColor: 'rgb(244 114 182 / var(--tw-text-opacity, 1))', 
      hoverShadow: '0 0 17px rgba(244, 114, 182, 0.6)', 
      text: 'Form' 
    },
    { 
      icon: faUpload, 
      hoverColor: 'rgb(129 140 248 / var(--tw-text-opacity, 1))', 
      hoverShadow: '0 0 17px rgba(129, 140, 248, 0.6)', 
      text: 'Upload' 
    },
  ];

  return (
    <div className="container1">
      <p className='interbold text-white head'>Quick Access</p>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ '--hover-color': card.hoverColor, '--hover-shadow': card.hoverShadow }}
          >
            <FontAwesomeIcon icon={card.icon} className="card-icon text-lg mb-1" />
            <h3 className="card-text">{card.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quickcard;