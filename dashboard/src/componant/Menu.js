import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const menuItems = [
{ label: "Dashboard", path: "/" },
{ label: "Orders", path: "/orders" },
{ label: "Holdings", path: "/holdings" },
{ label: "Positions", path: "/positions" },
{ label: "Funds", path: "/funds" },
];

const Menu = () => {
const { pathname } = useLocation();
const navigate = useNavigate();
const [username, setUsername] = useState("");

useEffect(() => {
const verifyUser = async () => {
try {
const { data } = await axios.post(
"http://localhost:4001/",
{},
{ withCredentials: true }
);


    if (data.status) {
      setUsername(data.user);
    } else {
      window.location.href = "http://localhost:3000/login";
    }
  } catch (error) {
    console.error(
      "User verification failed:",
      error.response?.data || error.message
    );
    window.location.href = "http://localhost:3000/login";
  }
};

verifyUser();


}, [navigate]);

const handleLogout = async () => {
try {
  await axios.post(
    "http://localhost:4001/logout",
    {},
    { withCredentials: true }
  );
} catch (error) {
  console.error(
    "Logout failed:",
    error.response?.data || error.message
  );
} finally {
  window.location.href = "http://localhost:3000";
}
};

return ( <div className="menu-container"> <div className="menus"> <ul>
{menuItems.map(({ label, path }) => {
const isActive = pathname === path;


        return (
          <li key={path}>
            <Link
              to={path}
              style={{ textDecoration: "none" }}
              aria-current={isActive ? "page" : undefined}
            >
              <p className={isActive ? "menu selected" : "menu"}>
                {label}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>

    <hr />

    <div className="profile">
      <div className="avatar">
        {username ? username.slice(0, 2).toUpperCase() : "U"}
      </div>

      <p className="username">{username || "Loading..."}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  </div>
</div>


);
};

export default Menu;
