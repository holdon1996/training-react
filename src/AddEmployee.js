import React, { useState } from "react";
import ToolTip from './ToolTip.js'

export default function AddEmployee(props) {
  const [active, setActive] = useState(false)
  const btnClass = 'button-primary btn-padding' + `${active ? ' active' : ''}`;

  function handleClick() {
    !active ? setActive(true) : setActive(false);
  }

  return (
    <>
      <a className={btnClass} onClick={handleClick}>追加</a>
      {active && <ToolTip setActive={setActive} createEmployee={props.createEmployee} data={props.data}/>}
    </>
  )
}
