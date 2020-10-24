import React from 'react'
import AddEmployee from './AddEmployee'
import DataItem from './DataItem'

export default function Content(props) {
  return (
    <div className="setting-popup-content mt-2">
      <div className="form-group">
        <label className="font-size-18 invisible">商品タイプ</label>
        <div className="block-feedback background-feedback magin-top-5">
          表示順の上位にある役職が優先して社員詳細や社員選択時のサジェストの役職名に表示されます。
          </div>
        <div className="position-relative">
          <AddEmployee createEmployee={props.createEmployee} data={props.data} />
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
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
