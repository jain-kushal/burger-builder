import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import components
import Aux from '../Aux/Aux';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from '../../components/Navigation/Toolbar/Toolsbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Checkout from '../../containers/Checkout/Checkout';
import Orders from '../../containers/Orders/Order';
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
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </main>
        FOOTER
      </Aux>
    );
  };
}

export default Layout;
