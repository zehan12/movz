import { Outlet, NavLink } from "react-router-dom";
import Header from "../components/Layout/Header";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
