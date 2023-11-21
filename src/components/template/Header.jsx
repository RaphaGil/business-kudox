import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = (props) => {
    return (
      <header className="header d-none d-sm-flex flex-column">
        <div className='header-content'>
          <nav id="dropdownmenu">
            <ul className="horizontal-menu">
              <li>
                <div id='items'>
                  <Link to="/items">
                    <li className='btn'>Items</li>
                  </Link>
                  <ul className="subnav">
                    <li className="aluminium"><Link to="/aluminium">Aluminium Radiators</Link></li>
                    <li><Link to="/items/designer">Designer Radiators</Link></li>
                    <li><Link to="/items/panel">Panel Radiators</Link></li>
                    <li><Link to="/items/ladder">Ladder Towel Rail</Link></li>
                    <li><Link to="/items/electric">Electric Towel Rail</Link></li>
                    <li><Link to="/items/design">Design Towel Rails</Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <div id='supportitems'>
                <Link to="/support">
                  <button className="btn">Support</button>
                </Link>
                <ul className="subnav-support">
                  <li><Link to="/support/question">Question</Link></li>
                  <li><Link to="/support/designer">Designer Radiators</Link></li>
                </ul>
                </div>
              </li>
              <li>
                <Link to="/buy">
                  <button className='btn'>Where to Buy</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
}

export default Header;

