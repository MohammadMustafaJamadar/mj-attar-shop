import Home from "../pages/container/home/Home";
import Login from "../pages/auth/login/Login";
import Signup from "../pages/auth/signup/Signup";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
];

export default routes;
