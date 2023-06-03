import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes('login');
  console.log(isLogin);
  return (
    <div>
      {isLogin || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isLogin || <Footer></Footer>}
    </div>
  );
};

export default Main;
