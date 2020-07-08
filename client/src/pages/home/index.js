import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import v from '../../assets/video/a.mp4';
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
                        poster="/assets/poster.png"
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
                        <MilestoneToggler title ="module 2">
                        <Module/>
                        </MilestoneToggler>
                        <MilestoneToggler title="Module 3">
                        <Module/>
                        </MilestoneToggler>

                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
