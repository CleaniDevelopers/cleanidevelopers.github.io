"use client"
import "./landing-page.styles.css"
import { Navbar } from "@/components/sections/navbar/navbar.section";

export default function LandigPageScreen() {
  const navBarHidden = true;

  return (
    <div className="block" id="landing">
      <div className="h-screen">
        <Navbar hiden={navBarHidden} dataTargetValue="landing">
          <div className="backgroundVideo">
            <video src="/assets/videos/cleanning-house-video.mp4" autoPlay loop muted />
          </div>
          <div className="welcomeBox flex flex-col items-center justify-between ">
            <div>
              <h1 className="pt-sans-caption-bold">CLEANI</h1>
            </div>
            <div className="container">
              <h2 className="shanti-regular text-center">La startup mexicana, innovando la industria de la limpieza</h2>
            </div>
            <div className="mb-10 text-center">
              <span className="text-xl">Baja para saber más</span>
              <br />
              <span className="text-4xl">&#8650;</span>
            </div>
          </div >
        </Navbar>
      </div>
    </div>
  )
}
