// /Users/vivien/Documents/Entreprisedufutur/src/components/Navbar.jsx

import React from 'react';
import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import Navlink from './Navlink';
import UserMenu from './UserMenu'; // Import the UserMenu component

export function Navbar() {
  const { toggleColorMode } = useColorMode();
  const { logout, currentUser } = useAuth();

  return (
    <Box
      borderBottom='2px'
      borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
      mb={4}
      py={4}
    >
      <HStack justifyContent='flex-end' maxW='container.lg' mx='auto' spacing={4}>
        <Navlink to='/' name='Customer account' size='lg' />
        <Spacer />
        {!currentUser && <Navlink to='/login' name='Login' />}
        {!currentUser && <Navlink to='/register' name='Register' />}
        {currentUser && <UserMenu />} {/* Use the UserMenu component here */}
        {currentUser && (
          <Navlink
            to='/logout'
            name='Logout'
            onClick={async (e) => {
              e.preventDefault();
              await logout();
            }}
          />
        )}
        <IconButton
          variant='ghost'
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label='toggle-dark-mode'
        />
      </HStack>
    </Box>
  );
}
