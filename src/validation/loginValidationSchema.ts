import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .min(8, "Password must be min 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Pasword is required"),
});

export default loginValidationSchema;