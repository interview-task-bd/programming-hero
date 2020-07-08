import React from 'react'
import {Route} from 'react-router-dom';
import config from './config';

const Routes =()=> config.map((route,index)=><Route key={index} {...route}/>)

export default Routes;