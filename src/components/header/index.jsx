import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../index.jsx';
import { doSignOut } from '../../firebase/auth';


const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center">
        {/* <h1 className="text-3xl font-bold text-gray-800">Weather App</h1> */}
      </div>
      <div className="flex items-center">
        {
          userLoggedIn
            ?
            <>
              <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className="text-sm text-black bg-gray-500 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                Logout
              </button>
            </>
            :
            <>
              {/* <Link to="/login" className="text-sm text-gray-600 hover:text-gray-800">
                Login
              </Link>
              <Link to="/register" className="text-sm text-gray-600 hover:text-gray-800 ml-2">
                Register
              </Link> */}
            </>
        }
      </div>
    </nav>
  );
};

export default Header;
