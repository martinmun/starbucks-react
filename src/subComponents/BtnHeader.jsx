import React from 'react'

const BtnHeader = (props) => {
  return (
    <a className="header__nav-link" href={props.href}>
    {props.content}
    </a>
  );
};

export default BtnHeader;
