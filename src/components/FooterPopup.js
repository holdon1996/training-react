import React from 'react'

export default function FooterPopup(props) {
  let btnClass = 'btn-button button-pale color-999';
  if (!props.canUndo) btnClass += ' disable';
  return (
    <div className="user-popup-form-bottom">
      <a className={btnClass} onClick={props.onHandleUndo}>変更前に戻す</a>
      <a className="button-blue button-form-register ">保存</a>
    </div>
  );
}
