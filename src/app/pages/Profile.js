import React from "react";
import DefaultLayout from "./Layouts/DefaultLayout";
import GetUser from "../components/UserProfile/GetUser/GetUser";
import EditUser from "../components/UserProfile/EditUser/EditUser";
import ChangePass from "../components/UserProfile/ChangePass/ChangePass";
import "./styles/Profile.css";

const Profile = () => {
  return (
    <DefaultLayout>
      <div className="profile">
        <div className="profileComp">
          <div className="row profileComp">
            <div className="profilePageImgDiv">
              <img
                className="profilePageImg"
                src={require("../images/profilebackground.png")}
              />
            </div>
            {/*Calling for GetUser, EditUser and ChangePass components*/}
            <GetUser />
            <EditUser />
            <ChangePass />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
