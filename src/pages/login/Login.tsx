import React from "react";

import { Container, Row, Col } from "reactstrap";

import ImageSection from "../../components/login/ImageSection";
import LoginFormSectiom from "../../components/login/LoginFormSectiom";

const Login = () => {
  return (
    <React.Fragment>
      <section className="bg-home d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={6}>
              <ImageSection />
            </Col>
            <Col lg={5} md={6}>
              <LoginFormSectiom />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Login;
