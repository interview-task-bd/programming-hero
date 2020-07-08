import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import v from '../../assets/video/a.mp4';
import cover from '../../assets/thumb.png';
import { Player,BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";
import MilestoneToggler from '../../components/MilestoneAccordion';
import Module from '../../components/ModuleAccordion';


const Home =()=>{
    return(
        <Container fluid={true} className={styles.Home}>
            <Row>
                <Col md={8}>
                    <Jumbotron className="mt-5">
                    <Player
                        fluid={true}
                        playsInline
                        poster={cover}
                        src={v}
                     >
                         <BigPlayButton position="center" />
                     </Player>
                     <div className="mt-5 text-right">
                        <Button className={`${styles.BtnPre} mr-5`}>Previews</Button>
                        <Button className={`${styles.BtnNext}`}>next</Button>
                     </div>
                    </Jumbotron>
                </Col>
                <Col md={4}>
                    <Jumbotron className="mt-5">
                        <MilestoneToggler title="Milestone 1">
                            <Module title="module 1" />
                        </MilestoneToggler>
                        <MilestoneToggler title ="Milestone 2">
                        <Module title="Module 2"/>
                        </MilestoneToggler>
                        <MilestoneToggler title="Milestone 3">
                        <Module title="module 3"/>
                        </MilestoneToggler>

                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
