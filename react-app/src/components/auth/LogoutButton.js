import React from 'react';
import { logout } from '../../services/auth';
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/user'

const LogoutButton = ({ setAuthenticated }) => {
  const dispatch = useDispatch()

  const onLogout = async (e) => {
    await logout();
    await dispatch(logoutUser())
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
