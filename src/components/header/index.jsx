import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../index.jsx';
import { doSignOut } from '../../firebase/auth';
import SearchBar from '../../SearchBar.js'; // Import the SearchBar component

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <nav className="justify-between items-center py-4 text-white">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Weather App</h1>
      </div>
      <div className="flex justify-center items-center w-full">
        {
          userLoggedIn
            ?
            <>
              <SearchBar className="mx-auto" /> {/* Center the SearchBar component horizontally */}
              <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} class="absolute top-0 right-0 text-sm bg-green-700 hover:bg-green-900 transition duration-300 ease-in-out px-4 py-2 rounded">
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
