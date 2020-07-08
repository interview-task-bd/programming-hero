import React, { Fragment } from 'react'
import {Route} from 'react-router-dom';
import config from './config';

const Routes =()=> {
    return(
        <Fragment>
            {config.map((route,index)=><Route key={index} {...route}/>)}
        </Fragment>
    )
}

export default Routes;