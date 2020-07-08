import React from "react";
import styles from "./styles.module.scss";
import { Navbar} from "react-bootstrap";
import avatar from '../../assets/avatar.jpg'
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <Navbar className={styles.Navbar}>
      <Navbar.Brand className="ml-5" as={Link} to="#home">Complete Web Development course with Jhonkar Mahabub</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            <img style={{height:60,width:60, borderRadius:'50%'}} src={avatar} alt="profile-pic"/>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Nav;
