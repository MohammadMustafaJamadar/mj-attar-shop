import React, { ChangeEvent, useState } from "react";

import { Icon } from "ts-react-feather-icons";

import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Input,
  Label,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { handelInput } from "../../../utils/helper";
import { TUserSignUp } from "../../../types/AuthTypes";

const SignupFormSection = () => {
  const defaultUserData: TUserSignUp = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(defaultUserData);


  return (
    <React.Fragment>
      <Card className="shadow rounded border-0">
        <CardBody>
          <h4 className="card-title text-center">Signup</h4>
          <Form className="login-form mt-4">
            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="firstname">
                    First name <span className="text-danger">*</span>
                  </Label>
                  <div
                    className="form-icon position-relative"
                    style={{ marginBottom: "5px" }}
                  >
                    <i className="fea icon-sm icons">
                      <Icon name="user" size={15} />
                    </i>
                  </div>
                  <Input
                    type="text"
                    className="form-control ps-5"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      handelInput(setUser, user, event);
                    }}
                    value={user.firstname}
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="lastname">
                    Last name <span className="text-danger">*</span>
                  </Label>
                  <div
                    className="form-icon position-relative"
                    style={{ marginBottom: "5px" }}
                  >
                    <i className="fea icon-sm icons">
                      <Icon name="user-check" size={15} />
                    </i>
                  </div>
                  <Input
                    type="text"
                    className="form-control ps-5"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      handelInput(setUser, user, event);
                    }}
                    value={user.lastname}
                  />
                </div>
              </Col>
              <Col md="12">
                <div className="mb-3">
                  <Label className="form-label" htmlFor="email">
                    Your Email <span className="text-danger">*</span>
                  </Label>
                  <div
                    className="form-icon position-relative"
                    style={{ marginBottom: "5px" }}
                  >
                    <i className="fea icon-sm icons">
                      <Icon name="mail" size={15} />
                    </i>
                  </div>
                  <Input
                    type="text"
                    className="form-control ps-5"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      handelInput(setUser, user, event);
                    }}
                    value={user.email}
                  />
                </div>
              </Col>

              <Col md={12}>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="password">
                    Password <span className="text-danger">*</span>
                  </Label>
                  <div
                    className="form-icon position-relative"
                    style={{ marginBottom: "5px" }}
                  >
                    <i className="fea icon-sm icons">
                      <Icon name="key" size={15} />
                    </i>
                  </div>
                  <Input
                    type="password"
                    className="form-control ps-5"
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      handelInput(setUser, user, event);
                    }}
                    value={user.password}
                  />
                </div>
              </Col>

              <Col md={12}>
                <div className="mb-3">
                  <div className="form-check">
                    <Input
                      type="checkbox"
                      className="form-check-input"
                      id="flexCheckDefault"
                    />
                    <Label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      I Accept{" "}
                      <Link to="#" className="text-primary">
                        Terms And Condition
                      </Link>
                    </Label>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="d-grid">
                  <Button
                    color="primary"
                    onClick={() => {
                      console.log(user, "user");
                    }}
                  >
                    Register
                  </Button>
                </div>
              </Col>
              <Col md={12} className="mt-4 text-center">
                <h6>Or Signup With</h6>
                <Row>
                  <Col className="col-6 mt-3">
                    <div className="d-grid">
                      <Link to="#" className="btn btn-light">
                        <i className="mdi mdi-facebook text-primary"></i>{" "}
                        Facebook
                      </Link>
                    </div>
                  </Col>

                  <Col className="col-6 mt-3">
                    <div className="d-grid">
                      <Link to="#" className="btn btn-light">
                        <i className="mdi mdi-google text-danger"></i> Google
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
              <div className="mx-auto">
                <p className="mb-0 mt-3">
                  <small className="text-dark me-2">
                    Already have an account ?
                  </small>{" "}
                  <Link to="/login" className="text-dark fw-bold">
                    Sign In
                  </Link>
                </p>
              </div>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default SignupFormSection;
