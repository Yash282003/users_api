// ParentComponent.jsx
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import UserCard from "./UserCard"; // Assuming the file path is correct
import axiosInstance from "../service/axios";
import Spinner from "react-bootstrap/Spinner";
import Loader from "./Loading";
import "./Sidebar.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/users");
        console.log(response.data);
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        alert("Something Went Wrong")
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleSidebar = (user) => {
    console.log(user)
    setSelectedUser(user);
    setShowSidebar(true);
  };

  return (
    <div className="sidebar">
      {loading ? (
        <Loader />
      ) : (
        <div className="sidebar-wrapper">
          <UserCard users={users} toggleSidebar={toggleSidebar} />

          {selectedUser && (
            <div className="user-details">
              <div className="user-details-img">
                <img src={selectedUser.avatar} alt={selectedUser.name} />
              </div>
            <div className="User-details-wrapper">
              <div className="user-details-info">
                <p className="user-bio-title">
                 Name :
                </p>
                <p className="user-bio-title">Bio :</p>
                <p className="user-bio-title">Job Title :</p>
                <p className="user-bio-title">Email :</p>
                <p className="user-bio-title">UserName :</p>
              </div>
              <div className="user-details-info">
                <p>
                  {selectedUser.profile.firstName}{" "}
                  {selectedUser.profile.lastName}
                </p>
                <p className="user-bio">{selectedUser.Bio}</p>
                <p className="user-bio">{selectedUser.jobTitle}</p>
                <p className="user-bio">{selectedUser.profile.email}</p>
                <p className="user-bio">{selectedUser.profile.username}</p>
              </div>
              </div>

            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
