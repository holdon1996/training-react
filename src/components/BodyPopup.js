import React from 'react'
import Navigation from './Navigation'
import Content from './Content'

export default function BodyPopup(props) {
  return (
    <div className="modal-body style-3">
      <div className="popup-content  style-3">
        <div className="user-popup-form setting-popup-wrap">
          <Navigation />
          <Content data={props.data} createEmployee={props.createEmployee}/>
        </div>
      </div>
    </div>
  );
}
