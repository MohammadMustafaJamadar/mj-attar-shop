import * as Yup from "yup";

const signupValidationSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "First name is too short!")
      .max(70, "Fisrt name is too long!")
      .required("First name is required"),
    lastname: Yup.string()
      .min(2, "Last name too short!")
      .max(70, "Last name too long!")
      .required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string()
      .min(8, "Password must be min 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
      )
      .required("Pasword is required"),
  });


  export default signupValidationSchema;
  