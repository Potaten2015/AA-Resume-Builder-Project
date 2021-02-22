import React from 'react';
import { logout } from '../../services/auth';

const LogoutButton = ({ setAuthenticated }) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return (
    <button
      onClick={onLogout}
      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
