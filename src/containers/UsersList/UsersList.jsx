import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UsersList = ({ users }) => {
  return (
    <section className="users-list" data-testid="user-list">
      {users 
        ? users.map(user => (<User key={user.id} infoUser={user}/>))
        : <Loading />
      }
    </section>
  )
};

export default UsersList;
