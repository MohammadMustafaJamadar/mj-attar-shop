import React from "react";
import { useFormik } from "formik";
import { FormFeedback } from "reactstrap";

const ErrorMassage = (props: any) => {
  const { errorMassage } = props;
  return (
    <React.Fragment>
      <FormFeedback type="invalid">{errorMassage}</FormFeedback>
    </React.Fragment>
  );
};

export default ErrorMassage;
