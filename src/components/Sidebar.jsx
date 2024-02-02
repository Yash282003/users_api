// ParentComponent.jsx
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import UserCard from "./UserCard"; // Assuming the file path is correct
import axiosInstance from "../service/axios";
import Spinner from "react-bootstrap/Spinner";
import "./Sidebar.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/users");
        console.log(response.data);
        setUsers(response.data);
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleSidebar = (user) => {
    setSelectedUser(user);
    setShowSidebar(true);
  };

  return (
    <div className="sidebar">
      {isLoading ? (
        <div
          className="spinner-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner animation="border" />
        </div>
      ) : (
        <div>
          <UserCard users={users} toggleSidebar={toggleSidebar} />

          {selectedUser && (
            <div className="user-details">
              <div className="user-details-img">
                <img src={selectedUser.avatar} alt={selectedUser.name} />
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
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
