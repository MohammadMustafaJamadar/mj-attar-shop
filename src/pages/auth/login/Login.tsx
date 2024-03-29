import React, { useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

import ImageSection from "../../../components/auth/login/ImageSection";
import LoginFormSectiom from "../../../components/auth/login/LoginFormSectiom";

const Login = () => {
  useEffect(()=>{
    document.title = "Login"
  },[])
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
