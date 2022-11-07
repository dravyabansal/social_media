import React from "react";
import "./styles/Sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/material";
import { Users } from "../data";
import CloseFriend from "./CloseFriend";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Sidebar;
