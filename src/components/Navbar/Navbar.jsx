import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import './Navbar.scss';


// import { images } from '../../constants'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="#">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Pricing
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" href="#">
                Action
              </Link>
              <Link className="dropdown-item" href="#">
                Another action
              </Link>
              <Link className="dropdown-item" href="#">
                Something else here
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;







// const Navbar = () => {
//   return (
//     <nav>
//       <div className="nav-wrapper">
//         <Link to="/" className="brand-logo">
//           My Logo
//         </Link>
//         <ul id="nav-mobile" className="right hide-on-med-and-down">
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar




    