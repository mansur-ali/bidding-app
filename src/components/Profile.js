import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = /* Get the logged-in user's ID */;
      const response = await axios.get(`/api/users/${userId}`);
      setUser(response.data);
      setNotifications(response.data.notifications);
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>{user.username}'s Profile</h1>
      <h3>Notifications:</h3>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
