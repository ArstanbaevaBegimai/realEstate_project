import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { AuthValue } from './contexts/AuthContext';

export default function UserMenu({userMenuOpen, setUserMenuOpen, anchorElMenu}) {

  const navigate = useNavigate();
  const {userSignOut} = AuthValue();
  const handleClose = () => {
    setUserMenuOpen(false)
  };

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorElMenu}
        open={userMenuOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={() => {
            handleClose();
            userSignOut();
            navigate("/houses")
        }}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
