import React from 'react';
import burgerLogo from '../../assets/images/burgerLogo.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="Burger-logo" />
  </div>
);

export default logo;
