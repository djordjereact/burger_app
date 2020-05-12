import React, { useState } from 'react';
import { connect } from 'react-redux';
import Auxiliary from '../Auxilliary/Auxiliary';
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigaton/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigaton/SideDrawer/SideDrawer';

const Layout = props => {
    const [ sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const  sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    };

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible)
    };

        return(
            <Auxiliary>
                <Toolbar
                    isAuth={props.isAuthenticated}
                    drawerToggleClicked={sideDrawerToggleHandler}/>
                <SideDrawer
                    isAuth={props.isAuthenticated}
                    open={sideDrawerIsVisible}
                    closed={sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Auxiliary>
        )
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

export default connect(mapStateToProps)(Layout);