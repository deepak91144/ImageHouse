import axios from "axios";
import React, { useState } from "react";
import logo from "./Images_Bazaar_Logo.png";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  Button,
  Col,
  Collapse,
  Container,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";

const NavBar = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnChange = async (e) => {
    const term = e.target.value;

    const searchedImages = await axios.get(
      `https://pixabay.com/api/?key=25458082-78b4f03a57edf4ceed37fb701&q=${term}&image_type=photo&per_page=100`
    );

    props.images(searchedImages.data.hits);
  };
  const handleChange = async (e) => {
    const browseTerm = e.target.value;
    const searchedImages = await axios.get(
      `https://pixabay.com/api/?key=25458082-78b4f03a57edf4ceed37fb701&q=${browseTerm}&image_type=photo&per_page=100`
    );
    props.images(searchedImages.data.hits);
    handleClose();
  };
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-start">
          <div>
            <input
              onChange={handleChange}
              type="radio"
              id="html"
              name="fav_language"
              value="Car"
            />
            <label className="m-2" for="html">
              Car
            </label>
            <br />
            <input
              onChange={handleChange}
              type="radio"
              id="css"
              name="fav_language"
              value="Bike"
            />
            <label className="m-2" for="css">
              Bike
            </label>
            <br />
            <input
              onChange={handleChange}
              type="radio"
              id="javascript"
              name="fav_language"
              value="Anime"
            />
            <label className="m-2" for="javascript">
              Anime
            </label>
            <br />
            <input
              onChange={handleChange}
              type="radio"
              id="javascript"
              name="fav_language"
              value="Boys"
            />
            <label className="m-2" for="javascript">
              Boys
            </label>
            <br />
            <input
              onChange={handleChange}
              type="radio"
              id="javascript"
              name="fav_language"
              value="Girls"
            />
            <label className="m-2" for="javascript">
              Girls
            </label>
            <br />
            <input
              onChange={handleChange}
              type="radio"
              id="javascript"
              name="fav_language"
              value="Computers"
            />
            <label className="m-2" for="javascript">
              Computers
            </label>
            <br />
            <input
              onChange={handleChange}
              type="radio"
              id="javascript"
              name="fav_language"
              value="Mobile"
            />
            <label className="m-2" for="javascript">
              Mobile
            </label>
            <br />
            <input
              onChange={handleChange}
              type="radio"
              id="javascript"
              name="fav_language"
              value="Flower"
            />
            <label className="m-2" for="javascript">
              Flower
            </label>
            <br />
            <input
              onChange={handleChange}
              type="radio"
              id="javascript"
              name="fav_language"
              value="Fish"
            />
            <label className="m-2" for="javascript">
              Fish
            </label>
            <br />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Container fluid>
          <Row className=" w-100 mt-3">
            <Col md={6} sm={6} xs={6} className="">
              <a className="text-white menu" href="#" onClick={handleShow}>
                <MenuOpenIcon classname="menuIcon" className="text-white" />
                Browse Category
              </a>
            </Col>
            <Col md={6} sm={6} xs={6} className="justify-content-center ">
              <Navbar.Brand className="display-1 text-white justify-content-center ">
                Images Bazar
              </Navbar.Brand>
            </Col>
            <Col md={12} className="mt-3 mx-auto">
              {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
              <Navbar
                // id="navbarScroll"
                className="justify-content-center"
              >
                <input
                  className="w-50 search"
                  type="text"
                  width="100%"
                  onChange={handleOnChange}
                  name="image"
                  placeholder="search the wolrd's largest collection of indian image"
                />
              </Navbar>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
