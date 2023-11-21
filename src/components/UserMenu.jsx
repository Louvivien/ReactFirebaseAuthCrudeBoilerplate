// /Users/vivien/Documents/Entreprisedufutur/src/components/UserMenu.jsx

import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const UserMenu = () => {
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<FaChevronDown />}>
    Actions
    </MenuButton>
      <MenuList>
        <MenuItem as={Link} to="/orders">My orders</MenuItem>
        <MenuItem as={Link} to="/order">Create an order</MenuItem>
        <MenuItem as={Link} to="/profile">Profile page</MenuItem>
        {/* <MenuItem as={Link} to="/reset-password">Reset my password</MenuItem> */}
        {/* Conditionally render this MenuItem */}
        {currentUser?.displayName == null && (
          <MenuItem as={Link} to="/forgot-password">Mot de passe oublié</MenuItem>
        )}        <MenuItem as={Link} to="/test">Test Page</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
