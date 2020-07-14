import React, { Component } from 'react';

// import components
import Aux from '../Aux/Aux';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from '../../components/Navigation/Toolbar/Toolsbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

// import styles
import classes from './Layout.module.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false,
    };
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };

  render = () => {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.layoutMain}>
          <BurgerBuilder />
        </main>
        FOOTER
      </Aux>
    );
  };
}

export default Layout;
