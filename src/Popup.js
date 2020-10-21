import React from 'react';
import Navigation from './Navigation.js'
import DataEmployees from './DataEmployees.js'
import AddEmployee from './AddEmployee.js'

export default function Popup() {
  function HeaderPopup() {
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

  function BodyPopup() {
    return (
      <div className="modal-body style-3">
        <div className="popup-content  style-3">
          <div className="user-popup-form setting-popup-wrap">
            <Navigation />
            <Content />
          </div>
        </div>
      </div>
    );
  }

  function Content() {
    return (
      <div className="setting-popup-content mt-2">
        <div className="form-group">
          <label className="font-size-18 invisible">商品タイプ</label>
          <div className="block-feedback background-feedback magin-top-5">
            表示順の上位にある役職が優先して社員詳細や社員選択時のサジェストの役職名に表示されます。
                </div>
          <div className="position-relative">
            <AddEmployee />
            <DataEmployees />
          </div>
          <div>

          </div>
        </div>
      </div>
    );
  }

  function FooterPopup() {
    return (
      <div className="user-popup-form-bottom">
        <a className="btn-button button-pale disable  color-999">変更前に戻す</a>
        <a className="button-blue button-form-register ">保存</a>
      </div>
    );
  }

  return (
    <>
      <div className="modal popup-esr popup-esr4 user-popup-page popup-align-right show" id="popup-esr" aria-hidden="true">
        <div className="modal-dialog form-popup">
          <div className="modal-content">
            <HeaderPopup />
            <BodyPopup />
            <FooterPopup />
          </div>
        </div>
      </div>
      <div className="modal-backdrop show right-48" />
    </>
  );
}
