import React from 'react';
// import data from './data.json';
import { getData } from './redux/DataActions'
import { insertData } from './redux/DataActions'
import { connect } from "react-redux";

const DataEmployees = (props) => {
  props.getData();

  function insertData1() {
    props.insertData();
  }

  function DataItem(props) {
    return (
      <tr>
        <td>
          <img src="./content/images/setting/ic-detail.svg" alt="" />
          <span className="ml-2">{props.roll}</span>
        </td>
        <td className="text-center">
          <a className="icon-primary icon-edit disable" />
          <a className="icon-primary icon-erase disable" />
        </td>
      </tr>
    );
  }

  return (
    <>
      <button className="button-primary" onClick={insertData1}>Insert</button>
      <table className="table-default" id="tableEmployee">
        <thead>
          <tr>
            <td>役職</td>
            <td width="88px" className="text-center">操作</td>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((e) => {
              return <DataItem key={e.id} roll={e.roll} />
            })
          }
        </tbody>
      </table>
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
    insertData: () => dispatch(insertData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataEmployees);
