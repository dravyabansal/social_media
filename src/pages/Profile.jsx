import React from "react";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./Style/Profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRigthTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt="MERN Stack"
              />
              <img
                className="profileUserImg"
                src="assets/post/7.jpeg"
                alt="MERN Stack"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">DravyaFolio</h4>
              <span className="profileInfoDesc">
                Welcome to the world of The SHs😊
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
