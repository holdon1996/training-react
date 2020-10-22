import React, { useState } from 'react';
import { insertData } from './redux/DataActions'
import { connect } from "react-redux";
import store from './redux/store';
import _ from 'lodash';

const ToolTip = ({ setActive, data, createEmployee }) => {
  const [multipleLanguages, setMultipleLanguages] = useState(false);
  const [insertedData, setInsertedData] = useState({});

  function toggleLanguages() {
    setMultipleLanguages(!multipleLanguages);
  }

  const handleChangeInput = (e) => {
    // let currentDataStore = store.getState().data;
    let lastDataEmployee = _.last(data);
    let id = lastDataEmployee['id'] + 1;
    let roll = e.target.value;
    let status = "true";
    setInsertedData({'id': id, 'roll': roll, 'active': status});
  }

  function createTempEmployee() {
    createEmployee(insertedData)
    setActive(false);
  }

  const ButtonToggleLanguages = ({ onClick, show }) => {
    const btnText = show == 'false' ? '他言語を表示' : '他言語を非表示';
    return (
      <div>
        <a className="button-primary btn-padding w100 mt-2 text-center" onClick={onClick}>{btnText}</a>
      </div>
    );
  }

  const languageElements = () => {
    if (!multipleLanguages) {
      return (
        <>
          <div>
            <input type="text" className="input-normal mt-2" id="roll-jp" onChange={handleChangeInput} placeholder="役職名を入力" />
          </div>
          <ButtonToggleLanguages onClick={toggleLanguages} show="false" />
        </>
      );
  
    } else {
      return (
        <>
          <div className="d-flex">
            <input type="text" className="input-normal mt-2 w70" onChange={handleChangeInput} id="roll-jp" placeholder="役職名を入力" />
            <label className="text-input">日本語</label>
          </div>
  
          <div className="d-flex">
            <input type="text" className="input-normal mt-2 w70" id="roll-us" placeholder="役職名を入力" />
            <label className="text-input">English(US)</label>
          </div>
  
          <div className="d-flex">
            <input type="text" className="input-normal mt-2 w70" id="roll-cn" placeholder="役職名を入力" />
            <label className="text-input">中文（簡体）</label>
          </div>
  
          <ButtonToggleLanguages onClick={toggleLanguages} show="true" />
        </>
      );
    }
  }
  
  return (
    <div className="table-tooltip-box">
      <div className="table-tooltip-box-body">
        <div>
          <label className="title font-weight-bold">
            役職追加
          </label>
        </div>
        <div>
          <label className="title mt-4 font-weight-bold">
            役職名
          </label>
        </div>
        {languageElements()}
        <div>
          <label className="title font-weight-bold">
            登録
                </label>
          <div className="wrap-check w100 mt-2">
            <div className="mt-0">
              <p className="radio-item normal d-inline mr-3">
                <input type="radio" id="active" name="radio-group" defaultChecked />
                <label htmlFor="radio1">使用可</label>
              </p>
              <p className="radio-item normal d-inline">
                <input type="radio" id="inactive" name="radio-group" />
                <label htmlFor="radio2">使用不可</label>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="table-tooltip-box-footer">
        <a className="button-cancel" onClick={() => setActive(false)}>キャンセル</a> <a className="button-blue" onClick={createTempEmployee}>追加</a>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    insertData: (insertedData) => dispatch(insertData(insertedData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolTip);
