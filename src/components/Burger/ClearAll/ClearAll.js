import React from 'react';
import classes from './ClearAll.module.css';

const clearAll = (props) => {
  return  <button disabled={props.disabled} onClick={props.click} className={classes.Clear}>CLEAR ALL</button>;
};

export default clearAll;