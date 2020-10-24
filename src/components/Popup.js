import React, { useState, useEffect } from 'react'
import { getData } from '../redux/DataActions'
import { connect } from "react-redux"
import store from '../redux/store'
import HeaderPopup from './HeaderPopup'
import BodyPopup from './BodyPopup'
import FooterPopup from './FooterPopup'

const Popup = (props) => {
  const [data, setData] = useState([]);
  const [canUndo, setCanUndo] = useState(false);
  const [resetData, setResetData] = useState(false);

  useEffect(() => {
    props.getData();
    setData(store.getState().data);
  }, [])

  useEffect(() => {
    if (resetData) {
      setData(props.data);
      setCanUndo(false);
      setResetData(false);
    }
  }, [resetData])

  const createEmployee = dataInsert => {
    setData([...data, dataInsert]);
    setCanUndo(true);
  }

  function onHandleUndo(e) {
    if (!canUndo) {
      e.preventDefault();
    } else {
      setResetData(true);
    }
  }

  return (
    <>
      <div className="modal popup-esr popup-esr4 user-popup-page popup-align-right show" id="popup-esr" aria-hidden="true">
        <div className="modal-dialog form-popup">
          <div className="modal-content">
            <HeaderPopup />
            <BodyPopup data={data} createEmployee={createEmployee} />
            <FooterPopup canUndo={canUndo} onHandleUndo={onHandleUndo} />
          </div>
        </div>
      </div>
      <div className="modal-backdrop show right-48" />
    </>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);

