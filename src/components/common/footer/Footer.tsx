import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//Import Icons
import { Icon } from "ts-react-feather-icons";

//Import Images


const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer footer-bar">
        <div className="footer-py-30">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm={3}>
                <div className="text-sm-start">
                  <Link to="/" className="logo-footer text-light">
                    Mj Attar Shop
                  </Link>
                </div>
              </Col>
              <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="text-center">
                  <p className="mb-0">
                    © {new Date().getFullYear()} Mj Attar Shop. Design with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by{" "}
                    <Link
                      to="//themesbrand.com//"
                      target="_blank"
                      rel="noreferrer"
                      className="text-reset"
                    >
                      MJ
                    </Link>
                    .
                  </p>
                </div>
              </Col>

              <Col sm={3} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled social-icon foot-social-icon text-sm-end mb-0">
                  <li className="list-inline-item mb-0">
                    <Link to={{pathname:"https://www.facebook.com/apexmustafamj"}} className="rounded" target="_blank">
                      <Icon
                        name="facebook"
                        
                      />
                    </Link>
                  </li>{" "}
                  <li className="list-inline-item mb-0">
                    <Link to={{pathname:"https://www.instagram.com/mohammad_mustafa_mj/"}} className="rounded" target="_blank">
                      <Icon
                        name="instagram"
                       
                      />
                    </Link>
                  </li>{" "}
                  <li className="list-inline-item mb-0">
                    <Link to={{pathname:"https://twitter.com/Apex_Mj"}} className="rounded" target="_blank">
                      <Icon
                        name="twitter"
                       
                      />
                    </Link>
                  </li>{" "}
                  <li className="list-inline-item mb-0">
                    <Link to={{pathname:"https://www.linkedin.com/in/mustafa-jamadar-51b722232/"}} className="rounded" target="_blank">
                      <Icon
                        name="linkedin"
                        
                      />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
