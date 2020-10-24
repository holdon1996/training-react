import React from 'react'

export default function DataItem(props) {
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
