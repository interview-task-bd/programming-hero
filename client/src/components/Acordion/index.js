import React,{useContext} from 'react'
import {Accordion,Card,Button,AccordionContext,useAccordionToggle} from 'react-bootstrap';
import {IconButton} from '@material-ui/core'
import {FaPlus,FaMinus} from 'react-icons/fa';
import { IconContext } from "react-icons";
import styles from './styles.module.scss';

const ModuleToggler=({eventKey, callback })=>{
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );
  const isCurrentEventKey = currentEventKey === eventKey;

    return(
    <button
      className={`${styles.Toggle} `}
      onClick={decoratedOnClick}
    >
    {isCurrentEventKey ? <IconContext.Provider value={{className:styles.IconColor}}><FaMinus/></IconContext.Provider> 
    :<IconContext.Provider value={{className:styles.IconColor}}><FaPlus/></IconContext.Provider>}
    </button>
    )
}

const Module=({
    title,
    children
})=>{
    return(
        <Accordion>
        <Card>
             <div className="row p-3">
               <div className="col-6 d-flex justify-content-start align-items-center">{title}</div>  
               <div className="col-6 d-flex justify-content-end align-items-center">
                   <ModuleToggler eventKey="0"/>
               </div>  
             </div>
            <Accordion.Collapse eventKey="0">
             <Card.Body>{children && children}</Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
    )
}

export default Module;