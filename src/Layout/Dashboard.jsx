import { Link, Outlet } from 'react-router-dom';
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUser, FaUsers, FaUtensilSpoon, FaWallet } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import useCart from '../hooks/useCart';

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin
  // const isAdmin = true;
  
  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <input
        id="my-drawer-2"
        type="checkbox"
        defaultChecked={true}
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <li>
                <Link to={'/dashboard/home'}>
                  <FaHome></FaHome>Admin Home
                </Link>
              </li>

              <li>
                <Link>
                  <FaUtensilSpoon></FaUtensilSpoon>Add Items
                </Link>
              </li>
              <li>
                <Link to={'/dashboard/history'}>
                  <FaWallet></FaWallet>Manage Items
                </Link>
              </li>
              <li>
                <Link to={'/dashboard/bookings'}>
                  <FaBook></FaBook>Manage Bookings
                </Link>
              </li>
              <li>
                <Link to={'/dashboard/allusers'}>
                  <FaUsers></FaUsers>Manage Users
                </Link>
              </li>
            
            </>
          ) : (
            <>
              <li>
                <Link>
                  <FaHome></FaHome>User Home
                </Link>
              </li>

              <li>
                <Link>
                  <FaCalendarAlt></FaCalendarAlt>Reservations
                </Link>
              </li>
              <li>
                <Link to={'/dashboard/history'}>
                  <FaWallet></FaWallet>Payment History
                </Link>
              </li>
              <li>
                <Link to={'/dashboard/mycart'}>
                  <FaShoppingCart></FaShoppingCart>My Cart
                  <span className="badge badge-secondary">+{cart.length}</span>
                </Link>
              </li>
            </>
          )}
          {/* Divider */}
          <div className="divider"></div>

          <li>
            <Link to={'/'}>
              <FaHome></FaHome>Home
            </Link>
          </li>
          <li>
            <Link to={'/menu'}>
              <FiMenu></FiMenu>Menu
            </Link>
          </li>
          <li>
            <Link to={'/oder/salad'}>
              <FaShoppingCart></FaShoppingCart>Shop
            </Link>
          </li>
          <li>
            <Link>
              <FaShoppingCart></FaShoppingCart>My Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
