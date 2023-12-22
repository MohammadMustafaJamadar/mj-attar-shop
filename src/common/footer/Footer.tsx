import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//Import Icons
import { Icon } from "ts-react-feather-icons";

//Import Images
import logoLight from "../../assets/images/logo-light.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer footer-bar">
        <div className="footer-py-30">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm={3}>
                <div className="text-sm-start">
                  <Link to="#" className="logo-footer">
                    <img src={logoLight} height="24" alt="" />
                  </Link>
                </div>
              </Col>
              <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="text-center">
                  <p className="mb-0">
                    © {new Date().getFullYear()} Landrick. Design with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by{" "}
                    <Link
                      to="//themesbrand.com//"
                      target="_blank"
                      rel="noreferrer"
                      className="text-reset"
                    >
                      Themesbrand
                    </Link>
                    .
                  </p>
                </div>
              </Col>

              <Col sm={3} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled social-icon foot-social-icon text-sm-end mb-0">
                  <li className="list-inline-item mb-0">
                    <Link to="#" className="rounded">
                      <Icon
                        name="facebook"
                        
                      />
                    </Link>
                  </li>{" "}
                  <li className="list-inline-item mb-0">
                    <Link to="#" className="rounded">
                      <Icon
                        name="instagram"
                       
                      />
                    </Link>
                  </li>{" "}
                  <li className="list-inline-item mb-0">
                    <Link to="#" className="rounded">
                      <Icon
                        name="twitter"
                       
                      />
                    </Link>
                  </li>{" "}
                  <li className="list-inline-item mb-0">
                    <Link to="#" className="rounded">
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
