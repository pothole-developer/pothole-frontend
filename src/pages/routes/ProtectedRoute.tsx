import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const currentLocation = useLocation();

  let id = localStorage.getItem("id");
  const isLogin = (id !== '' && id !== null);


  return (
    isLogin?<Outlet></Outlet>:<Navigate to={"/"} state={{redirectedFrom: currentLocation}} replace></Navigate>
  );
};

export default ProtectedRoute;