import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserInfo } from '../../store/reducers/authentication/authentication';

export default function Header() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let loginUserInfo = useSelector((state) => state.authentication.userInfo);

  function logOutUser() {
    dispatch(updateUserInfo(null));
    navigate('/login');
  }
  return (
    <div className="page-header-wrap">
      <div className="navbar-header">KitKart</div>
      <div className="navbar-content"></div>
      <div className="navbar-footer">
        {loginUserInfo == null ? (
          ''
        ) : (
          <i
            className="fa-solid fa-right-from-bracket"
            id="logoutIcon"
            onClick={() => logOutUser()}
          ></i>
        )}
      </div>
    </div>
  );
}
