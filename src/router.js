import Home from "src/containers/Home";
import Login from "src/containers/Login";


export default [
  {
    path: '/',
    component: Home,
    exact: true,
  }, 
  {
    path: '/login',
    component: Login,
    exact: true,
  }
];