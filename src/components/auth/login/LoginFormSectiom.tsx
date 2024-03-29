import React, { useState } from "react";
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
import { Icon } from "ts-react-feather-icons";
import { TUserLoginDetails } from "../../../types/AuthTypes";
import { useFormik } from "formik";
import loginValidationSchema from "../../../validation/loginValidationSchema";
import ErrorMassage from "../../common/error/ErrorMassage";

const LoginFormSectiom = () => {
  const defaultLoginDetails: TUserLoginDetails = { email: "", password: "" };
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const formik = useFormik({
    initialValues: defaultLoginDetails,
    onSubmit: (values: any) => {
      handelSubmit(values);
    },
    validationSchema: loginValidationSchema,
  });

  const handelPasswordShow = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  const handelSubmit = (values: any) => {
    console.log(values, "values");
  };

  return (
    <React.Fragment>
      <Card className="login-page bg-white shadow rounded border-0">
        <CardBody>
          <div className="card-title text-center">
            <h4 className="mb-4">Login</h4>
          </div>
          <Form className="login-form mt-4" onSubmit={formik.handleSubmit}>
            <Row>
              <Col lg={12}>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="email">
                    Your Email <span className="text-danger">*</span>
                  </Label>
                  <div
                    className="form-icon position-relative "
                    style={{ marginBottom: "5px" }}
                  >
                    <div className="fea icon-sm icons">
                      <Icon name="user" size={15} />
                    </div>
                  </div>
                  <Input
                    type="text"
                    className="form-control ps-5"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    invalid={
                      formik.touched.email && formik.errors.email ? true : false
                    }
                  />
                  {formik.touched.email && formik.errors.email && (
                    <ErrorMassage errorMassage={formik.errors.email} />
                  )}
                </div>
              </Col>

              <Col lg={12}>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="password">
                    Password <span className="text-danger">*</span>
                  </Label>
                  <div
                    className="form-icon position-relative"
                    style={{ marginBottom: "5px", cursor: "pointer" }}
                  >
                    <i
                      className="fea icon-sm icons"
                      onClick={handelPasswordShow}
                    >
                      <Icon
                        name={`${isPasswordShow ? "eye-off" : "eye"}`}
                        size={15}
                      />
                    </i>
                  </div>
                  <Input
                    type={`${isPasswordShow ? "text" : "password"}`}
                    className="form-control ps-5"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    invalid={
                      formik.touched.password && formik.errors.password
                        ? true
                        : false
                    }
                  />
                  {formik.touched.password && formik.errors.password && (
                    <ErrorMassage errorMassage={formik.errors.password} />
                  )}
                </div>
              </Col>

              <Col lg={12}>
                <div className="d-flex justify-content-between">
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
                        Remember me
                      </Label>
                    </div>
                  </div>
                  <p className="forgot-pass mb-0">
                    <Link to="auth-re-password" className="text-dark fw-bold">
                      Forgot password ?
                    </Link>
                  </p>
                </div>
              </Col>
              <Col lg={12} className="mb-0">
                <div className="d-grid">
                  <Button type="submit" color="primary">
                    Sign in
                  </Button>
                </div>
              </Col>
              <Col lg={12} className="mt-4 text-center">
                <h6>Or Login With</h6>
                <Row>
                  <div className="col-6 mt-3">
                    <div className="d-grid">
                      <Link to="#" className="btn btn-light">
                        <i className="mdi mdi-facebook text-primary"></i>{" "}
                        Facebook
                      </Link>
                    </div>
                  </div>

                  <div className="col-6 mt-3">
                    <div className="d-grid">
                      <Link to="#" className="btn btn-light">
                        <i className="mdi mdi-google text-danger"></i> Google
                      </Link>
                    </div>
                  </div>
                </Row>
              </Col>
              <Col xs={12} className="text-center">
                <p className="mb-0 mt-3">
                  <small className="text-dark me-2">
                    Don't have an account ?
                  </small>{" "}
                  <Link to="/signup" className="text-dark fw-bold">
                    Sign Up
                  </Link>
                </p>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default LoginFormSectiom;
