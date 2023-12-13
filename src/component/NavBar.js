import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const menuList = ["Woman", "Man", "Youth", "Child", "Home", "Sale", "Brand"];

export const NavBar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };
  const gotoLogin = () => {
    navigate(`/login`);
  };
  return (
    <div>
      <div className="nav_header">
        <div className="burger_menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span>logout</span>
          </div>
        ) : (
          <div onClick={gotoLogin}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>login</span>
          </div>
        )}
      </div>
      <div className="nav_logo">
        <Link to="/">
          <img
            src="https://www.shinailbo.co.kr/news/photo/202106/1419496_624961_3416.jpg"
            alt="logo"
            width={200}
          />
        </Link>
      </div>
      <div className="nav_menu_area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="search_box">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="제품검색" onKeyUp={onCheckEnter} />
      </div>
    </div>
  );
};

export default NavBar;
