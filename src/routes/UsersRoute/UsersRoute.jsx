import React, { useState, useEffect } from 'react';  

import UsersList from '../../containers/UsersList';

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
