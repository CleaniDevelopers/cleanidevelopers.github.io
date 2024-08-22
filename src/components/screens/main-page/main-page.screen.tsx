import { Navbar } from '@/components/sections/navbar/navbar.section';
import React from 'react'

export default function MainPage() {
  const navBarHidden = false;

  return (
    <div className='block bg-white h-screen' id='main'>
      <div className="!bg-white">
        <Navbar hiden={navBarHidden} dataTargetValue='main' />
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h1 className="pt-sans-caption-bold main-color-text">
                Cleani
              </h1>
            </div>
            <div className="col s12 m6">
              <h2 className='shanti-regular secondary-color-text text-4xl'>
                Somos la startup mexicana que está innovando en la industria de la limpieza
              </h2>
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                  <h1 className="card-title pt-sans-caption-bold mt-2 mb-4 main-color-text">
                    Inicia tu experiencia desde la comodidad de tu casa 🏠
                  </h1>
                  <p className="trirong-regular text-xl">
                    Descarga Cleani y olvídate de tener que pagar por horas o por costos extras que no te interesan. Con Cleani, escoge solamente las recámaras que quieres que se limpien y nosotros nos encargamos del resto.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  Descarga
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
