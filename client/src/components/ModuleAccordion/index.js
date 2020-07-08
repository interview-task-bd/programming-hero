import React,{useContext} from 'react'
import {Accordion,Card,AccordionContext,useAccordionToggle} from 'react-bootstrap';
import {FaChevronUp,FaChevronDown} from 'react-icons/fa';
import { IconContext } from "react-icons";
import styles from './styles.module.scss';

const MilestoneToggler=({eventKey, callback })=>{
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );
  const isCurrentEventKey = currentEventKey === eventKey;

    return(
    <span
      className={`${styles.Toggle}`}
      onClick={decoratedOnClick}
    >
    {isCurrentEventKey ? <IconContext.Provider value={{className:styles.IconColor}}><FaChevronDown/></IconContext.Provider> 
    :<IconContext.Provider value={{className:styles.IconColor}}><FaChevronUp/></IconContext.Provider>}
    </span>
    )
}

const Module=({
    title,
    children
})=>{
    return(
        <Accordion>
        <Card>
             <div style={{backgroundColor:"#eee"}} className="row p-3">
               <div className="col-6 d-flex justify-content-start align-items-center">{title}</div>  
               <div className="col-6 d-flex justify-content-end align-items-center">
                   <MilestoneToggler eventKey="0"/>
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