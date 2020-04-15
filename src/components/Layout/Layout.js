import React from 'react';

// import components
import Aux from '../../hoc/Aux';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

// import styles
import './Layout.css';

const layout = (props) => {
  return (
    <Aux>
      Toolbar SideDrawer Backdrop
      <BurgerBuilder />
      <main className="layoutMain">{props.children}</main>
    </Aux>
  );
};

export default layout;
