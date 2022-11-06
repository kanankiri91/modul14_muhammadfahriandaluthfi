import {Outlet} from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";

const Layout = () => {
  return (
    <div className="App">
          <Header />
          <Navigation />
          <Outlet />
          <Footer />
      </div>

  )
};

export default Layout;

