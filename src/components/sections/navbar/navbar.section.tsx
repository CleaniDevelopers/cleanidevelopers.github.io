import React from 'react'
import Image from 'next/image';

import logoAzul from '../../../../public/assets/images/Logo_Azul.png'

export interface NavbarProps {
  hiden: boolean;
  dataTargetValue: string;
  children?: Readonly<React.ReactNode>
}

export const Navbar = (props: NavbarProps) => {
  return (
    <>
      <nav className={(props.hiden ? '!hidden' : '') + ' h-20 pushpin'} data-target={props.dataTargetValue}>
        <div className="nav-wrapper white">
          <a href="/">
            <Image src={logoAzul} alt={'Logo Cleani'} className='brand-logo w-52 py-4' />
          </a>
        </div>
      </nav>
      {props.children}
    </>
  )
}
