import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';

import logoAzul from '../../../../public/assets/images/Logo_Azul.png'

interface NavbarProps {
}

export const Navbar = (props: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Image src={logoAzul} alt={'Logo Cleani'} className='w-52' />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
