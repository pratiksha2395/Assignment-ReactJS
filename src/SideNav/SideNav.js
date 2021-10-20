import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import {
  FaFlag,
  FaExclamationTriangle,
  FaBars,
  FaInbox,
  FaTrash,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import { Link, useHistory } from "react-router-dom";

import "react-pro-sidebar/dist/css/styles.css";
import "./SideNav.css";

const SideNav = (props) => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  let history = useHistory();

  const activeColor = (current) => {
    if (history.location.pathname === current) {
      return "#e0d9f5de";
    }
  };

  const handleHomeClick = () => {
    history.push("/");
    console.log(history, "history");
  };

  const handleFlaggedClick = () => {
    history.push("/flagged");
    console.log(history, "history flag");
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FaBars /> : <FaBars />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                active={true}
                icon={<FaInbox />}
                onClick={handleHomeClick}
                style={{ backgroundColor: activeColor("/") }}
              >
                Inbox{" "}
                <span className="badge bg-primary">{props.mailCount}</span>
              </MenuItem>
              <MenuItem
                icon={<FaFlag />}
                onClick={handleFlaggedClick}
                style={{ backgroundColor: activeColor("/flagged") }}
              >
                Flagged{" "}
                <span className="badge bg-primary">{props.flagedCount}</span>
              </MenuItem>
              <MenuItem icon={<FaExclamationTriangle />}>Spam</MenuItem>
              <MenuItem icon={<FaTrash />}>Deleted</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideNav;
