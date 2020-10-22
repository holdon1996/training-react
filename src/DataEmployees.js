import React, { useState, useEffect } from 'react';
import AddEmployee from './AddEmployee.js'

export default function DataEmployees(props) {
  const [data, setData] = useState([]);

  if (props.resetData) {
    setData(props.data);
  }

  useEffect(() => {
    console.log(props.data)
    if (props.data && props.data.length > 0) {
      setData(props.data);
    }
  }, [props.data])

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

  const createEmployee = dataInsert => {
    console.log('createEmployee : dataInsert');
    console.log(dataInsert);
    setData([...data, dataInsert]);
    props.setRunUndo(true);
  }

  return (
    <div className="position-relative">
      <AddEmployee createEmployee={createEmployee} data={data} />
      <table className="table-default" id="tableEmployee">
        <thead>
          <tr>
            <td>役職</td>
            <td width="88px" className="text-center">操作</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e) => {
              return <DataItem key={e.id} roll={e.roll} />
            })
          }
        </tbody>
      </table>
    </div>
  );
}
