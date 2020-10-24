import React, { useState } from 'react';

export default function HeaderPopup() {
  return (
    <div className="modal-header">
      <div className="left">
        <div className="popup-button-back"><a className="icon-small-primary icon-return-small" /><span className="text"><img className="icon-calendar" src="./content/images/setting/ic-person-yellow.svg" alt="" />社員設定</span></div>
      </div>
      <div className="right">
        <a className="icon-small-primary icon-close-up-small line" />
      </div>
    </div>
  );
}
