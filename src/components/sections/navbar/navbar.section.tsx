import React from 'react'
import Image from 'next/image';

import logoAzul from '../../../../public/assets/images/Logo_Azul.png'

interface NavbarProps {
}

export const Navbar = (props: NavbarProps) => {
  return (
    <Image src={logoAzul} alt={'Logo Cleani'} className='w-52' />
  )
}
