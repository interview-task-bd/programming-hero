import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import v from '../../assets/video/a.mp4';
import { Player,BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";
import Module from '../../components/Acordion';


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
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
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
                        <Module title="module 1">
                            djksjdk
                        </Module>
                        <Module title ="module 2">
                          jdlkjsljdlsds
                        </Module>
                        <Module title="Module 3">
                           dkskdsk;dks;kd;s
                        </Module>

                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
