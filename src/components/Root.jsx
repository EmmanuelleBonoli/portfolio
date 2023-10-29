import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";

const Root = () => {
  return (
    <div className="root">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
