import { Navbar } from '@/components/sections/navbar/navbar.section';
import React from 'react'
import Image from 'next/image'

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
                  <div className="row">
                    <div className="col s6">
                      <span className="card-title shanti-regular secondary-color-text">
                        ¡No lo pienses más, pide tu primer servicio!
                      </span>
                      <span className="trirong-light text-xl">
                        Descubre los increíbles descuentos que tenemos para ti
                      </span>
                    </div>
                    <div className="col s6">
                      <div className="flex flex-col items-center justify-between">
                        <a href="https://play.google.com/store/apps/details?id=com.cleani.mx.app&pcampaignid=web_share">
                          <Image
                            src="/assets/images/GooglePlayDownloadImage.webp"
                            width={200}
                            height={100}
                            alt="Google Play Download Image"
                          />
                        </a>
                        <a href="https://apps.apple.com/us/app/cleani/id6482783178">
                          <Image
                            src="/assets/images/AppStoreDownloadImage.webp"
                            width={180}
                            height={100}
                            alt="Google Play Download Image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
