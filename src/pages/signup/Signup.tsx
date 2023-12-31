import React from "react";

import { Container, Row, Col } from "reactstrap";

import ImageSection from "../../components/signup/ImageSection";
import SignupFormSection from "./SignupFormSection";

const Signup = () => {
  return (
    <React.Fragment>
      <section className="bg-auth-home d-table w-100">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={6}>
              <ImageSection />
            </Col>
            <Col lg={5} md={6}>
              <SignupFormSection />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Signup;
